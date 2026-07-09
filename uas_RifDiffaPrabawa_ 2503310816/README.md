# uas_aura_2503311524

Project UAS — Aplikasi berita olahraga sederhana menggunakan **React + Vite** dan **Tailwind CSS**.

## Fitur

- Mengambil data berita dari API `https://fakenews.squirro.com/news/sport`
- Fitur **search** untuk menyaring berita berdasarkan judul, ringkasan, atau penulis
- Styling dengan **Tailwind CSS** (tema "Sport Desk" — newsprint, hijau lapangan, emas skor), responsive di mobile & desktop
- **Navbar** dengan ticker berjalan dan **Footer** informasi
- Tombol "Muat berita berikutnya" untuk pagination
- Klik kartu berita untuk membuka isi artikel lengkap dalam modal

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka browser ke `http://localhost:5173`.

## Build untuk Produksi

```bash
npm run build
npm run preview
```

## Struktur Project

```
src/
├── api/
│   └── news.js          # fetch data + helper (strip HTML, format tanggal)
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── NewsCard.jsx
│   ├── NewsModal.jsx
│   └── Footer.jsx
├── App.jsx               # logika utama (fetch, search, pagination)
├── main.jsx
└── index.css              # konfigurasi tema Tailwind v4
```

## Teknologi

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Fetch API native (tanpa library tambahan)

---
Dibuat oleh: **Aura Ramadani** — NIM **2503311524**
