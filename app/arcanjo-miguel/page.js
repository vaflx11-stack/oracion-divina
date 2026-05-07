'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

export default function ArcanjoMiguelPage() {
  const router = useRouter()
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  function handleTimeUpdate() {
    if (!audioRef.current) return
    const p = (audioRef.current.currentTime / audioRef.current.duration) * 100
    setProgresso(p || 0)
  }

  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* Header com imagem */}
      <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <img src="/images/arcanjo-miguel.png" alt="Arcángel Miguel"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          onError={(e) => { e.target.style.display = 'none' }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(10,15,30,0.95) 100%)',
        }} />
        <button onClick={() => router.back()} style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(255,255,255,0.15)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          color: 'white', fontSize: '18px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>←</button>
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
          <div style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
            ARCÁNGEL MIGUEL
          </div>
          <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 700, fontFamily: 'Cinzel, serif', lineHeight: 1.2 }}>
            Oración de Protección
          </h1>
        </div>
      </div>

      <div style={{ padding: '24px 20px' }}>

        {/* Player de áudio */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '20px', padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex', alignItems: 'center', gap: '14px',
        }}>
          <button onClick={togglePlay} style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', flexShrink: 0,
          }}>
            {playing ? '⏸' : '▶'}
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'white', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif', marginBottom: '8px' }}>
              Oración de Protección al Arcángel Miguel
            </div>
            <div style={{
              height: '4px', background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${progresso}%`,
                background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
                borderRadius: '2px', transition: 'width 0.3s',
              }} />
            </div>
          </div>
          <audio ref={audioRef} src="/audios/arcanjo-miguel.mp3"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => { setPlaying(false); setProgresso(0) }} />
        </div>

        {/* Texto da oração */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px', padding: '28px 24px',
        }}>
          <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textAlign: 'center', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
            ✦ LA ORACIÓN ✦
          </div>
          {[
            'Miguel, guarda fiel y defensor de la justicia divina,\nte pido tu escudo y tu espada poderosa.',
            'Corta todo vínculo que me atañe al mal,\ny disipa toda influencia oscura en mi camino.',
            'Fortalece mi espíritu, renueva mi fe,\ny guíame para vivir en tu luz y verdad.',
            'Con tu presencia, nada me atemorice.\nCon tu fuerza, nada me derribe.\nCon tu protección, mi alma permanece en paz.',
            'Así sea.',
          ].map((paragrafo, i) => (
            <p key={i} style={{
              color: i === 4 ? '#C9A84C' : 'rgba(255,255,255,0.85)',
              fontSize: i === 4 ? '16px' : '15px',
              lineHeight: 1.9,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: i < 4 ? '20px' : '0',
              fontWeight: i === 4 ? 700 : 400,
            }}>
              {paragrafo}
            </p>
          ))}
        </div>

        <button className="btn-gold" style={{ marginTop: '24px' }}>
          🛡️ Amén — He orado esto
        </button>
      </div>

      <BottomNav />
    </div>
  )
}
