/**
 * Interactive Canvas Radar Chart Widget
 * Ultra-crisp High DPI Radar visualization with interactive hover & animated morphing
 */

class InteractiveRadar {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.labels = [];
    this.values = [];
    this.currentValues = [];
    this.targetValues = [];
    this.accentColor = '#00f0ff';
    this.accentGlow = 'rgba(0, 240, 255, 0.25)';
    this.animProgress = 0;
    this.hoverIndex = -1;
    this.isHovering = false;
    this.mousePos = { x: 0, y: 0 };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.onMouseLeave());
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = Math.min(rect.width, 380);

    this.canvas.width = size * dpr;
    this.canvas.height = size * dpr;
    this.canvas.style.width = `${size}px`;
    this.canvas.style.height = `${size}px`;

    this.ctx.scale(dpr, dpr);
    this.centerX = size / 2;
    this.centerY = size / 2;
    this.radius = size * 0.38;

    this.draw();
  }

  setData(labels, values, accentColor, accentGlow) {
    this.labels = labels;
    this.targetValues = values;
    this.accentColor = accentColor || '#00f0ff';
    this.accentGlow = accentGlow || 'rgba(0, 240, 255, 0.25)';

    // Start morph animation
    this.animProgress = 0;
    this.startAnimation();
  }

  startAnimation() {
    if (this.animId) cancelAnimationFrame(this.animId);

    const startValues = this.currentValues.length === this.targetValues.length 
      ? [...this.currentValues] 
      : this.targetValues.map(() => 0);

    const startTime = performance.now();
    const duration = 850;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      this.currentValues = this.targetValues.map((target, idx) => {
        const start = startValues[idx] || 0;
        return start + (target - start) * ease;
      });

      this.draw();

      if (progress < 1) {
        this.animId = requestAnimationFrame(animate);
      }
    };

    this.animId = requestAnimationFrame(animate);
  }

  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    const count = this.labels.length;
    if (!count) return;

    let closestIndex = -1;
    let minDistance = 24; // Threshold radius in pixels

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
      const val = (this.currentValues[i] || 0) / 100;
      const r = this.radius * val;
      const x = this.centerX + r * Math.cos(angle);
      const y = this.centerY + r * Math.sin(angle);

      const dist = Math.hypot(this.mousePos.x - x, this.mousePos.y - y);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = i;
      }
    }

    if (this.hoverIndex !== closestIndex) {
      this.hoverIndex = closestIndex;
      this.draw();
    }
  }

  onMouseLeave() {
    this.hoverIndex = -1;
    this.draw();
  }

  draw() {
    if (!this.ctx || !this.labels.length) return;
    const ctx = this.ctx;
    const count = this.labels.length;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    ctx.clearRect(0, 0, this.centerX * 2, this.centerY * 2);

    // 1. Draw Background Polygon Web Rings (5 levels: 20%, 40%, 60%, 80%, 100%)
    const ringLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    ringLevels.forEach((level, ringIdx) => {
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
        const r = this.radius * level;
        const x = this.centerX + r * Math.cos(angle);
        const y = this.centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)';
      ctx.lineWidth = ringIdx === ringLevels.length - 1 ? 1.5 : 1;
      ctx.stroke();

      if (ringIdx % 2 === 1) {
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(15, 23, 42, 0.02)';
        ctx.fill();
      }
    });

    // 2. Draw Spokes / Axes from Center to Vertices
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
      const x = this.centerX + this.radius * Math.cos(angle);
      const y = this.centerY + this.radius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(this.centerX, this.centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label at Outer Edge
      const labelDistance = this.radius + 20;
      const lx = this.centerX + labelDistance * Math.cos(angle);
      const ly = this.centerY + labelDistance * Math.sin(angle);

      ctx.font = '500 11px Outfit, sans-serif';
      ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.labels[i], lx, ly);
    }

    // 3. Draw Active Skill Polygon
    const points = [];
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
      const val = (this.currentValues[i] || 0) / 100;
      const r = this.radius * val;
      const x = this.centerX + r * Math.cos(angle);
      const y = this.centerY + r * Math.sin(angle);
      points.push({ x, y, val: this.currentValues[i], label: this.labels[i] });

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Fill with soft accent gradient
    ctx.fillStyle = this.accentGlow;
    ctx.fill();

    // Outline
    ctx.strokeStyle = this.accentColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // 4. Draw Vertex Nodes
    points.forEach((pt, idx) => {
      const isHovered = this.hoverIndex === idx;

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isHovered ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#ffffff' : this.accentColor;
      ctx.fill();
      ctx.strokeStyle = isDark ? '#07090e' : '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (isHovered) {
        // Glowing halo for hovered vertex
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = this.accentColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Tooltip bubble
        this.drawTooltip(ctx, pt.x, pt.y, `${pt.label}: ${Math.round(pt.val)}%`);
      }
    });
  }

  drawTooltip(ctx, x, y, text) {
    ctx.font = '600 12px JetBrains Mono, monospace';
    const textWidth = ctx.measureText(text).width;
    const paddingX = 10;
    const paddingY = 6;
    const boxWidth = textWidth + paddingX * 2;
    const boxHeight = 26;

    let tipX = x - boxWidth / 2;
    let tipY = y - 36;

    // Boundary containment
    if (tipY < 10) tipY = y + 16;
    if (tipX < 10) tipX = 10;
    if (tipX + boxWidth > this.centerX * 2 - 10) tipX = this.centerX * 2 - 10 - boxWidth;

    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = this.accentColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(tipX, tipY, boxWidth, boxHeight, 6);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, tipX + boxWidth / 2, tipY + boxHeight / 2);
  }
}
