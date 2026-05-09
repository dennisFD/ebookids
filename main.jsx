/*
=====================================
FILE SIAP UPLOAD KE GITHUB
=====================================

1. BUAT PROJECT VITE

npm create vite@latest ebook-anak -- --template react
cd ebook-anak
npm install

2. INSTALL TAILWIND

npm install tailwindcss @tailwindcss/vite

3. EDIT vite.config.js

-------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
-------------------------------------

4. EDIT src/index.css

-------------------------------------
@import "tailwindcss";
-------------------------------------

5. SIMPAN PDF

public/buku-anak.pdf

6. INSTALL & JALANKAN

npm run dev

7. BUILD WEBSITE

npm run build

8. UPLOAD KE GITHUB

git init
git add .
git commit -m "ebook anak"
git branch -M main
git remote add origin https://github.com/USERNAME/ebook-anak.git
git push -u origin main

9. DEPLOY KE VERCEL

https://vercel.com

Import repository GitHub lalu klik Deploy.

=====================================
STRUKTUR PROJECT
=====================================

ebook-anak/
│
├── public/
│   └── buku-anak.pdf
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js

=====================================
ISI src/main.jsx
=====================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

=====================================
ISI src/App.jsx
=====================================
*/

export default function InteractiveEbookReader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-pink-100 to-yellow-100 overflow-hidden text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b-4 border-yellow-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center text-3xl shadow-lg animate-bounce">
              📚
            </div>

            <div>
              <h1 className="text-3xl font-black text-pink-600">
                Dunia Buku Anak
              </h1>
              <p className="text-sm text-slate-600 font-medium">
                Belajar sambil bermain dan membaca
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-5 py-3 rounded-full bg-pink-500 text-white font-bold shadow-lg hover:scale-105 transition">
              🏠 Beranda
            </button>

            <button className="px-5 py-3 rounded-full bg-yellow-400 text-slate-800 font-bold shadow-lg hover:scale-105 transition">
              🌙 Mode Malam
            </button>

            <button className="px-5 py-3 rounded-full bg-sky-400 text-white font-bold shadow-lg hover:scale-105 transition">
              🔊 Audio
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <main className="max-w-5xl mx-auto p-5">
        <section className="bg-white/90 backdrop-blur rounded-[35px] shadow-2xl border-4 border-sky-200 p-5 flex flex-col">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-4 mb-5 shadow">
            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-5 py-3 rounded-full bg-pink-400 text-white font-bold shadow hover:scale-105 transition">
                ⬅ Sebelumnya
              </button>

              <button className="px-5 py-3 rounded-full bg-sky-400 text-white font-bold shadow hover:scale-105 transition">
                Selanjutnya ➡
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-5 py-3 rounded-full bg-yellow-300 font-bold shadow hover:scale-105 transition">
                🖍 Stabilo
              </button>

              <button className="px-5 py-3 rounded-full bg-green-300 font-bold shadow hover:scale-105 transition">
                ✏ Menggambar
              </button>

              <button className="px-5 py-3 rounded-full bg-red-300 font-bold shadow hover:scale-105 transition">
                🧽 Hapus
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-gradient-to-br from-sky-100 to-pink-100 rounded-[35px] p-6 flex items-center justify-center relative overflow-hidden min-h-[750px]">
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
              ☁
            </div>

            <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce">
              ⭐
            </div>

            <div className="w-full h-[700px] bg-white rounded-[35px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="/Beginning Sound.pdf"
                className="w-full h-full"
                title="PDF Buku Anak"
              />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-3xl p-4 shadow">
            <div className="flex items-center gap-4">
              <span className="font-black text-pink-500">📄 Halaman</span>

              <input
                type="range"
                min="1"
                max="100"
                defaultValue="12"
                className="w-72"
              />

              <span className="font-black text-slate-700">
                12 / 100
              </span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-5 py-3 rounded-full bg-pink-400 text-white font-bold shadow hover:scale-105 transition">
                🔖 Tandai
              </button>

              <button className="px-5 py-3 rounded-full bg-sky-400 text-white font-bold shadow hover:scale-105 transition">
                ⬇ Unduh
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur border-t-4 border-pink-200 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="font-bold text-slate-600">
            © 2026 Dunia Buku Anak
          </p>

          <div className="flex items-center gap-4 font-bold text-pink-500">
            <button>💌 Bantuan</button>
            <button>📚 Tentang</button>
            <button>⭐ Feedback</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
