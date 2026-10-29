# ⚡ Trio Portfolio & E-CV Hub — SMK Binatama SIA Showcase

Sebuah website portofolio profesional dan **Electronic Curriculum Vitae (E-CV)** modern yang dirancang untuk **3 personil**:
1. **Muhammad Iqbal Ramdhani** — *Fullstack Engineer & Database Architect*
2. **Nida Fuadia** — *Lead Quality Assurance & Software Tester*
3. **Viola Amelia** — *Mahasiswa Sistem Informasi | Administrasi*

---

## 🌟 Fitur Unggulan

- **Navigasi Pemisah 3 Halaman Personil**:
  - Pilihan persona individual (*M. Iqbal*, *Nida Fuadia*, *Viola Amelia*) dengan nuansa warna identitas masing-masing:
    - 🔵 Iqbal: *Cyan Electric* (`#00d2ff`)
    - 🌸 Nida: *Amethyst Rose* (`#f472b6`)
    - 🟢 Viola: *Cyber Emerald* (`#34d399`)
  - Dukungan URL Hash (`#iqbal`, `#nida`, `#viola`) untuk bookmarking dan sharing tautan langsung.

- **1 Project Utama Kolaborasi Ber-3 Bersama: SIA-BINATAMA**:
  - Proyek Flagship: **SIA-BINATAMA** (*Sistem Informasi Akademik & Presensi Guru SMK Binatama Berbasis GPS Geofencing & Biometrik Swafoto*).
  - Tab rincian pembagian peran teknis:
    - **Muhammad Iqbal**: Skema database PostgreSQL/MySQL, formula kalkulasi Haversine geofence, RESTful API & manajemen hak akses guru.
    - **Nida Fuadia**: Skenario pengujian (positive/negative/edge cases), stress testing jam masuk guru dengan JMeter/k6, dan automated regression test Cypress/Playwright.
    - **Viola Amelia**: Penyusunan PRD, user stories, acceptance criteria, sprint planning Scrum, mitigasi risiko teknis, dan UAT bersama 65+ dewan guru SMK Binatama.
  - **Simulator Presensi Guru SMK Binatama Interaktif**: Pengunjung dapat menguji alur validasi koordinat GPS radius gerbang sekolah dan verifikasi kamera selfie secara live.

- **Kumpulan Logo Tech Stack Mengambang (Pure Floating Logos Cloud)**:
  - Tampilan logo teknologi murni (*pure brand SVGs*) tanpa card pembungkus, tanpa persentase angka, dan tanpa teks yang mengganggu.
  - Efek animasi mengambang dinamis (*staggered floating drift animations*) dengan pencahayaan neon glow saat hover.
  - Disesuaikan spesifik untuk masing-masing keahlian:
    - **Iqbal**: Go, PostgreSQL, MySQL, Redis, MongoDB, PHP/Laravel, TypeScript, JavaScript, React, Node.js, Vue, Docker, Git, Linux, Tailwind CSS.
    - **Nida**: Postman, Cypress, Playwright, Selenium, Jest, Apache JMeter, k6, SonarQube, Katalon Studio, Swagger, Git, Linux.
    - **Viola**: Figma, Trello, HTML, CSS, Power BI, MySQL, DB Designer, Cisco, APK Mobile, PHP, VS Code, Draw.io, Canva, Microsoft Word, Microsoft Excel.

- **Project Masing-Masing (Portofolio Personal)**:
  - 3 proyek unggulan untuk tiap anggota dengan metrik dampak nyata, tag teknologi, dan modal studi kasus mendalam.

- **Widget E-CV & Print-Ready**:
  - **Dual-Mode Timeline**: Berpindah secara mulus antara *Pengalaman Kerja Profesional* dan *Pendidikan Formal*.
  - **Sertifikasi & Kredensial Resmi**: Menampilkan sertifikasi industri (EnterpriseDB, AWS, ISTQB, Cypress, Scrum.org, PMI) dengan status lencana *Verified*.
  - **Printable E-CV Modal**: Format curriculum vitae eksekutif yang bersih, rapi, dan siap cetak atau simpan ke PDF dengan 1 klik (`window.print()`).
  - **Hire / Contact Modal**: Formulir pesan interaktif dengan feedback toast instan.

---

## 🚀 Teknologi: Pure HTML, CSS, JavaScript (Firebase Ready)

Website ini dibangun menggunakan **Pure Vanilla Web Stack** (HTML5, CSS3, ES6+ JavaScript), tanpa framework runtime berat atau build step kompleks, sehingga sangat cepat dan 100% siap dihosting di **Firebase Hosting**.

### Struktur Direktori:
```
c:\Semester 7\E-CV\
├── index.html              # Struktur utama & semantik SEO
├── firebase.json           # Konfigurasi deployment Firebase Hosting
├── .firebaserc             # Pengaturan project ID Firebase
├── README.md               # Dokumentasi proyek
├── css/
│   ├── main.css            # Token desain, tipografi, tema dark/light
│   ├── components.css      # Styling layout, floating logos, timeline, modal
│   └── animations.css      # Keyframes floating drift, spotlight hover
├── js/
│   ├── data.js             # Data master profil 3 personil & proyek SIA-BINATAMA
│   ├── tech-icons.js       # Pustaka vektor SVG logo brand teknologi
│   ├── sound-effects.js    # Sintesis audio micro-interaction (Web Audio API)
│   └── app.js              # State router, modal controller, reactive rendering
└── assets/
    └── img/
        ├── iqbal.jpg       # Foto profil Muhammad Iqbal Ramdhani
        ├── nida.jpg        # Foto profil Nida Fuadia
        └── viola.jpg       # Foto profil Viola Amelia
```

---

## 💻 Cara Menjalankan Secara Lokal

```bash
# Jalankan web server lokal di folder proyek
python -m http.server 8080
```
Buka browser dan akses: `http://localhost:8080`

---

## ☁️ Cara Hosting ke Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login ke akun Firebase**:
   ```bash
   firebase login
   ```
3. **Deploy ke Firebase Hosting**:
   ```bash
   firebase deploy --only hosting
   ```
