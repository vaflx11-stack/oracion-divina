'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'
import { dias, fases, pilares } from './data'

export default function ComunidadOracionPage() {
  const router = useRouter()
  const [diaAbierto, setDiaAbierto] = useState(null)
  const [completados, setCompletados] = useState({})

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')

    const guardado = localStorage.getItem('comunidad_oracion_completados')
    if (guardado) setCompletados(JSON.parse(guardado))
  }, [router])

  function marcarCompletado(numero) {
    const nuevo = { ...completados, [numero]: !completados[numero] }
    setCompletados(nuevo)
    localStorage.setItem('comunidad_oracion_completados', JSON.stringify(nuevo))
  }

  const totalCompletados = Object.values(completados).filter(Boolean).length

  return (
    <div style={{ minHeight: '100vh', background: '#0f0c24', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: '32px 24px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🗡️</div>
        <div style={{
          fontSize: '11px', color: '#D4AF6A', fontWeight: 700, letterSpacing: '0.14em',
          marginBottom: '8px', fontFamily: 'Lato, sans-serif',
        }}>
          TU CONTENIDO EXCLUSIVO
        </div>
        <h1 style={{ color: 'white', fontSize: '21px', fontWeight: 700, fontFamily: 'Lato, sans-serif', lineHeight: 1.3 }}>
          Comunidad Internacional de Oración
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px',
          fontFamily: 'Lato, sans-serif', maxWidth: '300px', margin: '8px auto 0',
        }}>
          21 Días con San Miguel Arcángel
        </p>
      </div>

      {/* Progreso */}
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px', padding: '16px 20px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: 'Lato, sans-serif' }}>
              Tu progreso
            </span>
            <span style={{ color: '#D4AF6A', fontSize: '12px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
              {totalCompletados} / 21 días
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{
              width: `${(totalCompletados / 21) * 100}%`, height: '100%',
              background: 'linear-gradient(90deg, #D4AF6A, #B8934F)', borderRadius: '10px',
            }} />
          </div>
        </div>
      </div>

      {/* 4 Pilares */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.1em',
          marginBottom: '10px', fontFamily: 'Lato, sans-serif',
        }}>
          LOS 4 PILARES DE ESTA JORNADA
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {pilares.map((p, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px', padding: '14px',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{p.icono}</div>
              <div style={{ color: 'white', fontSize: '12px', fontWeight: 700, fontFamily: 'Lato, sans-serif', marginBottom: '4px' }}>
                {p.titulo}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', lineHeight: 1.4, fontFamily: 'Lato, sans-serif' }}>
                {p.texto}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fases y días */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {fases.map((fase) => (
          <div key={fase.id}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ color: '#D4AF6A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>
                {fase.rango.toUpperCase()}
              </div>
              <div style={{ color: 'white', fontSize: '17px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
                {fase.titulo}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {dias.filter((d) => d.fase === fase.id).map((dia) => {
                const abierto = diaAbierto === dia.numero
                const hecho = !!completados[dia.numero]
                return (
                  <div key={dia.numero} style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: hecho ? '1px solid rgba(212,175,106,0.4)' : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px', padding: '16px 18px',
                  }}>
                    <button
                      onClick={() => setDiaAbierto(abierto ? null : dia.numero)}
                      style={{
                        width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '12px', padding: 0, textAlign: 'left',
                      }}
                    >
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                        background: hecho ? 'linear-gradient(135deg, #D4AF6A, #B8934F)' : 'rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: hecho ? '#0f0c24' : 'rgba(255,255,255,0.6)',
                        fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif',
                      }}>
                        {hecho ? '✓' : dia.numero}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: 'Lato, sans-serif' }}>
                          Día {dia.numero}
                        </div>
                        <div style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
                          {dia.titulo}
                        </div>
                      </div>
                      <span style={{ color: '#D4AF6A', fontSize: '18px' }}>{abierto ? '−' : '+'}</span>
                    </button>

                    {abierto && (
                      <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Bloque etiqueta="GUÍA DEL DÍA" texto={dia.guia} />
                        <Bloque etiqueta="DECRETO SAGRADO" texto={dia.decreto} destacado />
                        <Bloque etiqueta="RITUAL DE CONEXIÓN" texto={dia.ritual} />

                        <button
                          onClick={() => marcarCompletado(dia.numero)}
                          style={{
                            marginTop: '4px', padding: '14px', borderRadius: '12px',
                            border: hecho ? '1px solid rgba(212,175,106,0.5)' : 'none',
                            background: hecho ? 'transparent' : 'linear-gradient(135deg, #D4AF6A, #B8934F)',
                            color: hecho ? '#D4AF6A' : '#0f0c24',
                            fontSize: '13px', fontWeight: 700, fontFamily: 'Lato, sans-serif', cursor: 'pointer',
                          }}
                        >
                          {hecho ? '✓ Día orado' : 'Marcar como orado hoy'}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

function Bloque({ etiqueta, texto, destacado }) {
  return (
    <div style={destacado ? {
      background: 'rgba(212,175,106,0.08)', border: '1px solid rgba(212,175,106,0.25)',
      borderRadius: '12px', padding: '14px 16px',
    } : {}}>
      <div style={{ color: '#D4AF6A', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '6px', fontFamily: 'Lato, sans-serif' }}>
        {etiqueta}
      </div>
      <p style={{
        color: destacado ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
        fontSize: '13px', lineHeight: 1.7, fontFamily: destacado ? 'Georgia, serif' : 'Lato, sans-serif',
        fontStyle: destacado ? 'italic' : 'normal', margin: 0,
      }}>
        {texto}
      </p>
    </div>
  )
}
