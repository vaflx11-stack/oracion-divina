'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const pasos = [
  {
    numero: '01',
    icono: '🌙',
    titulo: 'El Momento Sagrado',
    descripcion: 'Realiza este ritual al anochecer, preferiblemente entre las 20h y las 22h. Es el momento en que el velo entre lo visible y lo invisible se adelgaza y los ángeles están más cerca.',
  },
  {
    numero: '02',
    icono: '🕯️',
    titulo: 'Prepara el Ambiente',
    descripcion: 'Apaga las luces artificiales. Enciende una vela blanca y colócala en el centro de la habitación. Abre una ventana por algunos minutos para que el aire antiguo salga y el nuevo entre. Puedes quemar un poco de incienso de sándalo o mirra.',
  },
  {
    numero: '03',
    icono: '🥛',
    titulo: 'El Vaso Sagrado',
    descripcion: 'Llena un vaso de vidrio transparente con agua filtrada o mineral. El vidrio permite que la luz atraviese el agua — esto es importante. Coloca el vaso en la palma de tus manos y mantente de pie, de cara a la ventana o a la vela.',
  },
  {
    numero: '04',
    icono: '✋',
    titulo: 'La Imposición de Manos',
    descripcion: 'Con el vaso entre tus manos, cierra los ojos. Respira profundo tres veces. Imagina una luz dorada descendiendo del cielo y entrando por tu coronilla, pasando por tus brazos y llegando al agua. Siente el calor en tus palmas.',
  },
  {
    numero: '05',
    icono: '📜',
    titulo: 'La Oración de los Tres',
    descripcion: 'Con los ojos cerrados y el vaso en manos, recita la oración sagrada de los tres Arcángeles. Hazlo en voz alta — las palabras pronunciadas tienen más poder que las pensadas.',
  },
  {
    numero: '06',
    icono: '🏠',
    titulo: 'La Purificación del Hogar',
    descripcion: 'Con el agua ya bendecida, camina por cada habitación de tu casa. En cada puerta, moja los dedos y haz una pequeña cruz. En cada esquina, deposita una gota. Empieza por la entrada principal y termina en el dormitorio.',
  },
  {
    numero: '07',
    icono: '💧',
    titulo: 'El Vaso Guardián',
    descripcion: 'Con el agua restante, llena un vaso nuevo y colócalo en el centro de tu hogar — puede ser en la sala, sobre la mesa o en un lugar elevado. Deja el vaso allí por 7 días. Él absorberá las energías negativas. Al octavo día, tírala fuera de la casa.',
  },
]

