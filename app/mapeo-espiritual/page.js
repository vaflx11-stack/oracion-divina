'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import BottomNav from '../../../components/BottomNav'
import { calcularMapeo } from '../data'
import { rituales } from '../rituales'

const COLOR_INTENSIDAD = {
  Leve: '#6FBF73',
  Moderado: '#D4AF6A',
  Alto: '#E08C3E',
  Crítico: '#D2483A',
}

export default function ResultadoMapeo() {
  const router = useRouter()
  const [mapeo, setMapeo] = useState(null)

  useEffect(() => {
    const guardado = localStorage.getItem('mapeo_respuestas')
    if (!guardado) {
      router.push('/mapeo-espiritual')
      return
    }
    const respuestas = JSON.parse(guardado)
    setMapeo(calcularMapeo(respuestas))
  }, [router])

  if (!mapeo) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0f0c24',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Lato, sans-serif' }}>
          Cargando tu mapeo...
        </span>
      </div>
    )
  }

  const colorIntensidad = COLOR_INTENSIDAD[mapeo.intensidad]

  return (
    <div style={{ minHeight: '100vh', background: '#0f0c24', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: '32px 24px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>🗺️</div>
        <div style={{
          fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.14em',
          marginBottom: '8px', fontFamily: 'Lato, sans-serif',
        }}>
          TU MAPEO ESPIRITUAL
        </div>
        <h1 style={{
          color: 'white', fontSize: '22px', fontWeight: 700,
          fontFamily: 'Lato, sans-serif',
        }}>
          Resultado Personal
        </h1>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Bloqueos detectados */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '18px', padding: '24px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
            Bloqueos espirituales detectados
          </div>
          <div style={{ fontSize: '44px', fontWeight: 700, color: '#D4AF6A', fontFamily: 'Lato, sans-serif' }}>
            {mapeo.bloqueosDetectados}
            <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.3)' }}> / {mapeo.totalPreguntas}</span>
          </div>
        </div>

        {/* Intensidad */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', border: `1px solid ${colorIntensidad}55`,
          borderRadius: '18px', padding: '20px',
        }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px', fontFamily: 'Lato, sans-serif' }}>
            Intensidad general de tus bloqueos
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontSize: '20px', fontWeight: 700, color: colorIntensidad, fontFamily: 'Lato, sans-serif',
            }}>
              {mapeo.intensidad}
            </span>
            <div style={{
              flex: 1, height: '8px', background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px', overflow: 'hidden',
            }}>
              <div style={{
                width: `${mapeo.porcentaje}%`, height: '100%',
                background: colorIntensidad, borderRadius: '10px',
              }} />
            </div>
          </div>
        </div>

        {/* Área más afectada */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '18px', padding: '20px',
        }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
            Área de tu vida más estancada
          </div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'white', fontFamily: 'Lato, sans-serif' }}>
            {mapeo.areaMasAfectadaLabel}
          </div>
        </div>

        {/* Trabajo espiritual / Maldición / Puertas */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '18px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          <IndicadorLinea
            titulo="Trabajo espiritual en tu contra"
            detectado={mapeo.trabajoEspiritual}
          />
          <IndicadorLinea
            titulo="Maldición hereditaria familiar"
            detectado={mapeo.maldicionHereditaria}
          />
          <IndicadorLinea
            titulo="Puertas espirituales abiertas en tu entorno"
            detectado={mapeo.puertasAbiertas}
          />
        </div>

        {/* Bloqueo prioritario */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212,175,106,0.15), rgba(212,175,106,0.05))',
          border: '1px solid rgba(212,175,106,0.4)',
          borderRadius: '18px', padding: '24px',
        }}>
          <div style={{
            fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.1em',
            marginBottom: '10px', fontFamily: 'Lato, sans-serif',
          }}>
            DEBES DESTRUIR ESTO PRIMERO
          </div>
          <div style={{ fontSize: '17px', fontWeight: 700, color: 'white', lineHeight: 1.4, fontFamily: 'Lato, sans-serif' }}>
            {mapeo.bloqueoPrioritarioLabel}
          </div>
          <p style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '10px',
            lineHeight: 1.6, fontFamily: 'Lato, sans-serif',
          }}>
            Este es el bloqueo con mayor peso en tu mapeo. Abajo tienes la oración y el
            ritual específico para romperlo — es la puerta más cercana a tu victoria.
          </p>
        </div>

        {/* Ritual del bloqueo prioritario, siempre abierto */}
        <div>
          <div style={{
            fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.1em',
            marginBottom: '10px', marginTop: '4px', fontFamily: 'Lato, sans-serif',
          }}>
            TU RITUAL DE LIBERACIÓN
          </div>
          <RitualCompleto ritual={rituales[mapeo.bloqueoPrioritario]} destacado />
        </div>

        {/* Rituales para los otros bloqueos detectados */}
        <RitualesSecundarios mapeo={mapeo} />

        {/* CTA para reforzar con la oración diaria */}
        <Link href="/home" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%', marginTop: '8px', padding: '18px',
            background: 'linear-gradient(135deg, #D4AF6A, #B8934F)',
            border: 'none', borderRadius: '14px', color: '#0f0c24',
            fontSize: '15px', fontWeight: 700, fontFamily: 'Lato, sans-serif', cursor: 'pointer',
          }}>
            Ir a mi Oración Diaria
          </button>
        </Link>
      </div>

      <BottomNav />
    </div>
  )
}

