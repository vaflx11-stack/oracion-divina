'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import BottomNav from '../../components/BottomNav'

const oraciones = [
  { id: 1, titulo: 'Oración de la Mañana', subtitulo: 'Comienza tu día con la gracia de Dios.', badge: 'daily', img: '/images/oracion-manana.jpg', duracion: '3 min' },
  { id: 2, titulo: 'Oración de Protección', subtitulo: 'Protege a ti y a tus seres queridos.', badge: 'daily', img: '/images/oracion-proteccion.jpg', duracion: '3 min' },
  { id: 3, titulo: 'Oración de Gratitud', subtitulo: 'Agradece Sus muchas bendiciones.', badge: 'daily', img: '/images/oracion-gratitud.jpg', duracion: '3 min' },
]

const libros = [
  { id: 1, titulo: 'El Código de Lourdes', subtitulo: 'El Manuscrito Sagrado Perdido de las Apariciones. Descubre el lenguaje del cielo.', badge: 'MANUSCRITO SAGRADO', img: '/images/libro-lourdes.jpg', pdf: '/pdfs/codigo-lourdes.pdf' },
]

const citas = [
  { texto: '"Los puros de corazón son templos del Espíritu Santo."', autor: 'SANTA LUCÍA' },
  { texto: '"La oración es la respiración del alma."', autor: 'SAN AGUSTÍN' },
  { texto: '"Confía en el Señor con todo tu corazón."', autor: 'PROVERBIOS 3:5' },
]

