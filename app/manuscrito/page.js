'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const pergaminos = [
  {
    numero: 1,
    total: 5,
    titulo: 'El Remedio de Dios',
    subtitulo: 'El Médico Divino',
    categoria: 'MANUSCRITO SAGRADO',
    duracion: '5 MIN',
    texto: `En los textos antiguos de Tobías, encontramos un mundo lleno de sufrimiento. Tobías, un hombre justo, es cegado por las sombras, mientras que Sara, lejos de allí, es atormentada por un espíritu que trae muerte a su alegría.

En este escenario entra Azarías — el Arcángel Rafael disfrazado. Su nombre, Rafael, significa literalmente "Dios Cura". Él no aparece con rayos y truenos, sino como un humilde compañero.

Este primer pergamino revela el primer misterio del Arcángel: que la curación de Dios muchas veces llega a través del compañerismo, a través de la presencia silenciosa que camina a nuestro lado en las horas más sombrías.

La hiel del pez, usada para curar la ceguera de Tobías, significa las pruebas amargas de la vida que, bajo la dirección de Dios, se convierten en el propio remedio para nuestra restauración.`,
    invocacion: `"Ó Médico Divino, desenrollo este primer pergamino buscando el remedio de Dios. Mi cuerpo y espíritu están cansados. Así como curaste al ciego Tobías, pido tu intercesión ahora. Sopla el hálito de curación del cielo en mis enfermedades. Restaura los lugares quebrados dentro de mí. Tú, que estás ante el trono de Dios, trae el bálsamo de Galaad para mi alma. Confío en el poder del Altísimo para hacerme íntegro nuevamente. Rafael, curador de los enfermos, ruega por mí. Amén."`,
  },
  {
    numero: 2,
    total: 5,
    titulo: 'El Compañero en el Camino',
    subtitulo: 'Guía de los Perdidos',
    categoria: 'MANUSCRITO SAGRADO',
    duracion: '6 MIN',
    texto: `El joven Tobías fue enviado en un viaje peligroso a Media, una tierra desconocida para él. Estaba con miedo e inexperto. Sin embargo, no estaba solo. Rafael caminó con él, guiando sus pasos, protegiéndolo de peligros visibles e invisibles.

Este segundo pergamino nos enseña que la vida es una peregrinación. Frecuentemente somos viajeros en tierras extrañas, enfrentando decisiones que nos asustan.

Rafael es el patrón de los viajeros — no solo en los mapas, sino en el camino de la propia vida. Él permanece como la brújula divina, garantizando que aquellos que confían en la providencia de Dios nunca caminen solos.

Él transforma nuestro vagar en una misión santa. Cada paso dado con fe se convierte en parte del plan divino.`,
    invocacion: `"Guía del Peregrino, camino por el valle de lo desconocido. Como el joven Tobías, necesito un compañero en esta jornada. El camino de adelante está nebuloso y no sé hacia dónde girar. Toma mi mano, Ó Arcángel. Guíame lejos de las trampas del enemigo y en dirección a la luz de la voluntad de Dios. Sé mi brújula cuando esté perdido, mi fuerza cuando esté cansado. Entrego mis pasos a tu orientación. Muéstrame el camino que lleva a la vida. Amén."`,
  },
  {
    numero: 3,
    total: 5,
    titulo: 'La Luz de la Revelación',
    subtitulo: 'Restaurador de la Visión',
    categoria: 'MANUSCRITO SAGRADO',
    duracion: '5 MIN',
    texto: `Por años, Tobías vivió en la oscuridad, incapaz de ver la luz del sol o el rostro de sus seres queridos. Oró por la muerte, pero Dios envió a Rafael para traerle luz. La curación fue física, sí, pero también profundamente espiritual.

Ver claramente es percibir la mano de Dios en todas las cosas. Muchos de nosotros caminamos con visión 20/20, pero somos espiritualmente ciegos — ciegos a nuestro propio valor, ciegos a las necesidades de los demás, ciegos a los milagros que suceden a nuestro alrededor.

Este tercer pergamino nos invita a dejar que las "escamas" caigan de nuestros ojos espirituales, para ver el mundo no como un lugar de desesperanza, sino como un reino preparado para nosotros.

La oscuridad no es el fin — es el preludio de la revelación divina.`,
    invocacion: `"Ángel de Luz, escamas cayeron sobre mis ojos espirituales. Lucho por ver la mano de Dios en mi vida. Estoy ciego por la confusión, el miedo y las distracciones de este mundo. Ven, como viniste a Tobías, y remueve la oscuridad de mi visión. Ayúdame a ver claramente la verdad del amor de Dios. Concédeme el don del discernimiento. Ilumina mi mente ofreciéndome la claridad del cielo. Abre mis ojos, para que pueda ver la gloria del Señor. Amén."`,
  },
  {
    numero: 4,
    total: 5,
    titulo: 'La Santidad del Amor Santo',
    subtitulo: 'Patrono del Amor',
    categoria: 'MANUSCRITO SAGRADO',
    duracion: '7 MIN',
    texto: `Sara fue atormentada por un demonio que destruía sus intentos de amor, dejándola viuda siete veces. Ella estaba sin esperanza, creyéndose maldita. La intervención de Rafael quebró esa maldición.

Él instruyó a Tobías sobre cómo honrar a Dios dentro del matrimonio, alejando al demonio a través de la oración y el incienso. Este cuarto misterio revela a Rafael como el "Casamentero de Dios".

Él santifica el amor humano, protegiéndolo de la lujuria y de las divisiones del maligno. Él nos enseña que el amor verdadero es sacrificial, lleno de oración y siempre bajo la protección del Cielo.

Ninguna maldición puede resistir ante la oración sincera y el amor consagrado a Dios. Rafael es el guardián de los corazones.`,
    invocacion: `"Bendito Casamentero del Cielo, uniste a Tobías y Sara, quebrando las cadenas que los aprisionaban. Oro hoy por mis relaciones y por aquellos que buscan el amor divino. Únenos en un cordón de tres dobleces que no pueda ser quebrado. Cura las heridas de las desilusiones pasadas. Aleja los espíritus de división y discordia. Bendice nuestros hogares con paz, comprensión y santa afección. Que nuestro amor refleje el amor de Dios por Su iglesia. Amén."`,
  },
  {
    numero: 5,
    total: 5,
    titulo: 'La Revelación de los Siete',
    subtitulo: 'El Protector',
    categoria: 'MANUSCRITO SAGRADO',
    duracion: '7 MIN',
    texto: `Al final del viaje, el guía revela su verdadero rostro: "Yo soy Rafael". Él explica que fue enviado por Dios para probar y curar. Esta revelación final es el misterio de la Providencia.

Frecuentemente no reconocemos los mensajeros de Dios en nuestras vidas. Vemos coincidencia; Dios ve diseño. Vemos lucha; Dios ve entrenamiento.

Este último pergamino nos llama a confiar en la distinta protección divina. Nos recuerda que somos vigilados por los siete espíritus ante el trono, y que nuestras oraciones no están perdidas — son llevadas como incienso por el propio Rafael al corazón de Dios.

Los ángeles no son fantasías — son realidades que operan en nuestro favor todos los días.`,
    invocacion: `"Poderoso Príncipe, de pie entre los siete que presentan las oraciones de los santos. Tú eres el terror de los demonios y el escudo de los fieles. Me pongo bajo tu cuidado providencial. Protégeme de las flechas que vuelan de día y de la peste que asola en la oscuridad. Así como aprisionaste al demonio Asmodeo, aprisiona las fuerzas del mal que se levantan contra mí. Declaro que Dios es mi refugio, y Sus ángeles tienen encargo sobre mí. Descanso en la garantía de la seguridad divina. Amén."`,
    esFinal: true,
  },
]

