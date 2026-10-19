/**
 * Portfolio & E-CV Multi-Profile Data Store
 * Members: Muhammad Iqbal Ramdhani, Nida Fuadia, Viola Amelia
 * Joint Project: SYNAPSE AI - Autonomous Knowledge & Workflow Platform
 */

const PORTFOLIO_DATA = {
  team: {
    name: "Nexus Trio Studio",
    tagline: "Collaborative Engineering, Empathetic Design & Next-Gen Intelligence",
    description: "Kolaborasi tiga talenta multidisiplin: Muhammad Iqbal Ramdhani (Fullstack & Cloud Architect), Nida Fuadia (UI/UX Strategist & Frontend Engineer), dan Viola Amelia (AI/ML Engineer & Mobile Specialist). Kami menggabungkan arsitektur software tangguh, desain berkelas berpusat pada manusia, dan kecerdasan artifisial canggih.",
    metrics: [
      { label: "Total Projects Shipped", value: 24, suffix: "+" },
      { label: "Client Satisfaction", value: 99.4, suffix: "%" },
      { label: "Code Commits", value: 1850, suffix: "+" },
      { label: "Combined Experience", value: 9, suffix: " Years" }
    ],
    jointProject: {
      id: "synapse-ai",
      title: "SYNAPSE AI",
      subtitle: "Autonomous Multi-Agent Knowledge & Real-Time Intelligence Platform",
      category: "Fullstack • AI/ML • Design System",
      badge: "Flagship Collaboration Project",
      date: "2025 - 2026",
      summary: "Platform kolaborasi bertenaga AI yang dirancang dan dibangun bersama dari nol oleh Iqbal, Nida, dan Viola. Menghubungkan enterprise knowledge base dengan autonomous multi-agent reasoning, visualisasi data real-time, dan antarmuka bento-grid modular yang intuitif.",
      liveUrl: "https://synapse-ai-preview.web.app",
      githubUrl: "https://github.com/nexustrio/synapse-ai-platform",
      stats: [
        { label: "Query Latency", value: "< 42ms" },
        { label: "Accuracy Score", value: "99.2%" },
        { label: "Concurrent Agents", value: "64+" },
        { label: "User Delight Rate", value: "98.7%" }
      ],
      techStack: [
        { name: "Python / FastAPI", category: "Backend" },
        { name: "TypeScript", category: "Language" },
        { name: "Next.js / Vanilla ES6", category: "Frontend" },
        { name: "PyTorch & LangChain", category: "AI / ML" },
        { name: "Docker & K8s", category: "Cloud" },
        { name: "Tailwind & Vanilla CSS", category: "Design" },
        { name: "PostgreSQL & pgvector", category: "Database" },
        { name: "Figma Token Studio", category: "UI/UX" }
      ],
      contributions: {
        iqbal: {
          role: "Lead Systems Architect & Cloud Backend",
          tagline: "High-throughput microservices, distributed caching, and vector indexing",
          tasks: [
            "Merancang arsitektur microservices event-driven dengan RabbitMQ dan gRPC untuk streaming respons AI tanpa jeda.",
            "Mengimplementasikan vector storage berkinerja tinggi menggunakan PostgreSQL + pgvector dan Redis caching layer.",
            "Membangun CI/CD pipeline otomatis berbasis GitHub Actions menuju Kubernetes cluster dengan zero-downtime rolling update.",
            "Menjaga skalabilitas sistem hingga menampung 5,000+ request per detik dengan latensi rata-rata di bawah 45ms."
          ],
          codeHighlight: `// Vector Search Gateway Engine (Iqbal)
async function searchVectorSpace(embedding, threshold = 0.88, limit = 10) {
  const query = \`
    SELECT doc_id, chunk_text, 1 - (embedding <=> $1) AS cosine_similarity
    FROM knowledge_vectors
    WHERE 1 - (embedding <=> $1) >= $2
    ORDER BY cosine_similarity DESC
    LIMIT $3;\`;
  return await db.query(query, [embedding, threshold, limit]);
}`
        },
        nida: {
          role: "Lead UI/UX Strategist & Design System Lead",
          tagline: "Cognitive-friendly micro-interactions, accessibility, and high-gloss aesthetics",
          tasks: [
            "Merancang Design System komprehensif bernama 'Synapse Neo' di Figma dengan 120+ token warna, tipografi, dan komponen interaktif.",
            "Mengembangkan antarmuka bento-grid adaptif dengan micro-animations 60fps untuk visualisasi status multi-agent.",
            "Melakukan usability testing dan cognitive load analysis pada 25 pengguna, menghasilkan kenaikan task completion rate hingga 40%.",
            "Memastikan compliance WCAG 2.1 Level AAA untuk kontras warna, pembaca layar (screen-readers), dan keyboard navigation."
          ],
          codeHighlight: `/* Dynamic Fluid Responsive Design Tokens (Nida) */
:root {
  --synapse-surface: rgba(15, 23, 42, 0.72);
  --synapse-border: rgba(255, 255, 255, 0.08);
  --synapse-glow: radial-gradient(circle, #00f0ff22 0%, transparent 70%);
  --motion-spring: cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(24px) saturate(180%);
}`
        },
        viola: {
          role: "Lead AI/ML Engineer & Real-Time Pipeline",
          tagline: "Fine-tuned LLM embeddings, RAG pipeline, and telemetry inference",
          tasks: [
            "Mengembangkan hybrid RAG (Retrieval-Augmented Generation) pipeline dengan fine-tuned embeddings untuk akurasi domain-spesifik 99.2%.",
            "Membangun model context-compression yang memangkas konsumsi token LLM hingga 48% tanpa degradasi pemahaman makna.",
            "Membangun lightweight on-device neural parser untuk kompresi dokumen teks lokal sebelum dikirim ke server.",
            "Mengimplementasikan anomaly detection model untuk memantau integritas output AI dan mencegah hallucination."
          ],
          codeHighlight: `# Neural Re-ranking & Deduplication Pipeline (Viola)
def rerank_context_chunks(query_emb, candidates, top_k=5):
    cross_scores = cross_encoder.predict([(query, c.text) for c in candidates])
    ranked_indices = np.argsort(cross_scores)[::-1][:top_k]
    return [candidates[i] for i in ranked_indices if cross_scores[i] > 0.85]`
        }
      },
      keyFeatures: [
        {
          title: "Multi-Agent Orchestration",
          description: "Agen pintar independen beroperasi paralel untuk sintesis riset, fact-checking, dan komputasi otomatis.",
          icon: "cpu"
        },
        {
          title: "Sub-50ms Vector Retrieval",
          description: "Pencarian semantik berkecepatan ultra-tinggi melintasi jutaan lembar dokumen enterprise terenkripsi.",
          icon: "zap"
        },
        {
          title: "Bento-Grid Adaptive UI",
          description: "Antarmuka cerdas yang menyesuaikan tata letak berdasarkan konteks interaksi pengguna secara real-time.",
          icon: "layout"
        },
        {
          title: "Explainable AI Traceability",
          description: "Setiap kesimpulan AI memiliki tautan sitasi sumber data orisinal dengan visualisasi confidence score.",
          icon: "shield"
        }
      ]
    }
  },

  members: {
    iqbal: {
      id: "iqbal",
      name: "Muhammad Iqbal Ramdhani",
      nickname: "Iqbal",
      role: "Fullstack Architect & Cloud Infrastructure Engineer",
      location: "Bandung / Jakarta, Indonesia",
      email: "iqbal.ramdhani@portfolio.dev",
      github: "https://github.com/iqbalramdhani",
      linkedin: "https://linkedin.com/in/muhammadiqbalramdhani",
      avatar: "assets/img/iqbal.jpg",
      status: "Available for Senior Fullstack & Cloud Roles",
      bio: "Software Engineer berfokus pada arsitektur sistem skala besar, distributed microservices, dan performa tinggi. Berpengalaman merancang backend tangguh dengan Go, Python, dan TypeScript, didukung infrastruktur cloud modern berbasis Docker dan Kubernetes. Selalu mengutamakan clean architecture, efisiensi resource, dan keandalan sistem.",
      radarSkills: {
        labels: ["Backend & API", "System Architecture", "Cloud & DevOps", "Frontend Dev", "Database & Caching", "Security & Reliability"],
        values: [96, 92, 90, 84, 94, 88]
      },
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "Production APIs", value: 40, suffix: "+" },
        { label: "Uptime Maintained", value: 99.98, suffix: "%" },
        { label: "Code Repositories", value: 55, suffix: "+" }
      ],
      techStack: [
        { name: "Go (Golang)", category: "language", level: 92, exp: "3 Tahun", icon: "golang" },
        { name: "TypeScript / JavaScript", category: "language", level: 95, exp: "4 Tahun", icon: "typescript" },
        { name: "Python", category: "language", level: 88, exp: "3 Tahun", icon: "python" },
        { name: "SQL (PostgreSQL / MySQL)", category: "language", level: 94, exp: "4 Tahun", icon: "database" },
        { name: "Node.js / Express / NestJS", category: "framework", level: 94, exp: "4 Tahun", icon: "nodejs" },
        { name: "FastAPI / Gin", category: "framework", level: 90, exp: "3 Tahun", icon: "api" },
        { name: "React & Next.js", category: "framework", level: 86, exp: "3 Tahun", icon: "react" },
        { name: "Docker & Kubernetes", category: "cloud", level: 88, exp: "2.5 Tahun", icon: "docker" },
        { name: "Redis & RabbitMQ", category: "cloud", level: 90, exp: "3 Tahun", icon: "server" },
        { name: "AWS & Firebase Hosting", category: "cloud", level: 86, exp: "3 Tahun", icon: "cloud" },
        { name: "Git & CI/CD Pipelines", category: "tools", level: 95, exp: "4 Tahun", icon: "git" },
        { name: "Linux / Bash Shell", category: "tools", level: 90, exp: "4 Tahun", icon: "terminal" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Senior Cloud & Fullstack Engineer",
          company: "Vertex Distributed Labs",
          type: "Full-Time",
          description: "Memimpin perancangan core backend architecture untuk sistem analitik transaksi tinggi. Menurunkan latensi API sebesar 38% melalui optimasi query database dan distributed Redis caching."
        },
        {
          period: "2023 - 2024",
          role: "Backend Infrastructure Developer",
          company: "Nusantara Cloud Solutions",
          type: "Contract",
          description: "Membangun microservices gateway berbasis Go dan mengelola kontainerisasi 25+ layanan menggunakan Docker dan Kubernetes di lingkungan multi-cloud."
        },
        {
          period: "2022 - 2023",
          role: "Fullstack Web Engineer",
          company: "Digital Synergy Indonesia",
          type: "Full-Time",
          description: "Mengembangkan portal enterprise internal menggunakan Next.js dan PostgreSQL dengan implementasi Role-Based Access Control (RBAC) ketat."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
          institution: "Universitas Terkemuka Indonesia",
          description: "IPK 3.88/4.00. Fokus riset Skripsi pada Distributed Consensus & High Performance Microservices. Asisten Laboratorium Jaringan & Sistem Terdistribusi."
        }
      ],
      certifications: [
        { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", year: "2024", id: "AWS-SAA-88219" },
        { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", year: "2024", id: "CKA-2409-911" },
        { name: "PostgreSQL Database Performance Tuning", issuer: "EnterpriseDB", year: "2023", id: "EDB-PT-442" }
      ],
      individualProjects: [
        {
          id: "iqbal-proj-1",
          title: "AetherCloud Orchestrator",
          tagline: "Distributed microservice visualizer & traffic management panel",
          category: "Cloud & Systems",
          imageBadge: "Go • Docker • gRPC",
          description: "Platform visualisasi topologi microservices real-time yang memantau throughput, error rate, dan resource consumption setiap node kontainer secara otomatis.",
          metrics: { value: "<15ms", label: "Latency Metrics" },
          githubUrl: "https://github.com/iqbalramdhani/aethercloud-orchestrator",
          demoUrl: "https://aethercloud.demo.dev",
          tags: ["Golang", "Docker", "gRPC", "Prometheus", "React"]
        },
        {
          id: "iqbal-proj-2",
          title: "SentiStream High-Load Pipeline",
          tagline: "Real-time stream processing engine handling 10k event/sec",
          category: "Data Streaming",
          imageBadge: "Python • Redis • Kafka",
          description: "Sistem ingestion data event-driven dengan Apache Kafka dan Redis stream untuk analitik telemetri data internet of things dengan zero message loss.",
          metrics: { value: "12,000", label: "Events / Sec" },
          githubUrl: "https://github.com/iqbalramdhani/sentistream-pipeline",
          demoUrl: "https://sentistream.demo.dev",
          tags: ["Python", "FastAPI", "Apache Kafka", "Redis", "PostgreSQL"]
        },
        {
          id: "iqbal-proj-3",
          title: "DevForge Autonomous CLI",
          tagline: "Developer productivity tool for instant scaffolding and staging",
          category: "DevTools",
          imageBadge: "TypeScript • Node.js",
          description: "CLI tool modern yang mengotomatisasi boilerplate microservices, validasi skema OpenAPI, dan konfigurasi Dockerfile dalam satu perintah terpadu.",
          metrics: { value: "4.8k+", label: "NPM Downloads" },
          githubUrl: "https://github.com/iqbalramdhani/devforge-cli",
          demoUrl: "https://devforge.demo.dev",
          tags: ["TypeScript", "Node.js", "Docker", "CLI"]
        }
      ]
    },

    nida: {
      id: "nida",
      name: "Nida Fuadia",
      nickname: "Nida",
      role: "UI/UX Strategist & Creative Frontend Engineer",
      location: "Bandung, Indonesia",
      email: "nida.fuadia@portfolio.dev",
      github: "https://github.com/nidafuadia",
      linkedin: "https://linkedin.com/in/nidafuadia",
      avatar: "assets/img/nida.jpg",
      status: "Open for Product Design & Frontend Lead",
      bio: "Desainer produk digital dan frontend engineer yang memadukan psikologi pengguna dengan estetika visual kelas dunia. Spesialis dalam arsitektur design system, micro-interactions halus, dan accessibility. Percaya bahwa software yang baik tidak hanya berfungsi dengan benar, tetapi juga menghadirkan kesenangan estetik dan kenyamanan maksimal bagi penggunanya.",
      radarSkills: {
        labels: ["UI/UX Design", "Design Systems", "Frontend Dev", "User Research", "Micro-Interactions", "Accessibility (a11y)"],
        values: [98, 95, 90, 92, 94, 91]
      },
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "UI Components Built", value: 320, suffix: "+" },
        { label: "Usability Score", value: 96.8, suffix: "%" },
        { label: "Design Systems Led", value: 8, suffix: " Systems" }
      ],
      techStack: [
        { name: "Figma & FigJam Master", category: "tools", level: 98, exp: "4 Tahun", icon: "figma" },
        { name: "Design Tokens & System", category: "tools", level: 96, exp: "3.5 Tahun", icon: "layout" },
        { name: "HTML5 & Semantic Web", category: "language", level: 98, exp: "4 Tahun", icon: "html" },
        { name: "CSS3 / Sass / CSS Modules", category: "language", level: 96, exp: "4 Tahun", icon: "css" },
        { name: "JavaScript (ES6+) / TypeScript", category: "language", level: 88, exp: "3 Tahun", icon: "javascript" },
        { name: "React.js & Next.js", category: "framework", level: 90, exp: "3 Tahun", icon: "react" },
        { name: "Tailwind CSS & Vanilla Design", category: "framework", level: 96, exp: "3.5 Tahun", icon: "palette" },
        { name: "Framer Motion & GSAP", category: "framework", level: 92, exp: "2.5 Tahun", icon: "zap" },
        { name: "User Testing & Heuristic Eval", category: "tools", level: 92, exp: "3 Tahun", icon: "users" },
        { name: "WCAG 2.1 Accessibility", category: "tools", level: 94, exp: "3 Tahun", icon: "check-circle" },
        { name: "Adobe Creative Suite", category: "tools", level: 85, exp: "4 Tahun", icon: "image" },
        { name: "Git & Version Control", category: "tools", level: 86, exp: "3 Tahun", icon: "git" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Lead Product Designer & Design Engineer",
          company: "Aura Studio & Labs",
          type: "Full-Time",
          description: "Mengarahkan design roadmap untuk produk SaaS enterprise. Mengembangkan design system berskala besar yang digunakan oleh 14 tim produk, mempercepat sprint frontend hingga 35%."
        },
        {
          period: "2023 - 2024",
          role: "Senior UI/UX & Frontend Specialist",
          company: "Kreatif Digital Nusantara",
          type: "Full-Time",
          description: "Memimpin perancangan ulang (redesign) aplikasi fintech ternama. Meningkatkan skor kepuasan CSAT pengguna dari 3.8 menjadi 4.7 dari skala 5."
        },
        {
          period: "2022 - 2023",
          role: "UI Designer & Web Interactive",
          company: "Pixel Craft Studio",
          type: "Contract",
          description: "Merancang visual branding dan interaksi animasi interaktif berbasis web untuk 20+ brand startup dan klien internasional."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Desain Komunikasi Visual / Sistem Informasi",
          institution: "Institut Seni & Teknologi Kreatif",
          description: "IPK 3.92/4.00 (Cum Laude). Riset Tugas Akhir tentang 'Emotional Design & Micro-Interactions in High-Stakes Fintech Applications'."
        }
      ],
      certifications: [
        { name: "Google UX Design Professional Certificate", issuer: "Google Career Certificates", year: "2024", id: "G-UX-99214" },
        { name: "Interaction Design Specialist (IxDF)", issuer: "Interaction Design Foundation", year: "2023", id: "IXDF-4819" },
        { name: "Enterprise Design Thinking Co-Creator", issuer: "IBM", year: "2023", id: "IBM-DT-772" }
      ],
      individualProjects: [
        {
          id: "nida-proj-1",
          title: "Lumina Design System",
          tagline: "Enterprise-grade accessible tokenized UI library",
          category: "Design System",
          imageBadge: "Figma • React • Tokens",
          description: "Sistem komponen UI komprehensif dengan dukungan otomatis mode terang/gelap, keyboard accessibility WCAG AAA, dan dokumentasi interaktif.",
          metrics: { value: "120+", label: "Figma Components" },
          githubUrl: "https://github.com/nidafuadia/lumina-design-system",
          demoUrl: "https://lumina-ui.demo.dev",
          tags: ["Design System", "Figma", "React", "WCAG 2.1", "Tokens"]
        },
        {
          id: "nida-proj-2",
          title: "FinVibe Wealth Management",
          tagline: "Next-gen investment and wealth dashboard for Gen-Z",
          category: "Fintech App",
          imageBadge: "UI/UX • Framer • Micro-Motion",
          description: "Antarmuka aplikasi finansial dengan visualisasi portofolio interaktif, gestur swipe intuitif, dan feedback micro-animation yang memikat.",
          metrics: { value: "4.9/5", label: "UX Delight Score" },
          githubUrl: "https://github.com/nidafuadia/finvibe-mobile-design",
          demoUrl: "https://finvibe.demo.dev",
          tags: ["Figma", "UI/UX", "Prototyping", "Fintech", "CSS Motion"]
        },
        {
          id: "nida-proj-3",
          title: "HealthZen Telemedicine Portal",
          tagline: "Empathetic, calm patient health monitoring dashboard",
          category: "Healthcare UI",
          imageBadge: "Vue.js • CSS • a11y",
          description: "Portal konsultasi medis dengan tone visual menenangkan, kontras optik terkalibrasi untuk lansia, dan alur booking dokter tanpa friksi.",
          metrics: { value: "-40%", label: "User Task Time" },
          githubUrl: "https://github.com/nidafuadia/healthzen-portal",
          demoUrl: "https://healthzen.demo.dev",
          tags: ["Healthcare", "Accessibility", "Design", "CSS Grid", "Vue"]
        }
      ]
    },

    viola: {
      id: "viola",
      name: "Viola Amelia",
      nickname: "Viola",
      role: "Machine Learning Engineer & Mobile Intelligence Specialist",
      location: "Bandung / Jakarta, Indonesia",
      email: "viola.amelia@portfolio.dev",
      github: "https://github.com/violaamelia",
      linkedin: "https://linkedin.com/in/violaamelia",
      avatar: "assets/img/viola.jpg",
      status: "Exploring AI Research & Applied ML Roles",
      bio: "Engineer di persimpangan Machine Learning, Computer Vision, dan Aplikasi Mobile. Mengkhususkan diri dalam melatih model AI yang efisien (quantized on-device models), pipeline data skala besar, dan integrasi kecerdasan buatan ke dalam aplikasi mobile yang responsif. Berorientasi pada model accuracy, computational efficiency, dan implementasi etis AI.",
      radarSkills: {
        labels: ["Machine Learning", "Deep Learning / CV", "Mobile (Flutter/Dart)", "Python & MLOps", "Data Engineering", "Math & Statistics"],
        values: [96, 94, 91, 95, 88, 93]
      },
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "ML Models Trained", value: 50, suffix: "+" },
        { label: "Average Accuracy", value: 97.4, suffix: "%" },
        { label: "Mobile Apps Shipped", value: 12, suffix: " Apps" }
      ],
      techStack: [
        { name: "Python (NumPy, Pandas)", category: "language", level: 98, exp: "4 Tahun", icon: "python" },
        { name: "Dart (Flutter)", category: "language", level: 92, exp: "3 Tahun", icon: "flutter" },
        { name: "C++ (Edge Inference)", category: "language", level: 82, exp: "2 Tahun", icon: "code" },
        { name: "SQL & Data Extraction", category: "language", level: 88, exp: "3 Tahun", icon: "database" },
        { name: "PyTorch & TorchVision", category: "framework", level: 94, exp: "3.5 Tahun", icon: "cpu" },
        { name: "TensorFlow & TFLite", category: "framework", level: 91, exp: "3 Tahun", icon: "cpu" },
        { name: "Scikit-Learn & XGBoost", category: "framework", level: 95, exp: "4 Tahun", icon: "activity" },
        { name: "OpenCV & Computer Vision", category: "framework", level: 92, exp: "3 Tahun", icon: "eye" },
        { name: "Flutter Cross-Platform", category: "framework", level: 93, exp: "3 Tahun", icon: "smartphone" },
        { name: "Hugging Face & Transformers", category: "cloud", level: 90, exp: "2.5 Tahun", icon: "box" },
        { name: "MLflow & Weights & Biases", category: "tools", level: 86, exp: "2.5 Tahun", icon: "bar-chart-2" },
        { name: "Docker for ML Pipelines", category: "tools", level: 85, exp: "2.5 Tahun", icon: "docker" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Senior Machine Learning Engineer",
          company: "Cognitive Vision AI Labs",
          type: "Full-Time",
          description: "Mengembangkan pipeline computer vision edge untuk deteksi cacat manufaktur dengan akurasi 98.7% dan inferensi real-time di bawah 30ms per frame."
        },
        {
          period: "2023 - 2024",
          role: "Applied AI & Mobile Developer",
          company: "Inovasi Kecerdasan Buatan",
          type: "Full-Time",
          description: "Mengintegrasikan model TensorFlow Lite ke dalam aplikasi mobile Flutter, mengoptimalkan ukuran binary model sebesar 60% dengan INT8 quantization."
        },
        {
          period: "2022 - 2023",
          role: "Junior Data Scientist & ML Researcher",
          company: "Data Nusantara Analytics",
          type: "Contract",
          description: "Menganalisis dataset medis 100k+ sampel, membangun prediktor risiko penyakit kronis menggunakan ensemble machine learning."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Sains (S.Si) - Ilmu Komputasi & Kecerdasan Buatan",
          institution: "Fakultas Sains & Teknologi Terapan",
          description: "IPK 3.90/4.00. Penulis publikasi ilmiah terindeks Scopus mengenai 'Quantized Lightweight Vision Transformer for Mobile Diagnostic Assistance'."
        }
      ],
      certifications: [
        { name: "TensorFlow Developer Certificate", issuer: "Google Developers", year: "2024", id: "TF-DEV-88910" },
        { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2023", id: "DLAI-DL-3341" },
        { name: "Flutter Mobile Developer Certified Specialist", issuer: "AppBrewery & Google", year: "2023", id: "FLTR-CERT-720" }
      ],
      individualProjects: [
        {
          id: "viola-proj-1",
          title: "VisionGuard Edge Anomaly Detector",
          tagline: "Ultra-fast on-device computer vision defect inspector",
          category: "Computer Vision",
          imageBadge: "PyTorch • OpenCV • YOLO",
          description: "Sistem computer vision real-time untuk mendeteksi anomali mikroskopis pada perakitan sirkuit elektronik dengan performa 60 FPS pada hardware low-power.",
          metrics: { value: "98.9%", label: "Precision Rate" },
          githubUrl: "https://github.com/violaamelia/visionguard-edge-cv",
          demoUrl: "https://visionguard.demo.dev",
          tags: ["Computer Vision", "PyTorch", "YOLOv8", "OpenCV", "Python"]
        },
        {
          id: "viola-proj-2",
          title: "NeuroPredict Clinical ML",
          tagline: "Predictive clinical analytics with explainable AI SHAP values",
          category: "Health AI",
          imageBadge: "TensorFlow • Scikit-Learn • SHAP",
          description: "Model estimasi progresi klinis pasien berbasis rekam medis historis, dilengkapi interpretasi kontribusi fitur (feature importance) untuk dokter spesialis.",
          metrics: { value: "0.94", label: "AUROC Score" },
          githubUrl: "https://github.com/violaamelia/neuropredict-clinical-ml",
          demoUrl: "https://neuropredict.demo.dev",
          tags: ["Healthcare AI", "Python", "Explainable AI", "Pandas", "Streamlit"]
        },
        {
          id: "viola-proj-3",
          title: "PulseFit AI Mobile Companion",
          tagline: "On-device motion analysis and posture coaching app",
          category: "Mobile AI",
          imageBadge: "Flutter • TFLite • PoseNet",
          description: "Aplikasi mobile Flutter cerdas yang memanfaatkan kamera smartphone untuk menghitung repetisi olahraga dan membetulkan postur tubuh secara instan tanpa internet.",
          metrics: { value: "15ms", label: "Inference Time" },
          githubUrl: "https://github.com/violaamelia/pulsefit-ai-mobile",
          demoUrl: "https://pulsefit.demo.dev",
          tags: ["Flutter", "Dart", "TensorFlow Lite", "Mobile", "Edge AI"]
        }
      ]
    }
  }
};