export default function HomePage() {
  const router = useRouter()
  const [userName, setUserName] = useState('amigo')
  const [citaIdx, setCitaIdx] = useState(0)
  const [contador, setContador] = useState(3260240)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) { router.push('/login'); return }
    const name = user.split('@')[0]
    setUserName(name)
    // Simula contador crescendo
    const interval = setInterval(() => {
      setContador(c => c + Math.floor(Math.random() * 3))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="page-content" style={{ background: 'var(--cream)' }}>

      {/* Hero com anjo */}
      <div style={{
        background: 'linear-gradient(180deg, #0f0c24 0%, #1e1654 60%, var(--cream) 100%)',
        padding: '24px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Luz dourada */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
            Hola, {userName} 👋
          </h2>
          <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif' }}>🇪🇸 ES</span>
        </div>

        {/* Imagem do anjo */}
        <div style={{
          width: '220px', height: '260px', margin: '0 auto 16px',
          position: 'relative', overflow: 'hidden',
          borderRadius: '50% 50% 40% 40%',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 0 40px rgba(201,168,76,0.15)',
        }}>
          <img
            src="/images/angel-hero.jpg"
            alt="Ángel"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = 'linear-gradient(180deg, rgba(201,168,76,0.15) 0%, rgba(30,22,84,0.3) 100%)'
              e.target.parentElement.style.display = 'flex'
              e.target.parentElement.style.alignItems = 'center'
              e.target.parentElement.style.justifyContent = 'center'
              e.target.parentElement.style.fontSize = '100px'
              e.target.parentElement.innerHTML = '🕊️'
            }}
          />
        </div>

        {/* Tabs Favoritos / Recientes */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '16px' }}>
          {['Favoritos', 'Recientes'].map((tab, i) => (
            <div key={tab} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              color: i === 0 ? '#C9A84C' : 'rgba(255,255,255,0.4)',
              fontSize: '11px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Lato, sans-serif',
            }}>
              <span>{i === 0 ? '☆' : '🕐'}</span>
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>

        {/* Card "Habla con Jesús" */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1035bb, #2d1b4ebb), url(/images/habla-jesus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <span style={{
            background: '#22c55e', color: 'white', fontSize: '9px', fontWeight: 700,
            padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.08em',
          }}>NUEVO</span>
          <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 700, margin: '8px 0 6px', fontFamily: 'Cinzel, serif' }}>
            Habla con Jesús
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '16px', fontFamily: 'Lato, sans-serif' }}>
            Busca orientación, paz y habla directamente con Él.
          </p>
          <Link href="/chat-jesus" style={{ textDecoration: 'none' }}>
            <button className="btn-gold" style={{ width: 'auto', padding: '10px 20px', fontSize: '14px' }}>
              Iniciar Conversación →
            </button>
          </Link>
        </div>

        {/* Cita do dia */}
        <div style={{
          background: '#111827',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '16px',
          textAlign: 'center',
        }}>
          <div style={{ color: '#C9A84C', fontSize: '24px', marginBottom: '8px' }}>"</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
            {citas[citaIdx].autor}
          </p>
          <p style={{ color: 'white', fontSize: '16px', fontStyle: 'italic', lineHeight: 1.5, fontFamily: 'Cinzel, serif' }}>
            {citas[citaIdx].texto}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '14px' }}>
            {citas.map((_, i) => (
              <div key={i} onClick={() => setCitaIdx(i)} style={{
                width: i === citaIdx ? '20px' : '6px', height: '6px',
                borderRadius: '3px',
                background: i === citaIdx ? '#C9A84C' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer', transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>

        {/* Destaque de Livro */}
        <Link href="/manuscrito" style={{ textDecoration: 'none' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a1035cc, #0f0c24cc), url(/images/manuscrito-raphael.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '20px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '140px',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          cursor: 'pointer',
        }}>
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span className="badge badge-recommended">RECOMENDADO</span>
          </div>
          <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '60px', opacity: 0.3 }}>📜</div>
          <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px' }}>
            Descubre el Manuscrito del Arcángel Rafael
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
            Misterio y Curación Divina
          </p>
        </div>
        </Link>

        {/* Orações */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Oraciones
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          {oraciones.map((o) => (
            <Link key={o.id} href={`/oraciones`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'white', borderRadius: '14px', padding: '12px',
                boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #C9A84C22, #C9A84C44)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', flexShrink: 0,
                }}>🙏</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '2px' }}>DAILY</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif' }}>{o.titulo}</div>
                  <div style={{ fontSize: '12px', color: '#666', fontFamily: 'Lato, sans-serif' }}>{o.subtitulo}</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{o.duracion}</div>
                </div>
                <span style={{ color: '#ccc', fontSize: '20px' }}>⋯</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Livros */}
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '12px', color: '#111', fontFamily: 'Lato, sans-serif' }}>
          Libros
        </h3>
        {libros.map((l) => (
          <Link key={l.id} href="/codigo-lourdes" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1a1035cc, #2d1b4ecc), url(/images/codigo-lourdes.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px', padding: '20px', marginBottom: '20px',
              cursor: 'pointer',
            }}>
              <span style={{ background: '#C9A84C', color: 'white', fontSize: '9px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.08em' }}>
                {l.badge}
              </span>
              <h4 style={{ color: 'white', fontSize: '18px', fontWeight: 700, margin: '8px 0 6px', fontFamily: 'Cinzel, serif' }}>{l.titulo}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '14px', fontFamily: 'Lato, sans-serif' }}>{l.subtitulo}</p>
              <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>LEER AHORA →</span>
            </div>
          </Link>
        ))}

        {/* Compartir */}
        <div style={{
          background: 'white', borderRadius: '20px', padding: '20px',
          textAlign: 'center', marginBottom: '20px',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📿</div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
            Comparte Oración Divina con Amigos
          </h4>
          <p style={{ fontSize: '13px', color: '#666', fontFamily: 'Lato, sans-serif' }}>
            ¿Disfrutando? Comparte para ayudar a amigos y familiares a crecer en su vida de oración.
          </p>
        </div>

        {/* Contador */}
        <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#111', color: 'white', borderRadius: '20px',
            padding: '6px 16px', fontSize: '12px', marginBottom: '10px', fontFamily: 'Lato, sans-serif',
          }}>
            🙏 Dios es Amor fue orado
          </div>
          <div style={{ fontSize: '36px', fontWeight: 800, color: '#111', fontFamily: 'Lato, sans-serif' }}>
            {contador.toLocaleString('es-ES')}
          </div>
          <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
            ORACIONES HECHAS CON ORACIÓN DIVINA
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