export default function AguaSagradaPage() {
  const router = useRouter()
  const [pasoActivo, setPasoActivo] = useState(null)
  const [oracionVisible, setOracionVisible] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* Header com imagem */}
      <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img src="/images/agua-sagrada.jpg" alt="Agua Sagrada"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => { e.target.style.display = 'none' }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(10,15,30,0.97) 100%)',
        }} />

        {/* Partículas decorativas */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {['✦', '·', '✦', '·', '✦'].map((s, i) => (
            <span key={i} style={{
              position: 'absolute',
              color: '#C9A84C',
              fontSize: i % 2 === 0 ? '12px' : '6px',
              opacity: 0.4,
              top: `${15 + i * 12}%`,
              left: `${10 + i * 18}%`,
            }}>{s}</span>
          ))}
        </div>

        <button onClick={() => router.back()} style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(255,255,255,0.15)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          color: 'white', fontSize: '18px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }}>←</button>

        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, zIndex: 5 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '20px', padding: '4px 12px', marginBottom: '10px',
          }}>
            <span style={{ fontSize: '10px' }}>💧</span>
            <span style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
              RITUAL SAGRADO
            </span>
          </div>
          <h1 style={{
            color: 'white', fontSize: '26px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', lineHeight: 1.2, marginBottom: '8px',
          }}>
            El Agua Sagrada de los Tres Arcángeles
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.5 }}>
            El antiguo ritual de los monjes para limpiar el hogar, alejar el mal y preparar el ambiente para el milagro.
          </p>
        </div>
      </div>

      <div style={{ padding: '24px 20px' }}>

        {/* Intro */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '20px', padding: '20px',
          marginBottom: '28px',
        }}>
          <div style={{ color: '#C9A84C', fontSize: '20px', textAlign: 'center', marginBottom: '12px' }}>✦</div>
          <p style={{
            color: 'rgba(255,255,255,0.8)', fontSize: '14px',
            lineHeight: 1.9, fontFamily: 'Georgia, serif',
            fontStyle: 'italic', textAlign: 'center',
          }}>
            "En los monasterios medievales, los monjes sabían que el agua no es solo H₂O. Es un receptor espiritual — capaz de absorber oraciones, intenciones y la energía de los ángeles. Este ritual fue transmitido de generación en generación durante siglos."
          </p>
        </div>

        {/* Por qué funciona */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          ¿Por qué el Agua Sagrada?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
          {[
            { icono: '🛡️', texto: 'Protege el hogar de energías negativas' },
            { icono: '✨', texto: 'Abre el camino para los milagros' },
            { icono: '🕊️', texto: 'Invita la presencia angélica' },
            { icono: '💫', texto: 'Limpia traumas y memorias del ambiente' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px', padding: '14px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '8px', textAlign: 'center',
            }}>
              <span style={{ fontSize: '24px' }}>{item.icono}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontFamily: 'Lato, sans-serif', lineHeight: 1.4 }}>
                {item.texto}
              </span>
            </div>
          ))}
        </div>

        {/* Lo que necesitas */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          Lo que Necesitas
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '20px',
          marginBottom: '28px',
        }}>
          {[
            { icono: '💧', item: 'Un vaso de vidrio transparente con agua filtrada' },
            { icono: '🕯️', item: 'Una vela blanca' },
            { icono: '🪟', item: 'Una ventana que puedas abrir' },
            { icono: '🤲', item: 'Fe y apertura de corazón' },
            { icono: '🌙', item: 'El momento: anochecer' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              paddingBottom: i < 4 ? '12px' : '0',
              borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              marginBottom: i < 4 ? '12px' : '0',
            }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icono}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
                {item.item}
              </span>
            </div>
          ))}
        </div>

        {/* Passos */}
        <h2 style={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '16px' }}>
          El Ritual — Paso a Paso
        </h2>

        {pasos.map((paso, i) => (
          <div key={i} onClick={() => setPasoActivo(pasoActivo === i ? null : i)} style={{
            background: pasoActivo === i ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
            border: `1px solid ${pasoActivo === i ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.07)'}`,
            borderRadius: '16px', padding: '16px',
            marginBottom: '10px', cursor: 'pointer',
            transition: 'all 0.3s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: pasoActivo === i ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', flexShrink: 0,
              }}>{paso.icono}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
                  PASO {paso.numero}
                </div>
                <div style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Cinzel, serif' }}>
                  {paso.titulo}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', transition: 'transform 0.3s', transform: pasoActivo === i ? 'rotate(180deg)' : 'none' }}>
                ▾
              </span>
            </div>
            {pasoActivo === i && (
              <p style={{
                color: 'rgba(255,255,255,0.75)', fontSize: '14px',
                lineHeight: 1.8, fontFamily: 'Lato, sans-serif',
                marginTop: '14px', paddingTop: '14px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                {paso.descripcion}
              </p>
            )}
          </div>
        ))}

        {/* Oração */}
        <div style={{ marginTop: '28px' }}>
          <button onClick={() => setOracionVisible(!oracionVisible)} style={{
            width: '100%', background: 'linear-gradient(135deg, #1a1035, #2d1b4e)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '16px', padding: '18px 20px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>📜</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#C9A84C', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
                  PASO 05
                </div>
                <div style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Cinzel, serif' }}>
                  La Oración de los Tres Arcángeles
                </div>
              </div>
            </div>
            <span style={{ color: '#C9A84C', fontSize: '18px', transition: 'transform 0.3s', transform: oracionVisible ? 'rotate(180deg)' : 'none' }}>▾</span>
          </button>

          {oracionVisible && (
            <div style={{
              background: 'linear-gradient(180deg, #0f0c24, #1a1035)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderTop: 'none',
              borderRadius: '0 0 16px 16px',
              padding: '24px 20px',
            }}>
              <div style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textAlign: 'center', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
                ✦ RECITA EN VOZ ALTA ✦
              </div>
              {[
                'Arcángel Miguel, guerrero de luz,\ncubre este hogar con tu escudo divino.\nCorta todo lazo con el mal,\ny sella esta casa con tu espada de fuego.',
                'Arcángel Rafael, médico del cielo,\ninfunde en esta agua tu poder sanador.\nQue cada gota lleve tu medicina divina\npara el cuerpo, el alma y el espíritu de los que aquí habitan.',
                'Arcángel Gabriel, mensajero de Dios,\ntrae a este hogar el anuncio de la gracia.\nQue donde había oscuridad, haya luz.\nQue donde había miedo, haya paz.\nQue donde había cierre, haya milagro.',
                'Por el poder de los Tres,\npor la voluntad del Altísimo,\nesta agua está consagrada.\nEste hogar está protegido.\nAsí sea. Así es. Así será.',
              ].map((paragrafo, i) => (
                <p key={i} style={{
                  color: i === 3 ? '#E8C97A' : 'rgba(255,255,255,0.85)',
                  fontSize: '15px', lineHeight: 2,
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic', textAlign: 'center',
                  marginBottom: i < 3 ? '20px' : '0',
                  fontWeight: i === 3 ? 600 : 400,
                  whiteSpace: 'pre-line',
                }}>
                  {paragrafo}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Dicas finais */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px', padding: '20px',
          marginTop: '24px', marginBottom: '24px',
        }}>
          <h3 style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif', marginBottom: '14px' }}>
            ✦ SEÑALES DE QUE EL RITUAL FUNCIONÓ
          </h3>
          {[
            'El agua en el vaso guardián se vuelve turbia — absorbió energías negativas',
            'Sensación de ligereza y paz en el ambiente',
            'Sueños más tranquilos y reparadores',
            'Relaciones en el hogar mejoran espontáneamente',
            'Oportunidades y sincronías comienzan a aparecer',
          ].map((señal, i) => (
            <div key={i} style={{
              display: 'flex', gap: '10px', alignItems: 'flex-start',
              marginBottom: i < 4 ? '10px' : '0',
            }}>
              <span style={{ color: '#C9A84C', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>✦</span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>
                {señal}
              </span>
            </div>
          ))}
        </div>

        {/* Frequência */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '16px', padding: '20px',
          textAlign: 'center', marginBottom: '24px',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔄</div>
          <h3 style={{ color: '#E8C97A', fontSize: '16px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
            ¿Con qué Frecuencia?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', fontFamily: 'Lato, sans-serif', lineHeight: 1.7 }}>
            Repite el ritual cada <strong style={{ color: '#C9A84C' }}>Luna Nueva</strong> para protección continua. En momentos de crisis o conflictos en el hogar, puedes hacerlo cada semana. El agua del vaso guardián siempre debe renovarse cada 7 días.
          </p>
        </div>

        <button className="btn-gold">
          💧 He realizado el ritual
        </button>

      </div>

      <BottomNav />
    </div>
  )
}
