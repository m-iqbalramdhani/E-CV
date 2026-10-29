/**
 * Portfolio & E-CV Multi-Profile Data Store
 * Members: Muhammad Iqbal Ramdhani, Nida Fuadia, Viola Amelia
 * Roles:
 * - Muhammad Iqbal Ramdhani: Fullstack Engineer & Database Architect
 * - Nida Fuadia: Lead Quality Assurance & Software Tester
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
        role: "Lead Quality Assurance & Software Tester",
        tagline: "Test Automation, GPS Mocking Simulation, Stress Testing & API Verification",
        tasks: [
          "Merancang 250+ skenario pengujian komprehensif (positive, negative, edge-cases) untuk modul presensi guru dan pengajuan izin SMK Binatama.",
          "Melakukan stress testing dan load testing dengan Apache JMeter mensimulasikan 100+ guru melakukan submit presensi serentak pada pukul 06:55 WIB.",
          "Menguji keamanan API dengan Postman & OWASP ZAP untuk mencegah celah manipulasi koordinat GPS (location spoofing) dan token replay attack.",
          "Menyusun automated regression test suite menggunakan Cypress dan Playwright yang berjalan otomatis pada GitHub Actions CI pipeline."
        ],
        codeHighlight: `// Automated E2E Test Suite Presensi Guru (Nida Fuadia - QA Tester)
describe('SIA-BINATAMA Guru Attendance Verification Suite', () => {
  it('Harus menolak presensi jika koordinat GPS di luar radius 35m SMK Binatama', () => {
    cy.mockGeolocation(-7.78000, 110.37500); // 2.4 km dari sekolah
    cy.visit('/presensi/masuk');
    cy.get('[data-cy="btn-submit-attendance"]').click();
    
    cy.get('[data-cy="toast-error"]')
      .should('be.visible')
      .and('contain', 'Presensi Ditolak: Anda berada di luar radius SMK Binatama');
  });
  
  it('Harus berhasil submit presensi saat lokasi valid dan kamera selfie terverifikasi', () => {
    cy.mockGeolocation(-7.77128, 110.36715); // Koordinat valid gerbang SMK Binatama
    cy.get('[data-cy="camera-preview"]').should('have.class', 'face-detected');
    cy.get('[data-cy="btn-submit-attendance"]').click();
    cy.get('[data-cy="attendance-badge-success"]').should('exist');
  });
});`
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
      role: "Lead Quality Assurance & Software Tester",
      location: "Bandung, Indonesia",
      email: "nida.fuadia@portfolio.dev",
      github: "https://github.com/nidafuadia",
      linkedin: "https://linkedin.com/in/nidafuadia",
      avatar: "assets/img/nida.jpg",
      status: "Open for Senior QA Engineer & Test Automation Roles",
      bio: "Software Quality Assurance (QA) Engineer berfokus pada automated testing, manual exploratory testing, API testing, dan stress load analysis. Berdedikasi menjaga reliabilitas, akurasi, dan integritas sistem dengan zero critical bug production. Berperan sebagai Lead Quality Assurance pada project presensi guru SIA-BINATAMA untuk menguji validasi geofencing, verifikasi swafoto anti-spoofing, dan stress testing jam kehadiran dewan guru.",
      stats: [
        { label: "Tahun Pengalaman", value: 3.5, suffix: "+" },
        { label: "Test Cases Authored", value: 1200, suffix: "+" },
        { label: "Automation Coverage", value: 92, suffix: "%" },
        { label: "Stress Test Simulated", value: 10, suffix: "k Users" }
      ],
      techStack: [
        { name: "Postman", category: "tools", icon: "postman", exp: "4+ Tahun", desc: "API Automated Testing & Contract Verification" },
        { name: "Cypress", category: "framework", icon: "cypress", exp: "3.5+ Tahun", desc: "End-to-End Web Automation Testing" },
        { name: "Playwright", category: "framework", icon: "playwright", exp: "3+ Tahun", desc: "Cross-Browser & Multi-tab E2E Testing" },
        { name: "Selenium", category: "framework", icon: "selenium", exp: "3+ Tahun", desc: "Automated Browser Regression Testing" },
        { name: "Jest", category: "framework", icon: "jest", exp: "3.5+ Tahun", desc: "Unit & Integration Test Suites" },
        { name: "Apache JMeter", category: "tools", icon: "jmeter", exp: "3+ Tahun", desc: "Performance & Peak Load Stress Testing" },
        { name: "k6", category: "tools", icon: "k6", exp: "2.5+ Tahun", desc: "Cloud-native Load Testing & Spike Testing" },
        { name: "SonarQube", category: "tools", icon: "sonarqube", exp: "3+ Tahun", desc: "Static Code Quality & Security Vulnerability Gate" },
        { name: "Katalon Studio", category: "tools", icon: "katalon", exp: "3+ Tahun", desc: "Mobile & Web Test Automation" },
        { name: "Swagger / OpenAPI", category: "tools", icon: "swagger", exp: "3.5+ Tahun", desc: "API Schema Validation & Mocking" },
        { name: "Git & GitHub", category: "tools", icon: "git", exp: "3.5+ Tahun", desc: "CI/CD Automated Test Pipeline (GitHub Actions)" },
        { name: "Linux Server", category: "tools", icon: "linux", exp: "3+ Tahun", desc: "Test Environment Setup & Log Triage" }
      ],
      experience: [
        {
          period: "2024 - Sekarang",
          role: "Senior QA Automation Engineer",
          company: "SecureTech Quality Labs",
          type: "Full-Time",
          description: "Membangun framework end-to-end automation testing dengan Cypress dan Playwright untuk aplikasi SaaS berskala enterprise. Meningkatkan automation test coverage dari 54% menjadi 92% dan memotong siklus regresi manual hingga 60%."
        },
        {
          period: "2024 - 2025",
          role: "Lead QA & Software Tester",
          company: "Proyek SIA-BINATAMA (SMK Binatama)",
          type: "QA Lead",
          description: "Merancang 250+ skenario pengujian komprehensif untuk validasi radius geofence gerbang sekolah, stress testing simulasi 100+ absensi serentak jam 06:55 dengan JMeter, dan verifikasi biometrik swafoto."
        },
        {
          period: "2022 - 2023",
          role: "QA Engineer & Manual Tester",
          company: "QualityWave Solusindo",
          type: "Full-Time",
          description: "Menjalankan manual exploratory testing, API testing dengan Postman, serta pelaporan bug berstandar tinggi di Jira untuk platform fintech dan e-learning."
        }
      ],
      education: [
        {
          period: "2021 - 2025",
          degree: "Sarjana Komputer (S.Kom) - Rekayasa Perangkat Lunak",
          institution: "Universitas Negeri Bandung",
          description: "IPK 3.90/4.00. Fokus riset Tugas Akhir tentang 'Automated Geolocation Spoofing Detection and API Robustness Testing in Mobile Attendance Systems'."
        }
      ],
      certifications: [
        { name: "ISTQB® Certified Tester Foundation Level (CTFL)", issuer: "International Software Testing Qualifications Board", year: "2024", id: "ISTQB-CTFL-99214" },
        { name: "Cypress End-to-End Testing Specialist", issuer: "Cypress.io", year: "2023", id: "CYP-ADV-4819" },
        { name: "Postman API Testing & Automation Certificate", issuer: "Postman", year: "2023", id: "POSTMAN-CERT-772" }
      ],
      individualProjects: [
        {
          id: "nida-proj-1",
          title: "OmniTest Automated E2E Framework",
          tagline: "Modular test automation suite with rich HTML visual reports",
          category: "Test Automation",
          imageBadge: "Playwright • TypeScript • CI/CD",
          description: "Framework automation testing terpadu berbasis Playwright dan TypeScript yang mencakup parallel execution, visual regression screenshot comparison, dan integrasi notifikasi webhook ke Slack/Discord.",
          metrics: { value: "92%", label: "Test Coverage" },
          githubUrl: "https://github.com/nidafuadia/omnitest-framework",
          demoUrl: "https://omnitest.demo.dev",
          tags: ["Playwright", "TypeScript", "Test Automation", "CI/CD", "Allure"]
        },
        {
          id: "nida-proj-2",
          title: "FinSecure Peak Load & Security Lab",
          tagline: "15,000 req/sec stress test suite & vulnerability scanner",
          category: "Performance Testing",
          imageBadge: "JMeter • k6 • Postman",
          description: "Rangkaian uji beban ekstrem dan benchmark keamanan API yang mensimulasikan lonjakan transaksi perbankan 15,000 req/sec, mengidentifikasi memory leak dan database lock contention.",
          metrics: { value: "15,000", label: "Simulated Req/s" },
          githubUrl: "https://github.com/nidafuadia/finsecure-stress-lab",
          demoUrl: "https://finsecure-test.demo.dev",
          tags: ["JMeter", "k6", "Postman", "API Testing", "Security"]
        },
        {
          id: "nida-proj-3",
          title: "Appium Matrix Mobile Testbed",
          tagline: "Automated Android & iOS device matrix verification",
          category: "Mobile Testing",
          imageBadge: "Katalon • Appium • Docker",
          description: "Test harness otomatis untuk menguji kompatibilitas aplikasi Android presensi dan perizinan pada 20+ variasi resolusi layar, OS version, serta simulasi hilangnya sinyal GPS.",
          metrics: { value: "-70%", label: "Manual Regression" },
          githubUrl: "https://github.com/nidafuadia/appium-matrix-testbed",
          demoUrl: "https://appium-testbed.demo.dev",
          tags: ["Appium", "Katalon", "Mobile QA", "Android", "Docker"]
        }
      ]
    },

    viola: {
      id: "viola",
      name: "Viola Amelia",
      nickname: "Viola",
      role: "Mahasiswa Sistem Informasi | Administrasi",
      location: "Kabupaten Bekasi, Jawa Barat",
      email: "ameliaviolaa01@gmail.com",
      phone: "+62 856 9145 4807",
      github: "https://github.com/violaamelia",
      linkedin: "https://linkedin.com/in/violaamelia",
      avatar: "assets/img/viola-amelia.jpg",
      status: "Mahasiswa Semester 6 (IPK 3.94) • Sistem Informasi UBSI",
      bio: "Mahasiswa semester 6 Program Studi Sistem Informasi Universitas Bina Sarana Informatika dengan IPK 3,94. Memiliki pemahaman dalam pengelolaan administrasi, persuratan, koordinasi kegiatan, dan sistem basis data. Memiliki kemampuan bekerja dalam tim, teliti, disiplin, jujur, dan cepat beradaptasi. Aktif mengikuti kegiatan akademik, organisasi, serta pelatihan untuk meningkatkan kompetensi profesional.",
      stats: [
        { label: "IPK Akademik", value: 3.94, suffix: "/4.00" },
        { label: "Semester Berjalan", value: 6, suffix: "" },
        { label: "Dedikasi & Ketelitian", value: 100, suffix: "%" },
        { label: "Sertifikasi Resmi", value: 6, suffix: "+" }
      ],
      techStack: [
        { name: "MySQL", category: "database", icon: "mysql", exp: "Mahir", desc: "Administrasi Basis Data Relasional, DDL/DML & Manajemen Skema" },
        { name: "Microsoft Word", category: "office", icon: "word", exp: "Mahir", desc: "Administrasi Persuratan, Dokumen Resmi & Laporan Sekolah" },
        { name: "Microsoft Excel", category: "office", icon: "excel", exp: "Mahir", desc: "Rekapitulasi Keuangan, Administrasi PTK & Olah Data Kesiswaan" },
        { name: "Microsoft PowerPoint", category: "office", icon: "powerpoint", exp: "Mahir", desc: "Presentasi Edukatif, Materi Pelatihan & Evaluasi Program" },
        { name: "Canva", category: "design", icon: "canva", exp: "Mahir", desc: "Desain Konten Digital Marketing, Publikasi & Banner Edukasi" },
        { name: "Figma", category: "design", icon: "figma", exp: "Menengah", desc: "Desain UI/UX & Wireframing Alur Aplikasi Sistem Informasi" },
        { name: "PHP (Basic)", category: "programming", icon: "php", exp: "Dasar", desc: "Pemrograman Web Dasar & Integrasi Form Dinamis" },
        { name: "VS Code", category: "tools", icon: "vscode", exp: "Menengah", desc: "Code Editor Utama untuk Proyek Pengembangan Web" },
        { name: "Draw.io", category: "tools", icon: "drawio", exp: "Mahir", desc: "Pemodelan Diagram Alir Bisnis, Use Case & DFD Sistem" },
        { name: "XAMPP", category: "tools", icon: "xampp", exp: "Menengah", desc: "Local Web Server & Manajemen Database MySQL" }
      ],
      experience: [],
      organizations: [
        {
          period: "11 Oktober 2025",
          role: "Peserta Pengabdian kepada Masyarakat (PKM)",
          company: "Universitas Bina Sarana Informatika (UBSI)",
          type: "Kegiatan Akademik",
          description: "Berpartisipasi dalam kegiatan Pengabdian kepada Masyarakat di Pondok Pesantren Al Ma'had, Setu dengan materi 'Pemanfaatan Kecerdasan Buatan untuk Digital Marketing bagi Guru dan Pengasuh Pondok Pesantren Al Ma'had'."
        },
        {
          period: "2019 - 2020",
          role: "Wakil Ketua Asrama",
          company: "MA Ummul Quro Al Islami Boarding School",
          type: "Organisasi Santri",
          description: "Mengelola administrasi organisasi dan kegiatan asrama, menyusun proposal kegiatan, mengelola surat masuk dan keluar, serta berkoordinasi dalam rapat rutin."
        },
        {
          period: "2018 - 2019",
          role: "Pengurus Ikatan Santri Putri (ISPI)",
          company: "Organisasi Santri ISPI",
          type: "Organisasi Santri",
          description: "Menyusun jadwal kegiatan santri, mengelola laporan keuangan organisasi, mengawasi kegiatan asrama, serta berpartisipasi dalam rapat evaluasi organisasi."
        }
      ],
      education: [
        {
          period: "2023 - Sekarang",
          degree: "S1 Sistem Informasi (Mahasiswa Aktif Semester 6)",
          institution: "Universitas Bina Sarana Informatika (UBSI)",
          description: "IPK 3.94 / 4.00. Fokus pada analisis perancangan sistem informasi, tata kelola basis data, administrasi sistem, dan metodologi perancangan perangkat lunak."
        },
        {
          period: "2017 - 2020",
          degree: "Jurusan Ilmu Pengetahuan Sosial (IPS)",
          institution: "MA Ummul Quro Al Islami Boarding School",
          description: "Lulus dengan prestasi Khatmil Qur'an Terbaik dari 45 Anggota. Membentuk dasar kepemimpinan, kedisiplinan, dan kemandirian."
        }
      ],
      certifications: [
        { name: "Database Administrator", issuer: "Sertifikasi Profesi & Kompetensi Basis Data", year: "2026", id: "DBA-CERT-2026" },
        { name: "Junior Web Developer", issuer: "Vocational School Graduate Academy (VSGA) - Digital Talent Scholarship 2025 (Komdigi)", year: "2025", id: "VSGA-KOMDIGI-2025" },
        { name: "Pengantar Mindset Digital 1: Mengubah Masa Depan dengan Pola Pikir Digital", issuer: "Digital Talent Scholarship 2025 (Komdigi)", year: "2025", id: "DTS-MINDSET-2025" },
        { name: "Uji Kompetensi Berbasis Industri - Bidang Sistem Basis Data", issuer: "Sertifikasi Industri Basis Data", year: "2024", id: "UKBI-DB-2024" },
        { name: "Seminar Wajib Entrepreneur", issuer: "Universitas Bina Sarana Informatika", year: "2024", id: "SEM-ENTREPRENEUR-UBSI" },
        { name: "Sertifikat Pengabdian kepada Masyarakat (PKM)", issuer: "Pusat Penelitian dan Pengabdian kepada Masyarakat UBSI", year: "2025", id: "PKM-AI-UBSI-2025" }
      ],
      individualProjects: [
        {
          id: "viola-proj-silaundry",
          title: "SILaundry - Sistem Informasi Manajemen Laundry",
          tagline: "Sistem Informasi Berbasis Web untuk Pengelolaan Operasional & Transaksi Laundry Modern",
          category: "Sistem Informasi & Web App",
          imageBadge: "PHP • MySQL • Bootstrap • XAMPP",
          description: "SILaundry adalah sistem berbasis website yang dirancang khusus untuk mempermudah pengelolaan bisnis laundry secara efisien dan modern. Dengan menggunakan sistem ini, pemilik laundry dapat mengelola berbagai aspek operasional seperti memfasilitasi pendaftaran pelanggan, pencatatan transaksi masuk dan keluar, serta pemantauan kondisi status pencucian secara real-time. Meminimalkan kesalahan pencatatan manual serta meningkatkan kepuasan pelanggan dengan layanan yang lebih cepat, transparan, dan akurat.",
          metrics: { value: "100%", label: "Akurasi Transaksi & Status Cucian" },
          githubUrl: "https://github.com/violaamelia/silaundry-web-app",
          demoUrl: "https://silaundry.demo.dev",
          tags: ["Sistem Informasi", "PHP", "MySQL", "Web Development", "Manajemen Operasional", "Database"]
        },
        {
          id: "viola-proj-dekorpro",
          title: "DekorPro - E-Commerce Furniture & Dekorasi Ruangan",
          tagline: "Website E-Commerce Penjualan Furniture & Dekorasi Interior Ruangan Modern",
          category: "E-Commerce & Web Development",
          imageBadge: "PHP • MySQL • E-Commerce • UI/UX",
          description: "Proyek ini bertujuan untuk mengembangkan sebuah website e-commerce yang berfokus pada penjualan furniture dekorasi ruangan seperti meja, lemari dan berbagai furniture interior lainnya. Website ini dirancang untuk memberikan pengalaman berbelanja yang mudah dan nyaman bagi pelanggan yang ingin mempercantik ruangannya tanpa harus datang langsung ke toko. Beberapa fitur utama yang disediakan antara lain katalog produk lengkap dengan gambar dan deskripsi, fitur pencarian dan filter, keranjang belanja, sistem checkout, serta halaman admin untuk mengelola data produk, pesanan, dan pengguna. Website ini ditujukan untuk membantu pelaku usaha dekorasi ruangan dalam memasarkan produknya secara digital, memperluas jangkauan pasar, dan meningkatkan efisiensi penjualan di era modern.",
          metrics: { value: "100%", label: "Katalog & Transaksi Online" },
          githubUrl: "https://github.com/violaamelia/dekorpro-furniture-ecommerce",
          demoUrl: "https://dekorpro.demo.dev",
          tags: ["E-Commerce", "PHP", "MySQL", "Furniture Interior", "Keranjang Belanja", "Admin Dashboard"]
        },
        {
          id: "viola-proj-siquiz",
          title: "Siquiz - Aplikasi Simulasi Quiz Daring (Metode Waterfall)",
          tagline: "Aplikasi Simulasi Quiz Berbasis Waterfall SDLC untuk Pembelajaran Daring",
          category: "E-Learning & SDLC Waterfall",
          imageBadge: "Waterfall SDLC • Quiz Daring • PHP • MySQL",
          description: "Siquiz adalah aplikasi simulasi quiz secara daring sebagai sistem pembelajaran berbasis teknologi informasi. Dikembangkan menggunakan kerangka kerja SDLC (Software Development Life Cycle) klasik dengan Metode Waterfall, yaitu metode perancangan yang berjalan secara linear di mana fase satu harus selesai secara tuntas sebelum masuk ke fase berikutnya (Requirement Analysis, System Design, Implementation, Testing, Deployment, & Maintenance). Memfasilitasi pengerjaan quiz interaktif, bank soal terstruktur, evaluasi jawaban otomatis, serta rekapitulasi performa belajar peserta secara terukur dan transparan.",
          metrics: { value: "100%", label: "Kepatuhan Linear Fase Waterfall" },
          githubUrl: "https://github.com/violaamelia/siquiz-online-simulation",
          demoUrl: "https://siquiz.demo.dev",
          tags: ["Quiz Daring", "SDLC Waterfall", "Pembelajaran Online", "PHP", "MySQL", "Metode Linear"]
        }
      ]
    }
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