function RitualesSecundarios({ mapeo }) {
  const [abierto, setAbierto] = useState(null)

  const detectados = []
  if (mapeo.trabajoEspiritual && mapeo.bloqueoPrioritario !== 'trabajo') detectados.push('trabajo')
  if (mapeo.maldicionHereditaria && mapeo.bloqueoPrioritario !== 'maldicion') detectados.push('maldicion')
  if (mapeo.puertasAbiertas && mapeo.bloqueoPrioritario !== 'puertas') detectados.push('puertas')

  if (detectados.length === 0) return null

  return (
    <div>
      <div style={{
        fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.1em',
        marginBottom: '10px', fontFamily: 'Lato, sans-serif',
      }}>
        OTROS BLOQUEOS DETECTADOS EN TI
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {detectados.map((cat) => {
          const ritual = rituales[cat]
          const abiertoAqui = abierto === cat
          return (
            <div key={cat} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', padding: '18px',
            }}>
              <button
                onClick={() => setAbierto(abiertoAqui ? null : cat)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: 0, textAlign: 'left',
                }}
              >
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
                  {ritual.titulo}
                </span>
                <span style={{ color: '#D4AF6A', fontSize: '18px' }}>{abiertoAqui ? '−' : '+'}</span>
              </button>
              {abiertoAqui && (
                <div style={{ marginTop: '16px' }}>
                  <RitualCompleto ritual={ritual} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RitualCompleto({ ritual, destacado }) {
  return (
    <div style={{
      background: destacado ? 'linear-gradient(135deg, rgba(212,175,106,0.12), rgba(212,175,106,0.03))' : 'transparent',
      border: destacado ? '1px solid rgba(212,175,106,0.35)' : 'none',
      borderRadius: '18px', padding: destacado ? '22px' : 0,
    }}>
      <h3 style={{ color: 'white', fontSize: '17px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
        {ritual.titulo}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '16px' }}>
        {ritual.subtitulo}
      </p>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ color: '#D4AF6A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
          NECESITAS
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px' }}>
          {ritual.necesitas.map((item, i) => (
            <li key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ color: '#D4AF6A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'Lato, sans-serif' }}>
          PASOS DEL RITUAL
        </div>
        <ol style={{ margin: 0, paddingLeft: '18px' }}>
          {ritual.pasos.map((paso, i) => (
            <li key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '8px', lineHeight: 1.5 }}>
              {paso}
            </li>
          ))}
        </ol>
      </div>

      <div style={{
        background: 'rgba(0,0,0,0.25)', borderRadius: '14px', padding: '18px', marginBottom: '12px',
      }}>
        <div style={{ color: '#D4AF6A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '10px', fontFamily: 'Lato, sans-serif' }}>
          LA ORACIÓN
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.8,
          fontFamily: 'Lato, sans-serif', whiteSpace: 'pre-line', fontStyle: 'italic',
        }}>
          {ritual.oracion}
        </p>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
        🕯️ {ritual.repetir}
      </p>
    </div>
  )
}

function IndicadorLinea({ titulo, detectado }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: 'Lato, sans-serif', maxWidth: '220px' }}>
        {titulo}
      </span>
      <span style={{
        fontSize: '12px', fontWeight: 700, padding: '6px 12px', borderRadius: '20px',
        fontFamily: 'Lato, sans-serif',
        background: detectado ? 'rgba(210,72,58,0.15)' : 'rgba(111,191,115,0.15)',
        color: detectado ? '#D2483A' : '#6FBF73',
      }}>
        {detectado ? 'Detectado' : 'No detectado'}
      </span>
    </div>
  )
}
