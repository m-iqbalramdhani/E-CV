/**
 * Portfolio & E-CV Multi-Profile Data Store
 * Members: Muhammad Iqbal Ramdhani, Nida Fuadia, Viola Amelia
 * 1 Joint Project: SIA-BINATAMA (Sistem Informasi & Presensi Guru SMK Binatama)
 */

const PORTFOLIO_DATA = {
  jointProject: {
    id: "sia-binatama",
    title: "SIA-BINATAMA",
    subtitle: "Sistem Informasi Akademik & Presensi Guru SMK Binatama Berbasis Geofencing & Biometrik",
    category: "Web & Mobile • Geofencing GPS • Presensi Guru",
    badge: "Project Bersama Ber-3 • SMK Binatama",
    date: "2024 - 2025",
    summary: "Sistem presensi guru dan manajemen akademik terpadu yang dirancang dan dibangun bersama oleh Iqbal, Nida, dan Viola untuk SMK Binatama. Mengintegrasikan validasi lokasi geofencing radius area sekolah, verifikasi swafoto anti-titip absen, rekapitulasi kehadiran otomatis untuk bagian Tata Usaha (TU) & Kepala Sekolah, serta portal jadwal mengajar harian guru.",
    liveUrl: "https://sia-binatama.sch.id",
    githubUrl: "https://github.com/m-iqbalramdhani/sia-binatama",
    stats: [
      { label: "Dewan Guru & Staf", value: "65+" },
      { label: "Radius Geofence", value: "35m" },
      { label: "Kecepatan Presensi", value: "< 1.2s" },
      { label: "Akurasi Lokasi", value: "99.8%" }
    ],
    techStack: [
      { name: "Go / Node.js", category: "Backend" },
      { name: "Flutter / Dart", category: "Mobile" },
      { name: "React / Tailwind", category: "Frontend" },
      { name: "PostgreSQL & MySQL", category: "Database" },
      { name: "Figma UI/UX", category: "Design" },
      { name: "GPS Geofencing", category: "Location" },
      { name: "Face Biometrics", category: "AI / Vision" },
      { name: "WhatsApp Gateway", category: "Notif" }
    ],
    contributions: {
      iqbal: {
        role: "Lead Backend & Database Architect",
        tagline: "RESTful API, GPS Geofencing Haversine Formula, JWT & Role Management",
        tasks: [
          "Merancang arsitektur database relasional PostgreSQL & MySQL untuk mencatat log presensi guru, riwayat perizinan, dan jadwal mengajar SMK Binatama.",
          "Mengembangkan modul kalkulasi geofencing dengan rumus Haversine untuk memvalidasi koordinat GPS guru terhadap titik pusat sekolah secara presisi.",
          "Membangun RESTful API dengan otentikasi JWT dan Role-Based Access Control (Kepala Sekolah, Waka Kurikulum, Guru Piket, Guru Mapel).",
          "Mengimplementasikan modul ekspor laporan presensi otomatis berformat Excel dan PDF untuk pelaporan dinas dan administrasi TU."
        ],
        codeHighlight: `// Validasi Geofencing SMK Binatama (Muhammad Iqbal)
function checkGeofenceRadius(teacherLat, teacherLng) {
  const SCHOOL_LAT = -7.77124;  // Koordinat SMK Binatama
  const SCHOOL_LNG = 110.36712;
  const MAX_RADIUS_METERS = 50.0;

  const R = 6371e3; // Radius bumi dalam meter
  const dLat = (teacherLat - SCHOOL_LAT) * (Math.PI / 180);
  const dLng = (teacherLng - SCHOOL_LNG) * (Math.PI / 180);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(SCHOOL_LAT * Math.PI/180) * Math.cos(teacherLat * Math.PI/180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return {
    isInside: distance <= MAX_RADIUS_METERS,
    distanceMeter: Math.round(distance)
  };
}`
      },
      nida: {
        role: "Lead UI/UX & Frontend Designer",
        tagline: "Desain Antarmuka Portal Guru, Dashboard Kehadiran Real-time & a11y",
        tasks: [
          "Merancang design system portal presensi di Figma yang ramah pengguna (user-friendly) untuk guru berbagai rentang usia.",
          "Mengembangkan dashboard web real-time yang memvisualisasikan persentase kehadiran harian, guru hadir tepat waktu, izin, dan dinas luar.",
          "Merancang formulir digital pengajuan izin/sakit guru dengan upload bukti surat dokter dan integrasi status approval.",
          "Memastikan tampilan web responsive sempurna pada perangkat smartphone guru maupun desktop administrasi TU."
        ],
        codeHighlight: `/* Design Token & Responsive Layout Presensi (Nida Fuadia) */
.attendance-dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.status-badge-ontime {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid #10b981;
  color: #10b981;
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.35rem 0.85rem;
}`
      },
      viola: {
        role: "Mobile Application & Verification Specialist",
        tagline: "Aplikasi Android/Flutter, Deteksi Swafoto (Anti-Spoofing) & Offline Sync",
        tasks: [
          "Mengembangkan aplikasi mobile presensi guru berbasis Flutter untuk sistem operasi Android di lingkungan sekolah SMK Binatama.",
          "Mengintegrasikan modul kamera swafoto dengan face detection on-device untuk memvalidasi keaslian presensi dan mencegah titip absen.",
          "Menerapkan offline caching lokal dengan SQLite/Hive agar log presensi guru tersimpan aman ketika jaringan internet sekolah mengalami lonjakan trafik.",
          "Menyematkan fitur push notification jadwal mengajar guru dan pengingat presensi pagi otomatis."
        ],
        codeHighlight: `// Verifikasi Presensi Mobile Flutter (Viola Amelia)
Future<AttendanceResult> submitTeacherAttendance({
  required Position location,
  required File selfieImage,
}) async {
  final hasFace = await FaceDetectorService.detectFace(selfieImage);
  if (!hasFace) return AttendanceResult.fail("Wajah guru tidak terdeteksi!");

  final isWithinSchool = GeofenceService.isWithinSchoolRadius(location);
  if (!isWithinSchool) return AttendanceResult.fail("Lokasi di luar radius SMK Binatama!");

  return await ApiService.sendAttendanceLog(location, selfieImage);
}`
      }
    },
    keyFeatures: [
      {
        title: "Validasi GPS Geofencing",
        description: "Mencegah kecurangan presensi dengan membatasi titik absensi hanya dalam radius 35-50 meter dari gerbang SMK Binatama.",
        icon: "map-pin"
      },
      {
        title: "Verifikasi Swafoto Biometrik",
        description: "Guru mengambil foto selfie saat jam kedatangan dan kepulangan sebagai bukti otentik kehadiran mengajar.",
        icon: "camera"
      },
      {
        title: "Rekap Otomatis TU & Kepsek",
        description: "Kepala Sekolah dan bagian Tata Usaha dapat mengunduh rekapitulasi kehadiran bulanan dalam format Excel/PDF dengan 1 kali klik.",
        icon: "file-text"
      },
      {
        title: "Jurnal Mengajar Terintegrasi",
        description: "Dilengkapi modul pengisian materi dan jurnal tatap muka harian sesuai silabus kurikulum di SMK Binatama.",
        icon: "book-open"
      }
    ]
  },

  members: {
    iqbal: {
      id: "iqbal",
      name: "Muhammad Iqbal Ramdhani",
      nickname: "Iqbal",
      role: "Fullstack Architect & Cloud Infrastructure Engineer",
      location: "Bandung / Jakarta, Indonesia",
      email: "iqbal.ramdhani@portfolio.dev",
      github: "https://github.com/m-iqbalramdhani",
      linkedin: "https://linkedin.com/in/muhammadiqbalramdhani",
      avatar: "assets/img/iqbal.jpg",
      status: "Available for Senior Fullstack & Cloud Roles",
      bio: "Software Engineer berfokus pada arsitektur sistem skala besar, distributed microservices, dan performa tinggi. Berpengalaman merancang backend tangguh dengan Go, Python, Node.js, dan PHP, didukung infrastruktur cloud modern berbasis Docker dan Kubernetes. Berperan sebagai Lead Backend & Database Architect pada project presensi guru SIA-BINATAMA.",
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "Production APIs", value: 40, suffix: "+" },
        { label: "Uptime Maintained", value: 99.98, suffix: "%" },
        { label: "Code Repositories", value: 55, suffix: "+" }
      ],
      techStack: [
        { name: "Go (Golang)", category: "language", icon: "golang", exp: "3+ Tahun", desc: "Backend Core & High Throughput Microservices" },
        { name: "Python", category: "language", icon: "python", exp: "3+ Tahun", desc: "API Services & Data Processing" },
        { name: "TypeScript", category: "language", icon: "typescript", exp: "4+ Tahun", desc: "Type-safe Fullstack Development" },
        { name: "JavaScript (ES6+)", category: "language", icon: "javascript", exp: "4+ Tahun", desc: "Modern Web Ecosystem" },
        { name: "PHP & Laravel", category: "framework", icon: "laravel", exp: "3+ Tahun", desc: "Sistem Informasi Akademik & REST API" },
        { name: "PostgreSQL", category: "cloud", icon: "postgres", exp: "4+ Tahun", desc: "Relational DB & Geolocation Indexing" },
        { name: "MySQL", category: "cloud", icon: "mysql", exp: "4+ Tahun", desc: "Academic Database & Presensi Tables" },
        { name: "Node.js / Express", category: "framework", icon: "nodejs", exp: "4+ Tahun", desc: "Event-driven Backend Microservices" },
        { name: "FastAPI", category: "framework", icon: "fastapi", exp: "3+ Tahun", desc: "High-performance Async Endpoints" },
        { name: "React.js", category: "framework", icon: "react", exp: "3+ Tahun", desc: "Admin Management Dashboard" },
        { name: "Docker", category: "cloud", icon: "docker", exp: "3+ Tahun", desc: "Containerization & Multi-service Setup" },
        { name: "Redis", category: "cloud", icon: "redis", exp: "3+ Tahun", desc: "In-Memory Session Caching & Queue" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "4+ Tahun", desc: "Version Control & Collaborative CI/CD" },
        { name: "Linux Server", category: "tools", icon: "linux", exp: "4+ Tahun", desc: "Production Deployment & Server Hardening" }
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
          period: "2024 - 2025",
          role: "Lead Backend Developer",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Project Lead",
          description: "Merancang core API presensi guru geofencing, database PostgreSQL/MySQL, integrasi autentikasi JWT, dan modul ekspor laporan kehadiran untuk staf TU & Kepala Sekolah."
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
          githubUrl: "https://github.com/m-iqbalramdhani/aethercloud-orchestrator",
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
          githubUrl: "https://github.com/m-iqbalramdhani/sentistream-pipeline",
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
          githubUrl: "https://github.com/m-iqbalramdhani/devforge-cli",
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
      bio: "Desainer produk digital dan frontend engineer yang memadukan psikologi pengguna dengan estetika visual kelas dunia. Spesialis dalam arsitektur design system, micro-interactions halus, dan accessibility. Berperan sebagai Lead UI/UX & Frontend Designer pada project SIA-BINATAMA yang menyajikan antarmuka presensi guru yang intuitif dan mudah dipahami.",
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "UI Components Built", value: 320, suffix: "+" },
        { label: "Usability Score", value: 96.8, suffix: "%" },
        { label: "Design Systems Led", value: 8, suffix: " Systems" }
      ],
      techStack: [
        { name: "Figma Master", category: "tools", icon: "figma", exp: "4+ Tahun", desc: "UI/UX Design, Design Systems & Prototyping" },
        { name: "Tailwind CSS", category: "framework", icon: "tailwind", exp: "3.5+ Tahun", desc: "Responsive Design & Rapid Styling" },
        { name: "HTML5 Semantic", category: "language", icon: "html", exp: "4+ Tahun", desc: "Accessible Web Structures & SEO" },
        { name: "CSS3 / Sass", category: "language", icon: "css", exp: "4+ Tahun", desc: "Glassmorphism, Animations & CSS Grid" },
        { name: "React.js", category: "framework", icon: "react", exp: "3+ Tahun", desc: "Interactive Frontend Dashboards" },
        { name: "JavaScript (ES6+)", category: "language", icon: "javascript", exp: "3+ Tahun", desc: "DOM Manipulation & Client Logic" },
        { name: "Vue.js", category: "framework", icon: "vue", exp: "2.5+ Tahun", desc: "Reactive Administrative Dashboards" },
        { name: "TypeScript", category: "language", icon: "typescript", exp: "3+ Tahun", desc: "Structured Component Props" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "3+ Tahun", desc: "Frontend Version Control & Collaboration" }
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
          period: "2024 - 2025",
          role: "Lead UI/UX Designer",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Design Lead",
          description: "Merancang antarmuka portal guru dan dashboard kehadiran Kepala Sekolah di Figma, menguji kegunaan (usability testing) pada guru SMK Binatama, dan membangun frontend web responsif."
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
          description: "IPK 3.92/4.00 (Cum Laude). Riset Tugas Akhir tentang 'Emotional Design & Micro-Interactions in Educational and Academic Applications'."
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
      bio: "Engineer di persimpangan Machine Learning, Computer Vision, dan Aplikasi Mobile. Mengkhususkan diri dalam aplikasi mobile Flutter, model AI on-device efisien, dan computer vision. Berperan sebagai Mobile Application & Verification Specialist pada project SIA-BINATAMA dengan mengembangkan aplikasi Android presensi guru dan integrasi verifikasi swafoto.",
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "ML Models Trained", value: 50, suffix: "+" },
        { label: "Average Accuracy", value: 97.4, suffix: "%" },
        { label: "Mobile Apps Shipped", value: 12, suffix: " Apps" }
      ],
      techStack: [
        { name: "Flutter Cross-Platform", category: "framework", icon: "flutter", exp: "3+ Tahun", desc: "Aplikasi Mobile Android & iOS Presensi" },
        { name: "Dart", category: "language", icon: "dart", exp: "3+ Tahun", desc: "Mobile Application Programming" },
        { name: "Python", category: "language", icon: "python", exp: "4+ Tahun", desc: "Computer Vision & ML Pipelines" },
        { name: "PyTorch", category: "framework", icon: "pytorch", exp: "3.5+ Tahun", desc: "Deep Learning & Image Processing" },
        { name: "TensorFlow & TFLite", category: "framework", icon: "tensorflow", exp: "3+ Tahun", desc: "On-Device Face Detection & Edge AI" },
        { name: "OpenCV", category: "framework", icon: "opencv", exp: "3+ Tahun", desc: "Computer Vision & Face Biometrics" },
        { name: "Docker", category: "cloud", icon: "docker", exp: "2.5+ Tahun", desc: "ML Services Containerization" },
        { name: "PostgreSQL", category: "cloud", icon: "postgres", exp: "3+ Tahun", desc: "Data Storage & Query Extraction" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "3.5+ Tahun", desc: "Collaborative Code Management" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Senior Machine Learning Engineer",
          company: "Cognitive Vision AI Labs",
          type: "Full-Time",
          description: "Mengembangkan pipeline computer vision edge untuk deteksi objek dan anomali dengan akurasi 98.7% dan inferensi real-time di bawah 30ms per frame."
        },
        {
          period: "2024 - 2025",
          role: "Mobile & Verification Specialist",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Mobile Lead",
          description: "Membangun aplikasi mobile presensi guru Android berbasis Flutter, mengintegrasikan kamera selfie dengan validasi wajah, serta mengelola offline caching."
        },
        {
          period: "2022 - 2023",
          role: "Junior Data Scientist & ML Researcher",
          company: "Data Nusantara Analytics",
          type: "Contract",
          description: "Menganalisis dataset 100k+ sampel, membangun model klasifikasi dan prediktor berbasis ensemble machine learning."
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
