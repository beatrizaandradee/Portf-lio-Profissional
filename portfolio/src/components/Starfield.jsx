import { useEffect, useRef } from 'react'

// Fundo de estrelas animado (canvas) com estrelas cadentes de vez em quando
export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, stars, raf
    let shooting = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.floor((w * h) / 5000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random(),
        s: Math.random() * 0.015 + 0.003,
        vy: Math.random() * 0.08 + 0.01,
      }))
    }

    function spawnShooting() {
      shooting.push({ x: Math.random() * w * 0.8 + w * 0.2, y: Math.random() * h * 0.4, len: 120 + Math.random() * 80, life: 1 })
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.a += s.s
        const alpha = 0.35 + Math.abs(Math.sin(s.a)) * 0.65
        s.y += s.vy
        if (s.y > h) s.y = 0
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,230,255,${alpha})`
        ctx.fill()
      }
      if (Math.random() < 0.006 && shooting.length < 2) spawnShooting()
      shooting = shooting.filter((m) => m.life > 0)
      for (const m of shooting) {
        const grad = ctx.createLinearGradient(m.x, m.y, m.x + m.len, m.y - m.len * 0.5)
        grad.addColorStop(0, `rgba(255,255,255,${m.life})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x + m.len, m.y - m.len * 0.5)
        ctx.stroke()
        m.x -= 9
        m.y += 4.5
        m.life -= 0.018
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
