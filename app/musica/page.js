'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const musicas = [
  { id: 1, titulo: 'Frecuencia de la Abundancia', subtitulo: '888 Hz • Manifestar Riqueza', img: '🌟', audio: '/audios/abundancia-888hz.mp3' },
  { id: 2, titulo: 'Reino Angélico 888 Hz', subtitulo: 'Conexión Divina • Yo Superior', img: '👼', audio: '/audios/reino-angelico.mp3' },
  { id: 3, titulo: 'Ondas Doradas 432 Hz', subtitulo: 'Armonía Universal • Sanación', img: '🌊', audio: '/audios/ondas-doradas-432hz.mp3' },
  { id: 4, titulo: 'Milagro Binaural 528 Hz', subtitulo: 'Reparación de ADN • Sanación Profunda', img: '🧬', audio: '/audios/milagro-528hz.mp3' },
  { id: 5, titulo: 'Riquezas Meditativas', subtitulo: 'Flujo de Riqueza • 888 Hz', img: '💎', audio: '/audios/riquezas-meditativas.mp3' },
  { id: 6, titulo: 'Piano de la Vibración del Dinero', subtitulo: 'Teclas Suaves • Prosperidad', img: '🎹', audio: '/audios/piano-vibracion.mp3' },
  { id: 7, titulo: 'Imán de Dinero', subtitulo: 'Ley de Atracción • Enfoque', img: '🧲', audio: '/audios/iman-dinero.mp3' },
  { id: 8, titulo: 'Energía Tranquila', subtitulo: 'Paz Pura • Equilibrio', img: '🕊️', audio: '/audios/energia-tranquila.mp3' },
  { id: 9, titulo: 'Atracción de Riqueza', subtitulo: 'Poder de Manifestación • Enfoque', img: '✨', audio: '/audios/atraccion-riqueza.mp3' },
]

export default function MusicaPage() {
  const router = useRouter()
  const [playing, setPlaying] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  function togglePlay(musica) {
    if (currentTrack?.id === musica.id && playing) {
      audioRef.current?.pause()
      setPlaying(false)
    } else {
      setCurrentTrack(musica)
      setPlaying(true)
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.src = musica.audio
          audioRef.current.play().catch(() => {})
        }
      }, 100)
    }
  }

  return (
    <div className="page-content" style={{ background: 'var(--cream)' }}>
      <div style={{ padding: '20px 16px 0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Música
        </h1>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
          Frecuencias de sanación y melodías divinas
        </p>
        <span style={{
          display: 'inline-block', background: '#FFF3CD', color: '#7A5800',
          fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px',
          letterSpacing: '0.05em', marginBottom: '20px',
        }}>
          DÍA 1 DE TU JORNADA
        </span>
      </div>

      {/* Player fixo quando tocando */}
      {currentTrack && (
        <div style={{
          position: 'fixed', bottom: '70px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)', maxWidth: '448px',
          background: 'linear-gradient(135deg, #0f0c24, #1a1035)',
          borderRadius: '16px', padding: '12px 16px',
          zIndex: 90, boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ fontSize: '28px' }}>{currentTrack.img}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>{currentTrack.titulo}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontFamily: 'Lato, sans-serif' }}>{currentTrack.subtitulo}</div>
            </div>
            <button onClick={() => { audioRef.current?.pause(); setPlaying(false); setCurrentTrack(null) }} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '18px', cursor: 'pointer',
            }}>✕</button>
          </div>
          <audio ref={audioRef} controls style={{ width: '100%', height: '36px', accentColor: '#C9A84C' }}
            onEnded={() => setPlaying(false)} />
        </div>
      )}

      <div style={{ padding: '0 16px' }}>
        {musicas.map((m) => {
          const isActive = currentTrack?.id === m.id
          return (
            <div key={m.id} onClick={() => togglePlay(m)} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: isActive ? 'linear-gradient(135deg, #1a1035, #2d1b4e)' : 'white',
              borderRadius: '16px', padding: '12px 16px',
              marginBottom: '10px', cursor: 'pointer',
              boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
              transition: 'all 0.3s',
              border: isActive ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent',
            }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))'
                  : 'linear-gradient(135deg, #f3f0e8, #e8e0d0)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', flexShrink: 0,
              }}>{m.img}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
                  color: isActive ? 'white' : '#111',
                }}>{m.titulo}</div>
                <div style={{
                  fontSize: '12px', fontFamily: 'Lato, sans-serif',
                  color: isActive ? 'rgba(255,255,255,0.5)' : '#999',
                }}>{m.subtitulo}</div>
              </div>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: isActive && playing ? '#C9A84C' : 'rgba(201,168,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', flexShrink: 0,
              }}>
                {isActive && playing ? '⏸' : '▶'}
              </div>
            </div>
          )
        })}
      </div>

      <BottomNav />
    </div>
  )
}
