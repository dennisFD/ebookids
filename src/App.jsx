export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-pink-100 to-yellow-100 overflow-hidden text-slate-800">
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
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-5">
        <section className="bg-white/90 backdrop-blur rounded-[35px] shadow-2xl border-4 border-sky-200 p-5 flex flex-col">

          <div className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-3xl p-4 mb-5 shadow">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-5 py-3 rounded-full bg-white text-pink-500 font-black shadow">
                📖 Mode Baca Interaktif
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-5 py-3 rounded-full bg-yellow-300 font-bold shadow">
                🖍 Stabilo
              </button>

              <button className="px-5 py-3 rounded-full bg-green-300 font-bold shadow">
                ✏ Pena
              </button>

              <button className="px-5 py-3 rounded-full bg-pink-300 font-bold shadow">
                🔄 Undo
              </button>

              <button className="px-5 py-3 rounded-full bg-sky-300 font-bold shadow">
                📄 Export PDF
              </button>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-sky-100 to-pink-100 rounded-[35px] p-2 flex items-center justify-center relative overflow-hidden min-h-[90vh]">
            <div className="w-full h-[88vh] bg-white rounded-[35px] overflow-hidden shadow-2xl border-4 border-white relative">

              <iframe
                src="/Beginning Sound.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                className="w-full h-full bg-white"
                title="PDF Buku Anak"
              />

              <canvas className="absolute inset-0 w-full h-full touch-pan-x" />
            </div>
          </div>

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
              <button className="px-5 py-3 rounded-full bg-pink-400 text-white font-bold shadow">
                🔖 Tandai
              </button>

              <button className="px-5 py-3 rounded-full bg-sky-400 text-white font-bold shadow">
                ⬇ Export PDF
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
