/**
 * Portfolio & E-CV Multi-Profile Data Store
 * Members: Muhammad Iqbal Ramdhani, Nida Fuadia, Viola Amelia
 * Roles:
 * - Muhammad Iqbal Ramdhani: Fullstack Engineer & Database Architect
 * - Nida Fuadia: Data Analytics & UI/UX Specialist
 * - Viola Amelia: IT Project Manager & Agile Scrum Master
 * 1 Joint Project: SIA-BINATAMA (Sistem Informasi & Presensi Guru SMK Binatama)
 */

const PORTFOLIO_DATA = {
  jointProject: {
    id: "sia-binatama",
    title: "SIA-BINATAMA",
    subtitle: "Sistem Informasi Akademik & Presensi Guru SMK Binatama Berbasis Geofencing & Biometrik",
    category: "Fullstack • Database • QA Testing • Project Management",
    badge: "Project Bersama Ber-3 • SMK Binatama",
    date: "2024 - 2025",
    summary: "Sistem presensi guru dan manajemen akademik terpadu yang dirancang dan dibangun bersama oleh Iqbal (Fullstack & DB), Nida (QA & Tester), dan Viola (Project Manager) untuk SMK Binatama. Mengintegrasikan validasi lokasi geofencing radius area sekolah, verifikasi swafoto anti-titip absen, rekapitulasi kehadiran otomatis untuk bagian Tata Usaha (TU) & Kepala Sekolah, serta portal jadwal mengajar harian guru.",
    liveUrl: "https://sia-binatama.sch.id",
    githubUrl: "https://github.com/m-iqbalramdhani/sia-binatama",
    stats: [
      { label: "Dewan Guru & Staf", value: "65+" },
      { label: "Radius Geofence", value: "35m" },
      { label: "Kecepatan Presensi", value: "< 1.2s" },
      { label: "Akurasi Lokasi", value: "99.8%" }
    ],
    techStack: [
      { name: "Go & Node.js", category: "Backend" },
      { name: "PostgreSQL & MySQL", category: "Database" },
      { name: "React & TypeScript", category: "Fullstack Web" },
      { name: "Cypress & Postman", category: "QA & Testing" },
      { name: "Jira & Scrum", category: "Project Management" },
      { name: "GPS Geofencing", category: "Location" },
      { name: "Face Biometrics", category: "Verification" },
      { name: "Docker & Linux", category: "Infrastructure" }
    ],
    contributions: {
      iqbal: {
        role: "Lead Fullstack & Database Architect",
        tagline: "Database Schema, Haversine GPS Geofencing, RESTful API & Admin Management",
        tasks: [
          "Merancang skema database relasional PostgreSQL & MySQL teroptimasi untuk presensi, jadwal mengajar, dan log audit guru SMK Binatama.",
          "Mengembangkan modul kalkulasi geofencing dengan rumus Haversine dan spatial indexing untuk mendeteksi radius guru secara presisi.",
          "Membangun RESTful API dengan otentikasi JWT dan Role-Based Access Control (Kepala Sekolah, Waka Kurikulum, Guru Piket, Guru Mapel).",
          "Mengonfigurasi Redis caching untuk query jadwal dan session presensi guru guna mencegah database bottleneck di jam sibuk pagi hari."
        ],
        codeHighlight: `-- Skema Database Presensi Guru SMK Binatama (Muhammad Iqbal - Fullstack & DB)
CREATE TABLE attendance_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id VARCHAR(32) NOT NULL REFERENCES teachers(id),
  latitude DECIMAL(10, 7) NOT NULL,
  longitude DECIMAL(10, 7) NOT NULL,
  distance_meters NUMERIC(6, 2) NOT NULL,
  is_inside_geofence BOOLEAN NOT NULL DEFAULT true,
  selfie_hash VARCHAR(128) NOT NULL,
  check_in_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) CHECK (status IN ('TEPAT_WAKTU', 'TERLAMBAT', 'IZIN', 'DINAS_LUAR'))
);
CREATE INDEX idx_attendance_teacher_date ON attendance_logs (teacher_id, check_in_time DESC);
CREATE INDEX idx_attendance_status ON attendance_logs (status);`
      },
      nida: {
        role: "UI/UX & Data Analytics Specialist",
        tagline: "Attendance Dashboard, ERD Data Structure, Wireframe Prototyping & Usability Testing",
        tasks: [
          "Merancang prototype antarmuka presensi guru dan portal akademik SMK Binatama di Figma dengan alur interaksi intuitif dan responsif.",
          "Membangun dashboard visualisasi data kehadiran guru harian dan rekapitulasi bulanan yang memudahkan monitoring pihak TU & Kepala Sekolah.",
          "Merancang arsitektur basis data relasional (ERD) dan validasi struktur data presensi untuk menjamin konsistensi laporan.",
          "Melakukan pengujian usability (UAT) bersama dewan guru dan verifikasi formulir presensi guna memastikan kemudahan penggunaan sistem."
        ],
        codeHighlight: `/* Form Validasi & Logika Rekapitulasi Presensi (Nida Fuadia) */
const attendanceAnalytics = {
  validateWithinRadius: (lat, lng, schoolGeo) => {
    const dist = calculateHaversine(lat, lng, schoolGeo.lat, schoolGeo.lng);
    return { isValid: dist <= 35, distanceMeters: Math.round(dist) };
  },
  summarizeMonthlyAttendance: (records) => {
    return records.map(r => ({
      nip: r.teacherId,
      namaGuru: r.teacherName,
      kehadiranTepatWaktu: r.onTimeCount,
      persentase: ((r.onTimeCount / r.totalActiveDays) * 100).toFixed(1) + '%'
    }));
  }
};`
      },
      viola: {
        role: "Lead Project Manager & Agile Product Owner",
        tagline: "Sprint Backlog, PRD & User Stories, Stakeholder SMK Binatama & UAT Delivery",
        tasks: [
          "Menyusun Product Requirement Document (PRD) dan roadmap implementasi presensi guru SMK Binatama bersama Kepala Sekolah dan staf kurikulum.",
          "Memimpin sprint planning mingguan, daily standups, dan sprint review bersama tim engineer (Iqbal & Nida) dengan framework Scrum.",
          "Mengelola user acceptance testing (UAT) dengan 65+ dewan guru SMK Binatama untuk memastikan adopsi presensi geofence tanpa hambatan teknis.",
          "Memitigasi risiko kendala sinyal GPS dan konektivitas di area sekolah melalui perumusan requirement offline caching dan validasi biometrik."
        ],
        codeHighlight: `# SIA-BINATAMA Sprint 4: Core Teacher Attendance MVP (Viola Amelia - PM)
User Story:
  Sebagai Guru SMK Binatama, saya ingin melakukan presensi masuk & pulang
  langsung dari smartphone dalam radius area sekolah agar kehadiran tercatat valid.

Acceptance Criteria:
  [x] AC-1: Koordinat GPS guru diverifikasi dalam radius <= 35 meter dari gerbang sekolah.
  [x] AC-2: Kamera swafoto mendeteksi wajah guru secara real-time sebelum submit payload.
  [x] AC-3: Response time pencatatan presensi < 1.2 detik pada jam kedatangan (06:45 - 07:15).
  [x] AC-4: Status presensi (Tepat Waktu/Terlambat) otomatis terupdate di dashboard TU & Kepala Sekolah.`
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
      role: "Fullstack Engineer & Database Architect",
      location: "Bandung / Jakarta, Indonesia",
      email: "iqbal.ramdhani@portfolio.dev",
      github: "https://github.com/m-iqbalramdhani",
      linkedin: "https://linkedin.com/in/muhammadiqbalramdhani",
      avatar: "assets/img/iqbal.jpg",
      status: "Available for Senior Fullstack & Database Roles",
      bio: "Fullstack Engineer dan Database Architect berfokus pada arsitektur sistem skala besar, optimalisasi database relasional & NoSQL, indexing spasial, serta frontend modern. Berpengalaman merancang backend tangguh dengan Go, PHP/Laravel, Node.js, dan Python, didukung infrastruktur database PostgreSQL, MySQL, Redis, dan MongoDB. Berperan sebagai Lead Fullstack & Database Architect pada project presensi guru SIA-BINATAMA.",
      stats: [
        { label: "Tahun Pengalaman", value: 4, suffix: "+" },
        { label: "Production Databases", value: 25, suffix: "+" },
        { label: "Query Optimization", value: 65, suffix: "% faster" },
        { label: "Fullstack Repositories", value: 60, suffix: "+" }
      ],
      techStack: [
        { name: "Go (Golang)", category: "language", icon: "golang", exp: "3.5+ Tahun", desc: "Backend Core & High Throughput Microservices" },
        { name: "PostgreSQL", category: "database", icon: "postgres", exp: "4+ Tahun", desc: "Relational DB, Spatial Indexing & Haversine Geofence" },
        { name: "MySQL", category: "database", icon: "mysql", exp: "4+ Tahun", desc: "Academic Database & Presensi Tables" },
        { name: "Redis", category: "database", icon: "redis", exp: "3+ Tahun", desc: "In-Memory Session Caching & Attendance Queue" },
        { name: "MongoDB", category: "database", icon: "mongodb", exp: "3+ Tahun", desc: "Document Database & Audit Logs" },
        { name: "PHP & Laravel", category: "framework", icon: "laravel", exp: "3.5+ Tahun", desc: "Fullstack Web & REST API Services" },
        { name: "TypeScript", category: "language", icon: "typescript", exp: "4+ Tahun", desc: "Type-safe Fullstack Development" },
        { name: "JavaScript (ES6+)", category: "language", icon: "javascript", exp: "4+ Tahun", desc: "Modern Web Ecosystem & Frontend Logic" },
        { name: "React.js", category: "framework", icon: "react", exp: "3.5+ Tahun", desc: "Admin Management & Teacher Portal" },
        { name: "Node.js", category: "framework", icon: "nodejs", exp: "4+ Tahun", desc: "Event-driven Microservices & Realtime APIs" },
        { name: "Vue.js", category: "framework", icon: "vue", exp: "3+ Tahun", desc: "Administrative Dashboard Panels" },
        { name: "Docker", category: "cloud", icon: "docker", exp: "3+ Tahun", desc: "Containerization & DB Clustering" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "4+ Tahun", desc: "Version Control & Collaborative CI/CD" },
        { name: "Linux Server", category: "tools", icon: "linux", exp: "4+ Tahun", desc: "Database Tuning & Server Hardening" },
        { name: "Tailwind CSS", category: "framework", icon: "tailwind", exp: "3.5+ Tahun", desc: "Utility-first Responsive Styling" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Lead Fullstack & Database Architect",
          company: "Vertex Distributed Labs",
          type: "Full-Time",
          description: "Memimpin perancangan core backend architecture dan arsitektur database multi-cluster. Menurunkan latensi query database sebesar 65% melalui indexing spasial teroptimasi dan distributed Redis caching."
        },
        {
          period: "2024 - 2025",
          role: "Lead Fullstack & Database Architect",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Project Lead",
          description: "Merancang skema database presensi guru, kalkulasi geofencing Haversine presisi tinggi, integrasi otentikasi JWT, dan modul ekspor laporan kehadiran untuk staf TU & Kepala Sekolah."
        },
        {
          period: "2022 - 2023",
          role: "Fullstack Web Engineer",
          company: "Digital Synergy Indonesia",
          type: "Full-Time",
          description: "Mengembangkan portal enterprise internal menggunakan React, Laravel, dan PostgreSQL dengan implementasi Role-Based Access Control (RBAC) ketat."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
          institution: "Universitas Terkemuka Indonesia",
          description: "IPK 3.88/4.00. Fokus riset Skripsi pada Distributed Database Consensus & High Performance Geolocation Querying."
        }
      ],
      certifications: [
        { name: "PostgreSQL Database Performance Tuning Specialist", issuer: "EnterpriseDB", year: "2024", id: "EDB-PT-442" },
        { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", year: "2024", id: "AWS-SAA-88219" },
        { name: "Oracle Certified Associate, MySQL Database Administrator", issuer: "Oracle", year: "2023", id: "OCA-MYSQL-712" }
      ],
      individualProjects: [
        {
          id: "iqbal-proj-1",
          title: "OmniDB Cluster & Query Optimizer",
          tagline: "Real-time database query analyzer & spatial index visualizer",
          category: "Database & Systems",
          imageBadge: "PostgreSQL • Redis • Go",
          description: "Platform visualisasi performa query database real-time yang menganalisis execution plan (EXPLAIN ANALYZE), mendeteksi deadlocks, dan menyarankan missing composite index otomatis.",
          metrics: { value: "<8ms", label: "Query Execution" },
          githubUrl: "https://github.com/m-iqbalramdhani/omnidb-cluster-manager",
          demoUrl: "https://omnidb.demo.dev",
          tags: ["PostgreSQL", "Go", "Redis", "Docker", "React"]
        },
        {
          id: "iqbal-proj-2",
          title: "GeoFleet Realtime Tracking Engine",
          tagline: "High-throughput spatial geospatial tracking engine",
          category: "Fullstack & Geofencing",
          imageBadge: "Go • PostGIS • WebSocket",
          description: "Sistem pelacakan armada real-time berbasis PostGIS dan Redis geospatial yang memproses 8,000 koordinat GPS per detik dengan validasi geofence poligon multi-titik.",
          metrics: { value: "8,000", label: "Coords / Sec" },
          githubUrl: "https://github.com/m-iqbalramdhani/geofleet-tracking",
          demoUrl: "https://geofleet.demo.dev",
          tags: ["Go", "PostGIS", "Redis", "TypeScript", "WebSocket"]
        },
        {
          id: "iqbal-proj-3",
          title: "DataForge High-Volume ETL Engine",
          tagline: "Automated distributed data pipeline for heterogeneous databases",
          category: "Database Pipelines",
          imageBadge: "Node.js • MySQL • MongoDB",
          description: "Pipeline sinkronisasi data antar database relasional (MySQL/PostgreSQL) ke NoSQL (MongoDB) dengan zero-downtime streaming dan transform logic otomatis.",
          metrics: { value: "50k+", label: "Rows / Min" },
          githubUrl: "https://github.com/m-iqbalramdhani/dataforge-etl",
          demoUrl: "https://dataforge.demo.dev",
          tags: ["MySQL", "MongoDB", "Node.js", "Docker", "TypeScript"]
        }
      ]
    },

    nida: {
      id: "nida",
      name: "Nida Fuadia",
      nickname: "Nida",
      role: "Information Systems Student | Data Analytics & UI/UX",
      location: "Bekasi, Jawa Barat",
      email: "nidafuadia20@gmail.com",
      phone: "081585853458",
      github: "https://github.com/Nidafuadia",
      linkedin: "https://www.linkedin.com/in/nida-fuadia-345858314",
      cvUrl: "https://drive.google.com/file/d/18o08IcRVT4rG4QVK715ueJjq0yVIntBy/view?usp=sharing",
      avatar: "assets/img/nida.jpg",
      status: "Mahasiswa S1 Sistem Informasi (IPK 3,88) • Open for Internship",
      bio: "Mahasiswa S1 Sistem Informasi Universitas Bina Sarana Informatika dengan IPK 3,88. Memiliki minat mendalam pada Data Analytics, Database, Business Intelligence, Audit Sistem Informasi, dan Teknologi Informasi. Terampil menggunakan Power BI, Figma, Microsoft Office, Database Design serta memiliki pemahaman dasar MySQL, SQL, dan pengujian sistem web. Cepat belajar, disiplin, dan siap berkembang melalui program magang serta proyek profesional.",
      stats: [
        { label: "Indeks Prestasi (IPK)", value: 3.88, suffix: " / 4.0" },
        { label: "Proyek & Riset Akademik", value: 6, suffix: "+" },
        { label: "Sertifikasi & Lisensi", value: 4, suffix: " Lisensi" },
        { label: "Tahun Masuk Kuliah", value: 2023, suffix: " (Sem. 7)" }
      ],
      techStack: [
        { name: "Power BI", category: "tools", icon: "powerbi", exp: "2+ Tahun", desc: "Interactive Business Intelligence & Data Visualization Dashboard" },
        { name: "Figma (UI/UX)", category: "tools", icon: "figma", exp: "2.5+ Tahun", desc: "Interactive Prototyping, Wireframing & Design Systems" },
        { name: "Microsoft Excel", category: "tools", icon: "excel", exp: "3+ Tahun", desc: "Data Analytics, Pivot Tables, Formulas & Business Modeling" },
        { name: "MySQL & Database", category: "database", icon: "mysql", exp: "2+ Tahun", desc: "Relational Database Design, ERD Architecture & SQL Querying" },
        { name: "Microsoft Word", category: "tools", icon: "word", exp: "4+ Tahun", desc: "Technical Documentation, System Reports & Administration" },
        { name: "HTML5", category: "language", icon: "html5", exp: "2+ Tahun", desc: "Semantic Web Structure & UI Markup" },
        { name: "CSS3", category: "framework", icon: "css3", exp: "2+ Tahun", desc: "Responsive Web Styling & Component Design" },
        { name: "GitHub", category: "tools", icon: "github", exp: "2+ Tahun", desc: "Version Control & Project Collaboration (Nidafuadia)" },
        { name: "VS Code", category: "tools", icon: "vscode", exp: "2+ Tahun", desc: "Code & Web Development Environment" },
        { name: "Canva", category: "tools", icon: "canva", exp: "3+ Tahun", desc: "Creative Visual Design & Infographic Presentations" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Studi Mandiri & Analisis Sistem",
          company: "Universitas Bina Sarana Informatika",
          type: "Akademik",
          description: "Melakukan analisis sistem informasi dan riset antarmuka aplikasi. Merancang dashboard analitik berbasis Power BI dan pemodelan data terstruktur untuk optimalisasi pemantauan data."
        },
        {
          period: "2024 - 2025",
          role: "UI/UX & Data Analyst",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Project Team",
          description: "Merancang wireframing dan visualisasi antarmuka presensi guru berbasis web, menyusun struktur rekapitulasi data kehadiran, dan mendampingi pengujian fungsionalitas sistem."
        },
        {
          period: "2023 - 2024",
          role: "Pengembang Aplikasi Web Mahasiswa",
          company: "Proyek SiPmanTep & Kebugaran",
          type: "Proyek Tim",
          description: "Merancang alur pengguna dan antarmuka web sistem parkir stasiun, implementasi database MySQL, serta pembuatan prototipe interaktif aplikasi mobile workout di Figma."
        }
      ],
      education: [
        {
          period: "2023 - Sekarang",
          degree: "S1 Sistem Informasi (IPK: 3,88 / 4,00)",
          institution: "Universitas Bina Sarana Informatika (UBSI)",
          description: "Fokus pada Data Analytics, Sistem Basis Data, Rekayasa Web, Audit SI, dan UI/UX Design."
        }
      ],
      certifications: [
        { name: "Sertifikasi Kompetensi Database Administrator", issuer: "Lembaga Sertifikasi Profesi (LSP / BNSP)", year: "2026", id: "BNSP-DBA-2026" },
        { name: "Uji Kompetensi Berbasis Industri - Bidang Sistem Basis Data", issuer: "Uji Kompetensi Industri", year: "2024", id: "UK-SBD-2024" },
        { name: "Seminar Akselerasi Transformasi Digital & Peningkatan Talenta Digital", issuer: "Kementerian Kominfo / Penyelenggara Nasional", year: "2023", id: "SEM-DIGITAL-2023" }
      ],
      individualProjects: [
        {
          id: "nida-proj-1",
          title: "SiPmanTep — Sistem Parkir Stasiun",
          tagline: "Sistem pengelolaan tempat parkir berbasis website di Stasiun Metland Telaga Murni",
          category: "Web Application",
          imageBadge: "Website • MySQL • UI Design",
          description: "Website pengelolaan dan pemantauan ketersediaan area parkir di Stasiun Metland Telaga Murni. Mempermudah pencatatan keluar-masuk kendaraan, validasi tiket, dan rekapitulasi data operasional stasiun.",
          metrics: { value: "100%", label: "Digital Tracking" },
          githubUrl: "https://github.com/Nidafuadia",
          demoUrl: "https://drive.google.com/file/d/18o08IcRVT4rG4QVK715ueJjq0yVIntBy/view?usp=sharing",
          tags: ["Website", "MySQL", "UI/UX", "Database", "Sistem Informasi"]
        },
        {
          id: "nida-proj-2",
          title: "UI/UX Prototype Aplikasi Workout",
          tagline: "Perancangan wireframing dan prototipe antarmuka interaktif aplikasi kebugaran",
          category: "UI/UX Design",
          imageBadge: "Figma • Prototype • User Flow",
          description: "Perancangan UI/UX lengkap aplikasi kebugaran (workout) di Figma. Dirancang dengan tata letak visual modern, pemilihan kontras ergonomis, dan flow latihan yang memandu pengguna secara intuitif.",
          metrics: { value: "Figma", label: "Interactive Prototype" },
          githubUrl: "https://github.com/Nidafuadia",
          demoUrl: "https://drive.google.com/file/d/18o08IcRVT4rG4QVK715ueJjq0yVIntBy/view?usp=sharing",
          tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping", "User Research"]
        },
        {
          id: "nida-proj-3",
          title: "Dashboard Data Penjualan Power BI",
          tagline: "Visualisasi analitik performa penjualan dan business intelligence interaktif",
          category: "Data Analytics",
          imageBadge: "Power BI • Excel • Analytics",
          description: "Dashboard visualisasi analitik interaktif yang mengolah data transaksi penjualan. Dilengkapi filter dinamis, visualisasi tren penjualan berkala, dan metrik performa produk untuk pengambilan keputusan bisnis.",
          metrics: { value: "3,88", label: "IPK / GPA" },
          githubUrl: "https://github.com/Nidafuadia",
          demoUrl: "https://drive.google.com/file/d/18o08IcRVT4rG4QVK715ueJjq0yVIntBy/view?usp=sharing",
          tags: ["Power BI", "Data Analytics", "Excel", "Business Intelligence", "Charts"]
        }
      ]
    },
    viola: {
      id: "viola",
      name: "Viola Amelia",
      nickname: "Viola",
      role: "IT Project Manager & Agile Scrum Master",
      location: "Bandung / Jakarta, Indonesia",
      email: "viola.amelia@portfolio.dev",
      github: "https://github.com/violaamelia",
      linkedin: "https://linkedin.com/in/violaamelia",
      avatar: "assets/img/viola.jpg",
      status: "Available for Project Manager & Scrum Master Roles",
      bio: "Project Manager dan Agile Scrum Master berpengalaman dalam memimpin siklus pengembangan software end-to-end (SDLC). Terampil dalam backlog prioritization, roadmap delivery, stakeholder management, resource allocation, sprint ceremonies, dan risk mitigation. Berperan sebagai Lead Project Manager pada project presensi guru SIA-BINATAMA yang mengorkestrasi rilis sistem tepat waktu sesuai kebutuhan dewan guru SMK Binatama.",
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "Sprints Delivered", value: 45, suffix: "+" },
        { label: "On-Time Delivery", value: 98.5, suffix: "%" },
        { label: "Projects Managed", value: 18, suffix: "+" }
      ],
      techStack: [
        { name: "Jira", category: "tools", icon: "jira", exp: "4+ Tahun", desc: "Agile Sprint Tracking, Epics & Backlog Management" },
        { name: "Trello", category: "tools", icon: "trello", exp: "4+ Tahun", desc: "Kanban Workflow & Task Prioritization" },
        { name: "Notion", category: "tools", icon: "notion", exp: "3.5+ Tahun", desc: "Product Specs, SOP & Team Knowledge Base" },
        { name: "Figma", category: "tools", icon: "figma", exp: "3+ Tahun", desc: "PRD Wireframe Review & UX Walkthrough" },
        { name: "Confluence", category: "tools", icon: "confluence", exp: "3.5+ Tahun", desc: "Technical Documentation & Release Notes" },
        { name: "Miro", category: "tools", icon: "miro", exp: "3+ Tahun", desc: "Visual Brainstorming, Retrospective & User Story Mapping" },
        { name: "Slack", category: "tools", icon: "slack", exp: "4+ Tahun", desc: "Cross-functional Team Communication & Alerts" },
        { name: "Asana", category: "tools", icon: "asana", exp: "3+ Tahun", desc: "Project Milestone & Timeline Tracking" },
        { name: "ClickUp", category: "tools", icon: "clickup", exp: "3+ Tahun", desc: "Goal Tracking & Sprint Burndown Management" },
        { name: "Google Sheets", category: "tools", icon: "sheets", exp: "4+ Tahun", desc: "Velocity Metrics & Resource Planning" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "3.5+ Tahun", desc: "Milestones, Release Tags & Issue Tracking" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Agile Project Manager",
          company: "Nexus Agile Solutions",
          type: "Full-Time",
          description: "Memimpin 3 squad engineer lintas fungsi (15+ developer & QA) dalam pengiriman 12 fitur enterprise SaaS. Menjaga sprint velocity stabil pada 98.5% on-time delivery dengan zero scope creep."
        },
        {
          period: "2024 - 2025",
          role: "Lead Project Manager & Product Owner",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "Project Lead",
          description: "Menyusun PRD, memfasilitasi sprint ceremonies, mengelola komunikasi dengan Kepala Sekolah dan dewan guru SMK Binatama, serta mengawal UAT presensi geofence hingga fase implementasi sukses."
        },
        {
          period: "2022 - 2023",
          role: "Associate Product Manager",
          company: "Digital Solusindo Nusantara",
          type: "Full-Time",
          description: "Menyusun user stories, memprioritaskan backlog fitur, dan mengoordinasikan rilis mingguan bersama tim engineering dan UI/UX designer."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Sistem Informasi (S.Kom) - Manajemen Rekayasa TI",
          institution: "Fakultas Ilmu Terapan & Manajemen Proyek",
          description: "IPK 3.91/4.00 (Cum Laude). Riset Tugas Akhir tentang 'Agile Governance and Risk Mitigation Framework in Rapid Education Technology Deployments'."
        }
      ],
      certifications: [
        { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", year: "2024", id: "PSM-I-88910" },
        { name: "Project Management Professional (PMP) Prep", issuer: "PMI Authorized Training", year: "2023", id: "PMP-PREP-3341" },
        { name: "Google Project Management Professional Certificate", issuer: "Google Career Certificates", year: "2023", id: "G-PM-CERT-720" }
      ],
      individualProjects: [
        {
          id: "viola-proj-1",
          title: "EduTrack Agile Transformation",
          tagline: "End-to-end LMS deployment roadmap for 12 partner educational institutions",
          category: "Project Management",
          imageBadge: "Jira • Scrum • Roadmap",
          description: "Manajemen siklus rilis dan adopsi learning management system di 12 sekolah mitra. Mengorkestrasi timeline 6 bulan dengan 100% target milestone tercapai tanpa deviasi budget.",
          metrics: { value: "98.5%", label: "On-Time Velocity" },
          githubUrl: "https://github.com/violaamelia/edutrack-agile-case-study",
          demoUrl: "https://edutrack-pm.demo.dev",
          tags: ["Project Management", "Jira", "Scrum", "Risk Mitigation", "Confluence"]
        },
        {
          id: "viola-proj-2",
          title: "HealthHub Telehealth Roadmap & UAT",
          tagline: "Product discovery to release orchestration with 50,000+ active users",
          category: "Product Management",
          imageBadge: "Notion • Miro • PRD",
          description: "Perumusan product requirement document (PRD), user journey mapping, dan orkestrasi UAT lintas dokter spesialis dan pasien dengan skor CSAT kepuasan 4.85/5.00.",
          metrics: { value: "50k+", label: "Active Users" },
          githubUrl: "https://github.com/violaamelia/healthhub-telehealth-roadmap",
          demoUrl: "https://healthhub-pm.demo.dev",
          tags: ["Product Management", "Miro", "Notion", "UAT Testing", "Analytics"]
        },
        {
          id: "viola-proj-3",
          title: "RetailSync Omnichannel Delivery",
          tagline: "Multi-squad sprint synchronization across inventory & POS systems",
          category: "Agile Leadership",
          imageBadge: "Trello • Asana • Scrum",
          description: "Penyelarasan dependensi teknis 2 squad engineering (backend & frontend) dalam migrasi sistem point of sale (POS) offline ke cloud dengan zero downtime operasional toko.",
          metrics: { value: "0 hr", label: "Store Downtime" },
          githubUrl: "https://github.com/violaamelia/retailsync-omnichannel",
          demoUrl: "https://retailsync-pm.demo.dev",
          tags: ["Scrum", "Trello", "Asana", "Stakeholder Alignment", "SDLC"]
        }
      ]
    }
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