export default function ManuscritoPage() {
  const router = useRouter()
  const [paginaAtual, setPaginaAtual] = useState(0)
  const [concluido, setConcluido] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  const pergamino = pergaminos[paginaAtual]

  function proximo() {
    if (paginaAtual < pergaminos.length - 1) {
      setPaginaAtual(paginaAtual + 1)
      window.scrollTo(0, 0)
    } else {
      setConcluido(true)
    }
  }

  function anterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1)
      window.scrollTo(0, 0)
    }
  }

  if (concluido) {
    return (
      <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>✨</div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#0f0c24', marginBottom: '12px' }}>
          ¡Manuscrito Concluido!
        </h2>
        <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px', fontFamily: 'Lato, sans-serif' }}>
          Has completado los 5 pergaminos del Arcángel Rafael. Que su protección y curación estén siempre contigo.
        </p>
        <button className="btn-gold" onClick={() => router.push('/home')} style={{ width: 'auto', padding: '14px 32px' }}>
          Volver al Inicio
        </button>
        <BottomNav />
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* Imagem hero do manuscrito */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(180deg, #0a0818 0%, #1a1035 60%, #2d1b4e 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <img src="/images/manuscrito-raphael.jpg" alt="Manuscrito" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.style.display = 'none' }} />
        </div>

        {/* Botão voltar */}
        <button onClick={anterior} style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(0,0,0,0.4)', border: 'none',
          borderRadius: '50%', width: '36px', height: '36px',
          color: 'white', fontSize: '16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: paginaAtual === 0 ? 0.3 : 1,
        }}>←</button>

        {/* Badge e título sobre a imagem */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '12px 20px 16px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        }}>
          <span style={{
            background: '#C9A84C', color: 'white',
            fontSize: '9px', fontWeight: 700, padding: '3px 10px',
            borderRadius: '4px', letterSpacing: '0.1em',
          }}>
            {pergamino.categoria}
          </span>
          <h1 style={{
            color: 'white', fontSize: '26px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', marginTop: '6px', lineHeight: 1.2,
          }}>
            {pergamino.titulo === 'El Remedio de Dios' ? 'Arcángel Rafael' : pergamino.titulo}
          </h1>
          {paginaAtual === 0 && (
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginTop: '4px' }}>
              Desvenda los 5 misterios del Médico Divino. Un viaje de curación, orientación y providencia.
            </p>
          )}
        </div>
      </div>

      {/* Lista de pergaminhos na primeira página */}
      {paginaAtual === 0 && (
        <div style={{
          margin: '0 16px 20px',
          background: '#0f0c24', borderRadius: '16px', overflow: 'hidden',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ color: 'white', fontSize: '15px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>
              5 Pergaminos
            </span>
          </div>
          {pergaminos.map((p, i) => (
            <div key={i} onClick={() => { setPaginaAtual(i); window.scrollTo(0,0) }} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px 20px',
              borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              cursor: 'pointer',
              background: i === paginaAtual ? 'rgba(201,168,76,0.1)' : 'transparent',
            }}>
              <span style={{
                color: 'rgba(255,255,255,0.3)', fontSize: '16px', fontWeight: 700,
                width: '20px', fontFamily: 'Lato, sans-serif',
              }}>{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 700, fontFamily: 'Lato, sans-serif' }}>{p.titulo}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontFamily: 'Lato, sans-serif' }}>
                  {p.subtitulo} · {p.duracion}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '9px', letterSpacing: '0.1em', marginTop: '2px' }}>
                  MANUSCRITO · {p.duracion}
                </div>
              </div>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', fontSize: '14px',
              }}>▶</div>
            </div>
          ))}
        </div>
      )}

      {/* Conteúdo do pergaminho atual (a partir do 1º clique) */}
      {paginaAtual >= 0 && (
        <div style={{ padding: '0 16px 100px' }}>

          {/* Badge do pergaminho */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', marginTop: paginaAtual === 0 ? '0' : '16px' }}>
            <span style={{
              background: '#FFF3CD', color: '#7A5800',
              fontSize: '10px', fontWeight: 700, padding: '4px 12px',
              borderRadius: '20px', letterSpacing: '0.08em',
            }}>
              PERGAMINO {pergamino.numero} DE {pergamino.total}
            </span>
          </div>

          {/* Título do pergaminho */}
          {paginaAtual > 0 && (
            <h2 style={{
              fontSize: '22px', fontWeight: 700, color: '#111',
              fontFamily: 'Cinzel, serif', marginBottom: '16px', lineHeight: 1.3,
            }}>
              {pergamino.titulo}
            </h2>
          )}

          {/* Texto */}
          <div style={{
            background: 'white', borderRadius: '16px', padding: '20px',
            boxShadow: '0 1px 8px rgba(0,0,0,0.07)', marginBottom: '16px',
          }}>
            {pergamino.texto.split('\n\n').map((paragrafo, i) => (
              <p key={i} style={{
                fontSize: '15px', lineHeight: 1.8, color: '#333',
                fontFamily: 'Georgia, serif',
                marginBottom: i < pergamino.texto.split('\n\n').length - 1 ? '14px' : '0',
                textAlign: 'justify',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontSize: '13px',
              }}>
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Separador */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ color: '#C9A84C', fontSize: '18px' }}>✦</span>
          </div>

          {/* Invocação */}
          <div style={{
            background: 'linear-gradient(135deg, #0f0c24, #1a1035)',
            borderRadius: '16px', padding: '20px',
            marginBottom: '20px',
          }}>
            <div style={{
              color: '#C9A84C', fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.15em', textAlign: 'center', marginBottom: '14px',
            }}>
              A INVOCACIÓN
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.85)', fontSize: '14px',
              lineHeight: 1.8, fontFamily: 'Georgia, serif',
              fontStyle: 'italic', textAlign: 'center',
              textTransform: 'uppercase', letterSpacing: '0.03em',
            }}>
              {pergamino.invocacion}
            </p>
            {/* Coração */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <span style={{ fontSize: '20px', cursor: 'pointer' }}>🤍</span>
            </div>
          </div>

          {/* Botão próximo ou concluir */}
          {!pergamino.esFinal ? (
            <button onClick={proximo} style={{
              width: '100%', padding: '16px',
              background: 'white', border: '1px solid #eee',
              borderRadius: '14px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 1px 8px rgba(0,0,0,0.07)',
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', color: '#999', fontFamily: 'Lato, sans-serif' }}>Próximo Pergamino</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif' }}>
                  {pergaminos[paginaAtual + 1]?.titulo}
                </div>
              </div>
              <span style={{
                background: '#0f0c24', color: 'white',
                borderRadius: '50%', width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0,
              }}>→</span>
            </button>
          ) : (
            <button className="btn-gold" onClick={proximo}>
              ✨ Concluir Manuscrito
            </button>
          )}
        </div>
      )}

      <BottomNav />
    </div>
  )
}
