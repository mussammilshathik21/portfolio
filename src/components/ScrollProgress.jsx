import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const max = document.body.scrollHeight - window.innerHeight
      if (max > 0) setPct((window.scrollY / max) * 100)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{
      position:'fixed', top:0, left:0,
      height:'3px', width:`${pct}%`,
      background:'linear-gradient(90deg,#00A19B,#E4DDD3)',
      zIndex:9999, borderRadius:'0 3px 3px 0',
      transition:'width .1s linear', pointerEvents:'none',
    }}/>
  )
}
