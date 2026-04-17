'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const items = [
  { id: 1, titulo: 'Sueño Tranquilo', subtitulo: 'Descansa en la presencia de Dios.', img: '🌙', texto: 'Señor, al cerrar mis ojos esta noche, me entrego completamente a Tus brazos. Que Tu paz me cubra como un manto suave. Que los ángeles cuiden mi sueño y que mañana despierte renovado en Tu amor. Amén.' },
  { id: 2, titulo: 'Protección Durante la Noche', subtitulo: 'Seguro en Sus brazos.', img: '🛡️', texto: 'Ángel de la guarda, mi dulce compañía, no me desampares ni de noche ni de día. Señor, que Tu presencia sea mi protección mientras duermo. Nada malo podrá tocarme. Amén.' },
  { id: 3, titulo: 'Dejando la Ansiedad', subtitulo: 'Libera tus preocupaciones.', img: '🌊', texto: 'Padre, deposito en Tus manos todas las preocupaciones de este día. Los problemas sin resolver, las deudas, los miedos — todo lo dejo a Tus pies. Tú tienes el control. Puedo dormir en paz. Amén.' },
  { id: 4, titulo: 'Sueño de Sanación', subtitulo: 'Descanso restaurador.', img: '💚', texto: 'Señor, mientras duermo, sana mi cuerpo, restaura mi mente y renueva mi espíritu. Que cada hora de sueño sea un tiempo de restauración divina. Que despierte sano, fuerte y lleno de Tu paz. Amén.' },
  { id: 5, titulo: 'Gratitud por el Día', subtitulo: 'Terminando con agradecimiento.', img: '🌸', texto: 'Gracias, Padre, por este día. Por los momentos de alegría y también por los desafíos. Gracias por Tu fidelidad, por Tu amor constante y por la oportunidad de un nuevo día mañana. Amén.' },
  { id: 6, titulo: 'Ángeles Visitantes', subtitulo: 'Compañía celestial.', img: '👼', texto: 'Señor, envía Tus ángeles a custodiar este hogar esta noche. Que su presencia santa llene cada rincón. Que sus alas nos protejan del miedo y sus voces nos traigan sueños de paz. Amén.' },
  { id: 7, titulo: 'Mente Tranquila', subtitulo: 'Silencia el ruido.', img: '🧘', texto: 'Señor, silencia los pensamientos que no me dejan descansar. Calma la mente acelerada, el corazón inquieto. Que Tu paz que sobrepasa todo entendimiento guarde mi mente esta noche. Amén.' },
  { id: 8, titulo: 'Confiando en Dios para el Mañana', subtitulo: 'Esperanza para el futuro.', img: '⭐', texto: 'Padre, el mañana está en Tus manos. No sé lo que traerá, pero sé que Tú ya estás allí. Duermo en paz porque confío en Tu providencia y en Tu amor fiel. Amén.' },
  { id: 9, titulo: 'Perdón Antes de Dormir', subtitulo: 'Limpia tu corazón.', img: '🤍', texto: 'Señor, antes de dormir, perdono a quienes me hirieron hoy. Libero el rencor, la amargura y el resentimiento. Y Te pido que me perdones a mí también. Que no se ponga el sol sobre mi enojo. Amén.' },
  { id: 10, titulo: 'Descanso en Tu Presencia', subtitulo: 'Permaneciendo en Él.', img: '🕊️', texto: 'Aquí estoy, Señor, en Tu presencia. No necesito palabras, solo estar contigo. Que esta noche sea un tiempo de comunión contigo, incluso mientras duermo. Que Tu Espíritu ore por mí. Amén.' },
]

export default function DormirPage() {
  const router = useRouter()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  if (selected) {
    return (
      <div style={{ background: '#0f0c24', minHeight: '100vh' }}>
        <div style={{ padding: '50px 20px 40px', position: 'relative' }}>
          <button onClick={() => setSelected(null)} style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
          }}>←</button>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ fontSize: '72px', marginBottom: '16px' }}>{selected.img}</div>
            <div style={{ fontSize: '9px', color: '#8B7FD4', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '8px' }}>SLEEP</div>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 700, fontFamily: 'Cinzel, serif', marginBottom: '8px' }}>
              {selected.titulo}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}>
              {selected.subtitulo}
            </p>
          </div>
        </div>
        <div style={{ padding: '0 20px 100px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)', borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)', padding: '28px 24px',
            marginBottom: '20px',
          }}>
            <p style={{
              fontSize: '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Georgia, serif', fontStyle: 'italic', textAlign: 'center',
            }}>
              {selected.texto}
            </p>
          </div>
          {selected.audio && (
            <div style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: '16px',
              padding: '16px', marginBottom: '16px',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '8px' }}>🎵 Música para dormir</p>
              <audio controls src={selected.audio} style={{ width: '100%' }} />
            </div>
          )}
          <button className="btn-gold">🌙 Que descanses en paz</button>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="page-content" style={{ background: '#0f0c24' }}>
      <div style={{ padding: '20px 16px 0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'white', fontFamily: 'Lato, sans-serif' }}>
          Dormir
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '20px', fontFamily: 'Lato, sans-serif' }}>
          Día 1 de tu Jornada
        </p>
      </div>

      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {items.map((item) => (
            <div key={item.id} onClick={() => setSelected(item)} style={{
              borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'transform 0.2s',
            }}>
              <div style={{
                height: '110px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '48px',
                background: 'linear-gradient(135deg, rgba(139,127,212,0.2), rgba(30,27,75,0.8))',
              }}>{item.img}</div>
              <div style={{ padding: '10px 12px 14px' }}>
                <div style={{ fontSize: '8px', color: '#8B7FD4', fontWeight: 700, letterSpacing: '0.12em', marginBottom: '4px' }}>SLEEP</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'white', fontFamily: 'Lato, sans-serif', lineHeight: 1.2, marginBottom: '4px' }}>
                  {item.titulo}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Lato, sans-serif' }}>
                  {item.subtitulo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
