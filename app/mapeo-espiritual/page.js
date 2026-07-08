'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { preguntasMapeo } from './data'

export default function MapeoEspiritual() {
  const router = useRouter()
  const [iniciado, setIniciado] = useState(false)
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState({})

  const pregunta = preguntasMapeo[paso]
  const progreso = Math.round((paso / preguntasMapeo.length) * 100)

  function responder(puntos) {
    const nuevasRespuestas = { ...respuestas, [pregunta.id]: puntos }
    setRespuestas(nuevasRespuestas)

    if (paso + 1 < preguntasMapeo.length) {
      setTimeout(() => setPaso(paso + 1), 150)
    } else {
      localStorage.setItem('mapeo_respuestas', JSON.stringify(nuevasRespuestas))
      router.push('/mapeo-espiritual/resultado')
    }
  }

  if (!iniciado) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0f0c24',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '32px 24px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🕯️</div>
        <div style={{
          fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.14em',
          marginBottom: '12px', fontFamily: 'Lato, sans-serif',
        }}>
          TU CONTENIDO EXCLUSIVO
        </div>
        <h1 style={{
          color: 'white', fontSize: '26px', fontWeight: 700, lineHeight: 1.3,
          marginBottom: '16px', fontFamily: 'Lato, sans-serif', maxWidth: '320px',
        }}>
          Mapeo Espiritual Personal
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.6,
          maxWidth: '320px', marginBottom: '32px', fontFamily: 'Lato, sans-serif',
        }}>
          23 preguntas que van a revelar tus bloqueos espirituales, su intensidad,
          el área de tu vida más afectada y cuál debes destruir primero.
          Respóndelas con honestidad — nadie más verá tus respuestas.
        </p>
        <button
          onClick={() => setIniciado(true)}
          style={{
            background: 'linear-gradient(135deg, #D4AF6A, #B8934F)',
            color: '#0f0c24', border: 'none', borderRadius: '14px',
            padding: '16px 40px', fontSize: '15px', fontWeight: 700,
            fontFamily: 'Lato, sans-serif', cursor: 'pointer',
          }}
        >
          Comenzar mi Mapeo
        </button>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#0f0c24',
      display: 'flex', flexDirection: 'column',
      padding: '24px 20px 40px',
    }}>
      {/* Barra de progreso */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginBottom: '8px',
          fontFamily: 'Lato, sans-serif',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
            Pregunta {paso + 1} de {preguntasMapeo.length}
          </span>
          <span style={{ color: '#D4AF6A', fontSize: '12px', fontWeight: 700 }}>
            {progreso}%
          </span>
        </div>
        <div style={{
          width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)',
          borderRadius: '10px', overflow: 'hidden',
        }}>
          <div style={{
            width: `${progreso}%`, height: '100%',
            background: 'linear-gradient(90deg, #D4AF6A, #B8934F)',
            borderRadius: '10px', transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Pregunta */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <h2 style={{
          color: 'white', fontSize: '20px', fontWeight: 700, lineHeight: 1.4,
          marginBottom: '32px', fontFamily: 'Lato, sans-serif',
        }}>
          {pregunta.texto}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pregunta.opciones.map((op, i) => (
            <button
              key={i}
              onClick={() => responder(op.puntos)}
              style={{
                width: '100%', textAlign: 'left', padding: '18px 20px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px', color: 'white', fontSize: '15px',
                fontFamily: 'Lato, sans-serif', cursor: 'pointer',
              }}
            >
              {op.texto}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
