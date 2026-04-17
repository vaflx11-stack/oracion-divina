'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const capitulos = [
  {
    numero: 1,
    titulo: 'La Noche en que el Cielo Descendió a la Tierra',
    texto: `El año era 1858.

El frío cortaba la pequeña ciudad de Lourdes, en el sur de Francia.

Una niña pobre, hija de un molinero, caminaba por la gruta de Massabielle con un haz de leña en los brazos.

Su nombre era Bernadette Soubirous.

Y en aquella noche, mientras el viento susurraba entre las piedras y el agua goteaba silenciosamente por la grieta, algo imposible aconteció:

La gruta brilló.

Una luz blanca, suave y cálida — como si el propio cielo hubiera abierto una ventana.

Y allí, envuelta en un halo dorado, había una mujer vestida de blanco.

No era imaginación.

No era una sombra.

No era un sueño.

Bernadette cayó de rodillas.

Y la presencia sonrió, con una bondad que no existe en este mundo.

En ese exacto momento, nació lo que hoy llamamos:

El Código de Lourdes — el lenguaje de curación que el cielo usa para tocar la Tierra.

No es una fórmula.

No es superstición.

No es magia.

Es un mecanismo espiritual, transmitido por María a través de símbolos, gestos, palabras y agua.

Este manuscrito revela este código — adaptado, protegido y ahora liberado para ti.`,
  },
  {
    numero: 2,
    titulo: 'El Misterio de la Fuente Oculta',
    texto: `En una de las apariciones, la presencia le dijo algo a Bernadette que cambiaría la historia:

"Bebe de la fuente y lávate en ella."

Pero en aquella época...

no había fuente.

Ninguna agua brotaba de la gruta.

Era solo piedra, polvo y silencio.

Bernadette obedeció de todos modos.

Se arrodilló.

Comenzó a cavar con las manos, como si siguiera un comando invisible.

Primero vino barro.

Luego vino un hilo de agua.

Después, un chorro.

Y entonces...

una fuente comenzó a fluir desde dentro de la tierra, allí mismo, frente a la niña.

El agua curó:

ciegos,

paralíticos,

enfermos terminales,

personas con heridas profundas,

depresiones y tormentos internos.

Más de 70 milagros fueron oficialmente reconocidos por la Iglesia.

Miles de no oficiales fueron testimoniados.

La ciencia lo estudió — y no encontró explicación:

agua pura,

sin minerales especiales,

sin propiedades químicas extraordinarias.

Entonces, ¿por qué cura?

Porque la curación no está en la composición del agua, sino en el CÓDIGO que fue activado en aquella fuente.

Y este código es lo que aprenderás en los próximos capítulos.`,
  },
  {
    numero: 3,
    titulo: 'El Código de Lourdes: Cómo Funciona',
    texto: `El Código de Lourdes está formado por cuatro pilares espirituales.

Todos estaban presentes en las apariciones y en la fuente.

Estos pilares son:

1. EL LLAMADO

(María aparece → el alma despierta)

Es el momento en que algo dentro de ti dice:

"Necesito curación."

"Necesito ayuda."

"Necesito a Dios."

Ese llamado abre el corazón para recibir.

2. EL ACTO DE OBEDIENCIA

(Bernadette cavando la tierra)

Es el gesto simbólico que activa la gracia.

No es fuerza.

Es entrega.

3. EL AGUA DE LA TRANSFORMACIÓN

(la fuente que fluye)

El agua representa:

limpieza,

renacimiento,

promesa de Dios,

restauración del cuerpo.

4. LA PALABRA DE LUZ

(oración)

La curación se completa cuando la intención encuentra la fe a través de la palabra.

Cuando los cuatro se unen, se crea un campo espiritual capaz de:

restaurar el cuerpo,

limpiar el alma,

aliviar dolores profundos,

y reabrir caminos interrumpidos.

Y esto puede hacerse en tu casa, con agua común — siempre que sigas el ritual correcto.`,
  },
  {
    numero: 4,
    titulo: 'El Ritual Original de Lourdes (Reconstruido)',
    texto: `Aquí comienza lo que el PDF original no entrega.

Este es el ritual completo, reconstruido a partir de:

registros de las apariciones,

oraciones tradicionales,

prácticas de los curadores de Lourdes,

y textos preservados por los guardianes del santuario.

Necesitarás:

un vaso de agua

una vela blanca (opcional)

silencio

fe

PASO 1 — EL SILENCIO DE LA GRUTA

Cierra los ojos.

Respira profundo.

Imagínate dentro de la Gruta de Massabielle.

Siente la humedad de las paredes.

Escucha el goteo del agua.

Siente el suelo frío bajo tus pies.

El silencio es el velo donde el milagro se forma.

PASO 2 — LA INVOCACIÓN DE LA PRESENCIA

Di:

"María, Madre de la Luz, entro ahora en tu gruta sagrada.

Guíame como guiaste a Bernadette."

Esto abre el campo de la presencia.

PASO 3 — LA LUZ SOBRE EL AGUA

Levanta el vaso de agua.

Imagina una luz blanca descendiendo sobre él.

PASO 4 — LAS PALABRAS SECRETAS DEL CÓDIGO

Repite:

"Que esta agua cargue la curación que descendió del cielo en Lourdes.

Que toque mi cuerpo.

Que toque mi alma.

Que toque todo en mí que necesita renacer."

PASO 5 — LA BEBIDA DE LA GRACIA

Bebe despacio.

Tres sorbos:

uno para el cuerpo

uno para el corazón

uno para el espíritu

PASO 6 — LA FRASE DE CIERRE

Pon la mano en el pecho y di:

"Yo recibo la curación de Lourdes."`,
  },
  {
    numero: 5,
    titulo: 'Oración Oficial del Código de Lourdes (1 Minuto)',
    texto: `"María, Madre de la Luz, derrama sobre mí la curación que fluyó de la gruta.

Toca mi cuerpo, restaura mi salud, limpia mis dolores y renueva mis fuerzas.

Así como el agua nació de la roca, que la curación nazca en mí.

Que la luz que descendió sobre Bernadette descienda ahora sobre mi vida.

Lourdes vive en mí.

Yo recibo.

Amén."`,
    esOracion: true,
  },
  {
    numero: 6,
    titulo: 'Oración Profunda de Lourdes (7 Minutos)',
    subtitulo: '*(Lectura Recomendada en Silencio Profundo)*',
    texto: `"Madre de la Inmaculada, entro ahora en tu gruta sagrada.

Toca mis sombras con tu luz.

Donde hay dolor, cura.

Donde hay miedo, calma.

Donde hay duda, ilumina.

Donde hay enfermedad, restaura.

María, pasa tus manos sobre mi cuerpo.

Disuelve lo que la medicina no explica.

Renueva mis células.

Envuelve mi mente en paz.

Calma mis pensamientos.

Ordena mis caminos.

Bendita sea el agua que cura.

Bendita sea la luz que renueva.

Bendita sea la fe que transforma.

Así como hiciste fluir la fuente de Lourdes,

haz fluir la fuente de nueva vida en mí.

Yo recibo tu curación.

Yo recibo tu gracia.

Yo recibo tu paz.

Amén."`,
    esOracion: true,
  },
  {
    numero: 7,
    titulo: 'Las 5 Aguas Milagrosas de Lourdes',
    texto: `Basado en milagros históricos.

Cada agua es un ritual:

1. Agua de Curación Física Inmediata

(para enfermedades, dolores e inflamaciones)

2. Agua de Reconciliación Familiar

(para traer hijos de vuelta, unir matrimonios)

3. Agua de Protección Espiritual

(para hogares pesados, ambientes con peleas)

4. Agua de Liberación de Tristeza Profunda

(para depresión, duelo, angustia)

5. Agua de Prosperidad Restaurada

(sí, Lourdes también tiene milagros financieros)

Cada una con una oración específica.`,
  },
  {
    numero: 8,
    titulo: 'Señales de que el Código Fue Activado',
    texto: `10 señales reales:

- leve calor en el pecho

- escalofrío suave

- el agua parece más liviana

- sensación de ser observado con amor

- sueño con luz o agua

- tranquilidad repentina

- llanto espontáneo

- coincidencias de paz

- dolores disminuyendo

- sensación de "nuevo comienzo"`,
  },
  {
    numero: 9,
    titulo: 'El Viaje de 9 Días de Lourdes',
    texto: `Una mini-novena guiada milagrosa.

Prepárate para caminar con Bernadette por 9 días de fe y transformación.

DÍA 1 — La Gruta del Silencio
Entra en silencio. Deja que la presencia de María te envuelva.

DÍA 2 — El Agua de la Fe
Bebe el agua bendita con intención y fe profunda.

DÍA 3 — La Oración de la Entrega
Entrega todo lo que no puedes cargar solo.

DÍA 4 — La Luz sobre las Sombras
Pide que la luz de María toque tus miedos más profundos.

DÍA 5 — El Milagro en el Cuerpo
Ora específicamente por tu salud física.

DÍA 6 — La Reconciliación
Perdona. Pide curación para tus relaciones.

DÍA 7 — La Puerta de la Abundancia
Abre tu corazón para recibir las bendiciones materiales.

DÍA 8 — El Escudo de Protección
Pide protección espiritual para ti y tu familia.

DÍA 9 — El Sello de Lourdes
Finaliza con gratitud. El código está activado en ti.`,
  },
  {
    numero: 10,
    titulo: 'Cierre: Tu Gruta Está Abierta',
    texto: `"La fuente de Lourdes no está en un lugar.

Está en ti."

Que la paz de Lourdes permanezca en tu corazón.`,
    esFinal: true,
  },
]

