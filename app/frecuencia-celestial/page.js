'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const TABS = [
  { id: 'audio', label: '🎧 Audio' },
  { id: 'dormir', label: '🌙 Dormir' },
  { id: 'manuscrito', label: '📜 Manuscrito' },
  { id: 'guia', label: '⚡ Guía' },
]

export default function FrecuenciaCelestialPage() {
  const router = useRouter()
  const [tab, setTab] = useState('audio')

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0f0c24', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: '32px 24px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>✨</div>
        <div style={{
          fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.14em',
          marginBottom: '8px', fontFamily: 'Lato, sans-serif',
        }}>
          TU CONTENIDO EXCLUSIVO
        </div>
        <h1 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
          Frecuencia Celestial
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px',
          fontFamily: 'Lato, sans-serif', maxWidth: '300px', margin: '8px auto 0',
        }}>
          La frecuencia utilizada por monjes y líderes espirituales para protección, riqueza y éxito.
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: '8px', padding: '0 20px 20px',
        overflowX: 'auto',
      }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flexShrink: 0, padding: '10px 16px', borderRadius: '20px',
              border: tab === t.id ? '1px solid #D4AF6A' : '1px solid rgba(255,255,255,0.15)',
              background: tab === t.id ? 'rgba(212,175,106,0.15)' : 'transparent',
              color: tab === t.id ? '#D4AF6A' : 'rgba(255,255,255,0.6)',
              fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '0 20px' }}>
        {tab === 'audio' && (
          <ReproductorAudio
            titulo="Audio de la Frecuencia Celestial"
            subtitulo="Activación principal · Escucha con auriculares"
            descripcion="Escucha una vez al día, en un momento de calma, preferiblemente por la mañana o antes de comenzar tus actividades importantes. Cierra los ojos y permite que la frecuencia trabaje mientras respiras profundamente."
            src="/audios/frecuencia-celestial.mp3"
          />
        )}

        {tab === 'dormir' && (
          <ReproductorAudio
            titulo="Activación antes de dormir"
            subtitulo="Versión nocturna · Volumen bajo, sin auriculares"
            descripcion="Reproduce este audio mientras te preparas para dormir, dejándolo sonar de fondo. No necesitas concentrarte en él — la frecuencia actúa mientras tu mente descansa y se abre a la activación durante la noche."
            src="/audios/frecuencia-celestial-dormir.mp3"
          />
        )}

        {tab === 'manuscrito' && <ManuscritoSagrado />}
        {tab === 'guia' && <GuiaDeUso />}
      </div>

      <BottomNav />
    </div>
  )
}

function ReproductorAudio({ titulo, subtitulo, descripcion, src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

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

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(212,175,106,0.12), rgba(212,175,106,0.03))',
      border: '1px solid rgba(212,175,106,0.35)', borderRadius: '20px', padding: '24px',
    }}>
      <h3 style={{ color: 'white', fontSize: '17px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
        {titulo}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
        {subtitulo}
      </p>

      <button
        onClick={togglePlay}
        style={{
          width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #D4AF6A, #B8934F)', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: '28px', color: '#0f0c24' }}>{playing ? '❚❚' : '▶'}</span>
      </button>

      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />

      <p style={{
        color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6,
        fontFamily: 'Lato, sans-serif', textAlign: 'center',
      }}>
        {descripcion}
      </p>
    </div>
  )
}

function ManuscritoSagrado() {
  const parrafos = [
    'Cuenta la tradición que, hace siglos, monjes retirados en monasterios de montaña descubrieron que ciertos tonos y vibraciones podían alinear el cuerpo, la mente y el espíritu con un estado de protección y abundancia.',
    'Estos sonidos no se enseñaban abiertamente. Se transmitían solo a quienes demostraban paciencia, fe y disposición para recibir lo que el cielo tenía preparado.',
    'La Frecuencia Celestial que hoy tienes en tus manos desciende de esa misma tradición: un puente sonoro entre lo terrenal y lo divino, usado para disolver el miedo, atraer prosperidad y sellar la protección sobre quien la escucha con el corazón abierto.',
    'No es magia. Es armonía — la misma que gobierna el universo, ahora puesta a tu disposición.',
    'Que esta frecuencia te acompañe en cada paso, y que lo que actives hoy se multiplique en tu vida.',
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px', padding: '28px',
    }}>
      <div style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>📜</div>
      <h3 style={{
        color: '#D4AF6A', fontSize: '16px', fontWeight: 700, textAlign: 'center',
        fontFamily: 'Cinzel, serif', marginBottom: '20px',
      }}>
        Manuscrito Sagrado
      </h3>
      {parrafos.map((p, i) => (
        <p key={i} style={{
          color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.9,
          fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center',
          marginBottom: i < parrafos.length - 1 ? '18px' : 0,
        }}>
          {p}
        </p>
      ))}
    </div>
  )
}

function GuiaDeUso() {
  const pasos = [
    { titulo: 'Elige el momento correcto', texto: 'Usa el audio principal por la mañana o antes de una actividad importante. Usa la versión de dormir solo por la noche.' },
    { titulo: 'Auriculares para el audio principal', texto: 'Para la activación principal, usa auriculares y un lugar tranquilo. Para dormir, puedes dejarlo sonando de fondo sin auriculares.' },
    { titulo: 'Repite todos los días', texto: 'La frecuencia se acumula con el uso constante. Escúchala todos los días durante al menos 21 días para sentir el efecto completo.' },
    { titulo: 'Mantén una intención clara', texto: 'Antes de comenzar, piensa brevemente en lo que deseas proteger o atraer. La frecuencia trabaja mejor cuando tu intención está clara.' },
    { titulo: 'No la interrumpas', texto: 'Si es posible, deja que el audio termine por completo sin pausas ni interrupciones.' },
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px', padding: '24px',
    }}>
      <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '18px' }}>
        Guía Simple de Uso
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {pasos.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(212,175,106,0.15)', color: '#D4AF6A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
            }}>
              {i + 1}
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
                {p.titulo}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Lato, sans-serif' }}>
                {p.texto}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
