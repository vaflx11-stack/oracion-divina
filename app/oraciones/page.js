'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const oracionesDiarias = [
  { id: 1, titulo: 'Oración de la Mañana', subtitulo: 'Comienza tu día con la gracia de Dios.', img: '🌅', texto: 'Señor Dios todopoderoso, que has llegado al comienzo de este día, sálvanos hoy por tu poder. Que en este día no caigamos en ningún pecado, sino que todas nuestras palabras vayan dirigidas a tu voluntad. Amén.' },
  { id: 2, titulo: 'Oración de Protección', subtitulo: 'Protege a ti y a tus seres queridos.', img: '🛡️', texto: 'Señor, extiende Tu manto protector sobre mí y sobre todos los que amo. Que tus ángeles nos rodeen y nos defiendan de todo mal. En Tu nombre, nada podrá hacernos daño. Amén.' },
  { id: 3, titulo: 'Oración de Gratitud', subtitulo: 'Agradece Sus muchas bendiciones.', img: '🙏', texto: 'Gracias, Señor, por el regalo de este día. Gracias por la vida, la salud, la familia y cada bendición que recibes de Tu mano generosa. Mi corazón se llena de gratitud por Tu amor infinito. Amén.' },
]

const intenciones = [
  { id: 4, titulo: 'Oración por Sanación', subtitulo: 'Restauración divina para cuerpo y alma.', img: '💊', texto: 'Señor Jesús, tú que sanaste a los enfermos, te pido que pongas Tu mano sanadora sobre mí (o sobre [nombre]). Restaura la salud, devuelve las fuerzas y que Tu voluntad se haga en este cuerpo y en esta alma. Amén.' },
  { id: 5, titulo: 'Oración por Prosperidad', subtitulo: 'Abriendo puertas a la abundancia.', img: '✨', texto: 'Padre celestial, tú eres la fuente de toda bendición. Abre las puertas de la prosperidad en mi vida. Dame sabiduría para administrar los bienes que me confías y que todo lo que haga esté guiado por Tu gracia. Amén.' },
  { id: 6, titulo: 'Oración por Sanación Física', subtitulo: 'Restauración de salud física.', img: '🌿', texto: 'Señor, eres el médico de mi cuerpo. Te pido que toques cada célula, cada órgano y cada sistema de mi ser. Que Tu poder sanador fluya a través de mí y me restaure completamente. Amén.' },
  { id: 7, titulo: 'Oración por Sanación Interior', subtitulo: 'Paz para el corazón perturbado.', img: '💜', texto: 'Jesús, sana las heridas de mi corazón. Los recuerdos dolorosos, las tristezas y los miedos, entrégalos todos a Ti. Que Tu paz que sobrepasa todo entendimiento guarde mi corazón y mi mente. Amén.' },
  { id: 8, titulo: 'Oración por Prosperidad Financiera', subtitulo: 'Bendición en las finanzas.', img: '💰', texto: 'Padre, confío en Tu provisión. Abre ventanas del cielo y derrama bendición sobre mis finanzas. Dame trabajo, creatividad y oportunidades para prosperar y bendecir a otros. Amén.' },
  { id: 9, titulo: 'Oración por Restauración Familiar', subtitulo: 'Unión y amor en el hogar.', img: '👨‍👩‍👧', texto: 'Señor, protege mi familia. Une nuestros corazones con lazos de amor, perdón y comprensión. Que el Espíritu Santo habite en nuestro hogar y que Tu paz reine en cada rincón. Amén.' },
  { id: 10, titulo: 'Oración por los Hijos', subtitulo: 'Protección y guía para ellos.', img: '👶', texto: 'Padre, en Tus manos entrego a mis hijos. Protégelos de todo mal, guía sus pasos y que Tu mano esté siempre sobre ellos. Que crezcan conociendo Tu amor y siguiendo Tus caminos. Amén.' },
  { id: 11, titulo: 'Protección Espiritual del Hogar', subtitulo: 'Guardando tu morada.', img: '🏠', texto: 'Señor, consagro este hogar a Ti. Que sea un templo de paz, amor y oración. Aleja de aquí todo espíritu de división, miedo y maldad. Que Tus ángeles custodien cada puerta y ventana. Amén.' },
  { id: 12, titulo: 'Liberación de Vicios', subtitulo: 'Quebrando todas las cadenas.', img: '⛓️', texto: 'Señor, en Tu nombre quebranto toda atadura y vicio que me tiene prisionero. Por Tu sangre preciosa soy libre. Dame fuerza, voluntad y la gracia de vivir en libertad plena. Amén.' },
  { id: 13, titulo: 'Orientación en Decisiones', subtitulo: 'Sabiduría para el camino.', img: '🧭', texto: 'Padre, necesito Tu sabiduría. Ante las decisiones importantes de mi vida, ilumina mi mente, guía mi corazón y que Tu voluntad sea siempre la que prevalezca. Amén.' },
  { id: 14, titulo: 'Contra la Ansiedad y el Miedo', subtitulo: 'Encontrando paz en la tormenta.', img: '🌊', texto: 'Señor, calma la tormenta en mi interior. El miedo y la ansiedad no tienen poder sobre mí porque Tú estás conmigo. "No temas, que yo estoy contigo" - que estas palabras sean mi refugio hoy. Amén.' },
  { id: 15, titulo: 'Gratitud y Reconocimiento', subtitulo: 'Agradeciendo a Dios por Sus dones.', img: '🌸', texto: 'Gracias, Señor, por cada regalo que me has dado. Abro mis ojos para ver Tus bendiciones en lo ordinario, en lo pequeño y en lo cotidiano. Que la gratitud sea siempre mi actitud. Amén.' },
]