export default function CodigoLourdesPage() {
  const router = useRouter()
  const [vista, setVista] = useState('indice') // 'indice' ou número do capítulo
  const [capActual, setCapActual] = useState(0)
  const [concluido, setConcluido] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  function abrirCapitulo(idx) {
    setCapActual(idx)
    setVista('capitulo')
    window.scrollTo(0, 0)
  }

  function proximo() {
    if (capActual < capitulos.length - 1) {
      setCapActual(capActual + 1)
      window.scrollTo(0, 0)
    } else {
      setConcluido(true)
    }
  }

  function anterior() {
    if (capActual > 0) {
      setCapActual(capActual - 1)
      window.scrollTo(0, 0)
    } else {
      setVista('indice')
      window.scrollTo(0, 0)
    }
  }

  // Tela de conclusão
  if (concluido) {
    return (
      <div style={{ background: '#0a0f1e', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>💧</div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#E8C97A', marginBottom: '12px' }}>
          ¡Libro Concluido!
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7, maxWidth: '300px', marginBottom: '32px', fontFamily: 'Lato, sans-serif' }}>
          Has completado El Código de Lourdes. Que la paz de Lourdes permanezca siempre en tu corazón.
        </p>
        <button className="btn-gold" onClick={() => router.push('/home')} style={{ width: 'auto', padding: '14px 32px' }}>
          Volver al Inicio
        </button>
        <BottomNav />
      </div>
    )
  }

  // Índice do livro
  if (vista === 'indice') {
    return (
      <div style={{ background: '#0a0f1e', minHeight: '100vh', paddingBottom: '90px' }}>

        {/* Header com imagem */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => router.push('/home')} style={{
            position: 'absolute', top: 16, left: 16, zIndex: 10,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '50%', width: '36px', height: '36px',
            color: 'white', fontSize: '18px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>←</button>

          <div style={{
            height: '200px', background: 'linear-gradient(135deg, #0a0f1e, #1a2744)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '80px',
          }}>
          <img src="/images/codigo-lourdes.jpg" alt="Código de Lourdes"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none' }} />
          </div>
        </div>

        {/* Info do livro */}
        <div style={{ padding: '24px 20px 16px', textAlign: 'center' }}>
          <span style={{
            background: '#C9A84C', color: 'white',
            fontSize: '9px', fontWeight: 700, padding: '3px 12px',
            borderRadius: '4px', letterSpacing: '0.1em',
          }}>MANUSCRITO SAGRADO</span>
          <h1 style={{
            color: '#E8C97A', fontSize: '28px', fontWeight: 700,
            fontFamily: 'Cinzel, serif', marginTop: '10px', marginBottom: '6px',
          }}>
            El Código de Lourdes
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
            El Manuscrito Sagrado Perdido
          </p>
          <button className="btn-gold" onClick={() => abrirCapitulo(0)} style={{ marginBottom: '28px' }}>
            Leer Ahora
          </button>
        </div>

        {/* Índice */}
        <div style={{ padding: '0 16px' }}>
          <p style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.15em', marginBottom: '12px', fontFamily: 'Lato, sans-serif',
          }}>
            TABLA DE CONTENIDOS
          </p>
          {capitulos.map((cap, i) => (
            <div key={i} onClick={() => abrirCapitulo(i)} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px', padding: '14px 16px',
              marginBottom: '8px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#C9A84C', fontSize: '12px', fontWeight: 700,
                fontFamily: 'Lato, sans-serif', flexShrink: 0,
              }}>{cap.numero}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600, fontFamily: 'Lato, sans-serif', lineHeight: 1.3 }}>
                  {cap.titulo}
                </div>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '18px' }}>▷</span>
            </div>
          ))}
        </div>

        <BottomNav />
      </div>
    )
  }

  // Capítulo atual
  const cap = capitulos[capActual]
  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh' }}>

      {/* Barra do topo */}
      <div style={{
        background: '#0d1526', padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <button onClick={anterior} style={{
          background: 'none', border: 'none', color: 'white',
          fontSize: '20px', cursor: 'pointer', padding: '4px',
        }}>←</button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.15em', fontFamily: 'Lato, sans-serif' }}>
            EL CÓDIGO DE LOURDES
          </div>
          <div style={{ color: 'white', fontSize: '12px', fontWeight: 600, fontFamily: 'Lato, sans-serif', marginTop: '2px' }}>
            {cap.titulo.length > 28 ? cap.titulo.substring(0, 28) + '...' : cap.titulo}
          </div>
        </div>
        <div style={{ width: '28px' }} />
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '28px 24px 100px' }}>

        {/* Título */}
        <h2 style={{
          color: '#E8C97A', fontSize: '22px', fontWeight: 700,
          fontFamily: 'Cinzel, serif', marginBottom: '20px', lineHeight: 1.3,
        }}>
          {cap.titulo}
        </h2>

        {cap.subtitulo && (
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', fontStyle: 'italic', marginBottom: '16px', fontFamily: 'Lato, sans-serif' }}>
            {cap.subtitulo}
          </p>
        )}

        {/* Separador */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} />

        {/* Texto */}
        <div style={{ marginBottom: '32px' }}>
          {cap.texto.split('\n\n').map((paragrafo, i) => (
            paragrafo.trim() === '' ? null : (
              <p key={i} style={{
                color: cap.esOracion ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.75)',
                fontSize: cap.esOracion ? '16px' : '15px',
                lineHeight: cap.esOracion ? 2 : 1.8,
                fontFamily: cap.esOracion ? 'Georgia, serif' : 'Lato, sans-serif',
                fontStyle: cap.esOracion ? 'italic' : 'normal',
                marginBottom: '12px',
                textAlign: cap.esOracion ? 'center' : 'left',
              }}>
                {paragrafo}
              </p>
            )
          ))}
        </div>

        {/* Separador */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '24px' }} />

        {/* Navegação inferior */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {capActual > 0 ? (
            <button onClick={anterior} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>‹ VOLVER</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif', maxWidth: '140px' }}>
                {capitulos[capActual - 1].titulo.substring(0, 20)}...
              </div>
            </button>
          ) : (
            <button onClick={() => setVista('indice')} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>‹ VOLVER</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif' }}>Índice</div>
            </button>
          )}

          {!cap.esFinal ? (
            <button onClick={proximo} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', padding: 0,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', fontFamily: 'Lato, sans-serif' }}>PRÓXIMO CAPÍTULO ›</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 600, fontFamily: 'Lato, sans-serif', maxWidth: '140px', textAlign: 'right' }}>
                {capitulos[capActual + 1]?.titulo.substring(0, 20)}...
              </div>
            </button>
          ) : (
            <button className="btn-gold" onClick={proximo} style={{ width: 'auto', padding: '12px 24px', fontSize: '14px' }}>
              Finish Book
            </button>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
