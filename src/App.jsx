import { useEffect, useRef, useState } from 'react'

export default function App() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  const [drawing, setDrawing] = useState(false)
  const [ctx, setCtx] = useState(null)
  const [color, setColor] = useState('#16a34a')

  const historyRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight

    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineWidth = 4

    setCtx(context)

    const saved = localStorage.getItem('ebook-coretan')

    if (saved) {
      const img = new Image()
      img.src = saved

      img.onload = () => {
        context.drawImage(img, 0, 0)
      }
    }
  }, [])

  const saveHistory = () => {
    const canvas = canvasRef.current
    historyRef.current.push(canvas.toDataURL())
  }

  const startDraw = (e) => {
    if (!ctx) return

    saveHistory()

    setDrawing(true)

    const rect = canvasRef.current.getBoundingClientRect()

    ctx.beginPath()
    ctx.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )

    ctx.strokeStyle = color
    ctx.lineWidth = 4
  }

  const draw = (e) => {
    if (!drawing || !ctx) return

    const rect = canvasRef.current.getBoundingClientRect()

    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )

    ctx.stroke()
  }

  const stopDraw = () => {
    setDrawing(false)

    localStorage.setItem(
      'ebook-coretan',
      canvasRef.current.toDataURL()
    )
  }

  const undoDraw = () => {
    if (!ctx || historyRef.current.length === 0) return

    const previous = historyRef.current.pop()

    const img = new Image()
    img.src = previous

    img.onload = () => {
      ctx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      )

      ctx.drawImage(img, 0, 0)
    }
  }

  const clearCanvas = () => {
    if (!ctx) return

    ctx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )

    localStorage.removeItem('ebook-coretan')
  }

  const exportImage = () => {
    const link = document.createElement('a')

    link.download = 'hasil-coretan.png'
    link.href = canvasRef.current.toDataURL()

    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-pink-100 to-yellow-100 text-slate-800">
      <header className="bg-white/80 backdrop-blur-lg shadow-md border-b-4 border-yellow-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center text-3xl shadow-lg">
            📚
          </div>

          <div>
            <h1 className="text-3xl font-black text-pink-600">
              Dunia Buku Anak
            </h1>

            <p className="text-sm font-medium text-slate-600">
              Membaca dan menulis lebih seru
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-5">
        <section className="bg-white/90 rounded-[35px] shadow-2xl border-4 border-sky-200 p-5">

          <div className="flex flex-wrap gap-3 mb-5 bg-gradient-to-r from-pink-100 to-yellow-100 p-4 rounded-3xl shadow">

            <div className="px-5 py-3 rounded-full bg-white text-pink-500 font-black shadow">
              📖 Mode Baca Interaktif
            </div>

            <button
              onClick={() => setColor('#16a34a')}
              className="px-5 py-3 rounded-full bg-green-300 font-bold shadow"
            >
              ✏ Tulis Hijau
            </button>

            <button
              onClick={() => setColor('#2563eb')}
              className="px-5 py-3 rounded-full bg-blue-300 font-bold shadow"
            >
              ✏ Tulis Biru
            </button>

            <button
              onClick={() => setColor('#dc2626')}
              className="px-5 py-3 rounded-full bg-red-300 font-bold shadow"
            >
              ✏ Tulis Merah
            </button>

            <button
              onClick={() => setColor('#000000')}
              className="px-5 py-3 rounded-full bg-black text-white font-bold shadow"
            >
              ✏ Tulis Hitam
            </button>

            <button
              onClick={undoDraw}
              className="px-5 py-3 rounded-full bg-purple-300 font-bold shadow"
            >
              ↩ Undo
            </button>

            <button
              onClick={clearCanvas}
              className="px-5 py-3 rounded-full bg-pink-300 font-bold shadow"
            >
              🧽 Hapus
            </button>

            <button
              onClick={exportImage}
              className="px-5 py-3 rounded-full bg-sky-300 font-bold shadow"
            >
              ⬇ Export
            </button>
          </div>

          <div className="bg-gradient-to-br from-sky-100 to-pink-100 rounded-[35px] p-2 min-h-[90vh]">
            <div
              ref={containerRef}
              className="w-full h-[88vh] bg-white rounded-[35px] overflow-hidden shadow-2xl border-4 border-white relative"
            >
              <iframe
                src="/Beginning Sound.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                className="w-full h-full"
                title="PDF Buku Anak"
              />

              <canvas
                ref={canvasRef}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                className="absolute inset-0 w-full h-full z-10"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