export default function OracionesPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  if (selected) {
    return (
      <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
        {/* Header da oração */}
        <div style={{
          background: 'linear-gradient(180deg, #0f0c24, #1a1035)',
          padding: '50px 20px 40px',
          position: 'relative',
        }}>
          <button onClick={() => setSelected(null)} style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
          }}>←</button>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{selected.img}</div>
            <div style={{ fontSize: '9px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '8px' }}>
              {selected.id <= 3 ? 'DAILY' : 'INTENCIÓN'}
            </div>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
              {selected.titulo}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
              {selected.subtitulo}
            </p>
          </div>
        </div>

        {/* Texto da oração */}
        <div style={{ padding: '28px 20px 100px' }}>
          <div style={{
            background: 'white', borderRadius: '20px',
            padding: '28px 24px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            marginBottom: '20px',
          }}>
            <div style={{ color: '#C9A84C', fontSize: '32px', marginBottom: '12px', fontFamily: 'Cinzel, serif' }}>"</div>
            <p style={{
              fontSize: '17px', lineHeight: 1.8, color: '#222',
              fontFamily: 'Georgia, serif', fontStyle: 'italic',
            }}>
              {selected.texto}
            </p>
          </div>

          {/* Se tiver PDF */}
          {selected.pdf && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#555', marginBottom: '10px' }}>📄 Documento PDF</h4>
              <a href={selected.pdf} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
                display: 'block', textAlign: 'center', textDecoration: 'none', padding: '14px',
              }}>
                Abrir PDF
              </a>
            </div>
          )}

          {/* Se tiver áudio */}
          {selected.audio && (
            <div style={{
              background: 'white', borderRadius: '16px', padding: '16px',
              boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
            }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#555', marginBottom: '10px' }}>🎵 Áudio da Oração</h4>
              <audio controls src={selected.audio} />
            </div>
          )}

          <button className="btn-gold" style={{ marginTop: '20px' }}>
            🙏 Amén — He orado esto
          </button>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="page-content" style={{ background: 'var(--cream)' }}>
      <div style={{ padding: '20px 16px 0' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#111', fontFamily: 'Lato, sans-serif', marginBottom: '0' }}>
          Oraciones
        </h1>
      </div>

      {/* Destaque — Oração da Manhã */}
      <div style={{ padding: '16px' }}>
        <div onClick={() => setSelected(oracionesDiarias[0])} style={{
          background: 'linear-gradient(135deg, #1a1035, #2d1b4e)',
          borderRadius: '20px', padding: '20px',
          position: 'relative', overflow: 'hidden', cursor: 'pointer',
          minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)', borderRadius: '50%',
              width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px',
            }}>▶</div>
            <span className="badge badge-recommended">DIARIAS</span>
          </div>
          <div style={{ position: 'absolute', top: 10, right: 16, fontSize: '50px', opacity: 0.3 }}>🌅</div>
          <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '4px' }}>
            Oración de la Mañana
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontFamily: 'Lato, sans-serif' }}>
            Comienza tu día con la gracia de Dios.
          </p>
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {/* Orações Diárias */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '12px', fontFamily: 'Lato, sans-serif' }}>
          Oraciones Diarias
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {oracionesDiarias.slice(1).map((o) => (
            <div key={o.id} onClick={() => setSelected(o)} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              cursor: 'pointer', boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #C9A84C22, #C9A84C55)',
                height: '90px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px',
              }}>{o.img}</div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '8px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.1em' }}>DAILY</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif', lineHeight: 1.2 }}>{o.titulo}</div>
                <div style={{ fontSize: '11px', color: '#888', fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>{o.subtitulo}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Intenções Específicas */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '12px', fontFamily: 'Lato, sans-serif' }}>
          Intenciones Específicas
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {intenciones.map((o) => (
            <div key={o.id} onClick={() => setSelected(o)} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              cursor: 'pointer', boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #E8F4FD, #B3D9F0)',
                height: '90px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '42px',
              }}>{o.img}</div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '8px', color: '#0369a1', fontWeight: 700, letterSpacing: '0.1em' }}>INTENCIÓN</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif', lineHeight: 1.2 }}>{o.titulo}</div>
                <div style={{ fontSize: '11px', color: '#888', fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>{o.subtitulo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
