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
      role: "IT Project Manager & Agile Scrum Master",
      location: "Bandung / Jakarta, Indonesia",
      email: "viola.amelia@portfolio.dev",
      github: "https://github.com/violaamelia",
      linkedin: "https://linkedin.com/in/violaamelia",
      avatar: "assets/img/viola-amelia.jpg",
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
