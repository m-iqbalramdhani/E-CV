# ⚡ Nexus Trio — Modern Multi-Profile Portfolio & E-CV Hub

Sebuah website portofolio profesional dan **Electronic Curriculum Vitae (E-CV)** modern yang dirancang untuk **3 orang sekaligus**:
1. **Muhammad Iqbal Ramdhani** — *Fullstack Architect & Cloud Infrastructure Engineer*
2. **Nida Fuadia** — *UI/UX Strategist & Creative Frontend Engineer*
3. **Viola Amelia** — *Machine Learning Engineer & Mobile Intelligence Specialist*

---

## 🌟 Fitur Unggulan (Design Bebas AI-Slop & Animasi Berkelas)

- **Navigasi Utama Pemisah 3 Profil**:
  - Pilihan tampilan kolektif tim (*Nexus Trio*) maupun profil personal terisolasi untuk masing-masing personil (*M. Iqbal*, *Nida Fuadia*, *Viola Amelia*).
  - Indikator tab dinamis dengan efek glowing sesuai identitas warna masing-masing:
    - 🔵 Iqbal: *Cyan Electric & Cloud Azure* (`#00d2ff`)
    - 🌸 Nida: *Creative Amethyst & Rose Gold* (`#f472b6`)
    - 🟢 Viola: *Cyber Emerald & Matrix Violet* (`#34d399`)
  - Dukungan URL Hash (`#team`, `#iqbal`, `#nida`, `#viola`) untuk bookmarking dan sharing tautan langsung.

- **Penempatan Foto Profil & Bio Eksklusif**:
  - Penempatan foto studio berkualitas tinggi di kartu kaca frosted (*glassmorphism*) dengan efek **3D Parallax Tilt** interaktif saat kursor mouse digerakkan.
  - Status badge ketersediaan (*Availability Status*) dengan animasi denyut cincin (*pulse ring*).
  - Tautan langsung ke GitHub, LinkedIn, dan tombol *Copy Email* instan dengan notifikasi *Toast*.

- **Penempatan Tech Stack & Bahasa Pemrograman**:
  - Filter kategori instan (*All Stack*, *Languages*, *Frameworks*, *Cloud & DB*, *Tools & UX*).
  - Indikator persentase kemahiran (*proficiency bar*) dengan animasi pengisian halus.
  - Chip tahun pengalaman (*Years of Experience*) pada tiap teknologi.
  - **Interactive Canvas Radar Chart Widget**: Dibuat langsung menggunakan HTML5 Canvas beresolusi tinggi (Retina High-DPI), mendukung animasi morfologi dan tooltip interaktif saat hover di setiap simpul keahlian.

- **1 Project Utama Kolaborasi Ber-3 Bersama**:
  - Proyek Flagship: **SYNAPSE AI** (*Autonomous Multi-Agent Knowledge & Real-Time Intelligence Platform*).
  - Tab rincian pembagian peran teknis (*role breakdown*):
    - **Muhammad Iqbal**: Event-driven microservices, gRPC streaming, dan vector search caching di PostgreSQL/pgvector.
    - **Nida Fuadia**: Design System 'Synapse Neo' di Figma, bento-grid adaptive UI 60fps, dan standar aksesibilitas WCAG 2.1 AAA.
    - **Viola Amelia**: Hybrid RAG pipeline, LLM context-compression, dan PyTorch neural re-ranking model.
  - Cuplikan kode implementasi (*code snippet window*) interaktif untuk masing-masing anggota.
  - **Interactive Neural Benchmark Sandbox**: Pengunjung dapat menguji prompt query AI simulasi secara langsung dan melihat metrik latensi (<42ms) serta skor akurasi (99.2%).
  - Diagram alur arsitektur visual interaktif (SVG Topology).

- **Project Masing-Masing (Portofolio Personal)**:
  - 3 proyek unggulan untuk tiap anggota dengan metrik dampak produksi, tag teknologi, tautan GitHub/Demo, serta tombol **"View Case Study"** yang memunculkan modal telaah arsitektur mendalam.

- **Widget Referensi E-CV (Inspirasi Lengkap, Desain Segar & Unik)**:
  - **Dual-Mode Timeline**: Berpindah secara mulus antara *Pengalaman Kerja Profesional* dan *Pendidikan Formal*.
  - **Sertifikasi & Kredensial Resmi**: Menampilkan sertifikasi industri (AWS, Google, CNCF, DeepLearning.AI, IBM) dengan status lencana *Verified*.
  - **Printable E-CV Modal**: Format curriculum vitae eksekutif yang bersih, rapi, dan siap cetak atau simpan ke PDF dengan 1 klik (`window.print()`).
  - **Hire / Contact Modal**: Formulir interaktif dengan feedback toast instan.

- **Estetika & Animasi Halus**:
  - Dark Mode Obsidian Space & Light Mode Editorial Studio dengan sakelar transisi mulus.
  - Sound Effects Manager (Web Audio API sintetis — 0 file MP3 eksternal, audio click & success yang elegan dengan tombol mute).
  - Spotlight Card Mouse Trailer (efek pencahayaan kartu dinamis mengikuti pergerakan kursor).
  - Custom kinetic cursor dot.

---

## 🚀 Teknologi: Pure HTML, CSS, JavaScript (Firebase Ready)

Website ini dibangun menggunakan **Pure Vanilla Web Stack** (HTML5, CSS3, ES6+ JavaScript), tanpa dependensi runtime atau proses `npm build` yang berat, sehingga sangat ringan, cepat, dan 100% siap dihosting di **Firebase Hosting**.

### Struktur Direktori:
```
c:\Semester 7\E-CV\
├── index.html              # Struktur utama & semantik SEO
├── firebase.json           # Konfigurasi deployment Firebase Hosting
├── .firebaserc             # Pengaturan project ID Firebase
├── README.md               # Dokumentasi proyek
├── css/
│   ├── main.css            # Token desain, tipografi, tema dark/light
│   ├── components.css      # Styling kartu bento, timeline, modal, tombol
│   └── animations.css      # Keyframes, micro-interactions, spotlight
├── js/
│   ├── data.js             # Data master profil 3 personil & proyek bersama
│   ├── canvas-radar.js     # Engine interactive canvas radar chart
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

### Menggunakan Python (Praktis):
```bash
# Jalankan web server lokal di folder proyek
python -m http.server 8080
```
Buka browser dan akses: `http://localhost:8080`

### Atau Menggunakan Node.js / NPX:
```bash
npx serve .
```

### Atau Buka Langsung:
Cukup klik dua kali (double click) file `index.html` di file explorer Anda!

---

## ☁️ Cara Hosting ke Firebase Hosting

Karena file `firebase.json` dan `.firebaserc` sudah disiapkan, Anda cukup menjalankan langkah berikut di terminal:

1. **Install Firebase CLI** (jika belum):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login ke akun Google / Firebase Anda**:
   ```bash
   firebase login
   ```

3. **Inisialisasi atau Kaitkan Project Firebase**:
   ```bash
   firebase use --add
   ```
   *(Pilih project Firebase Anda dari dashboard firebase.google.com)*

4. **Deploy ke Firebase Hosting**:
   ```bash
   firebase deploy --only hosting
   ```

Website portfolio 3 orang Anda akan langsung live di alamat `https://<project-id>.web.app`!
