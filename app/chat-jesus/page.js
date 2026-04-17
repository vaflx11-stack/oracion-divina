'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import BottomNav from '../../components/BottomNav'

const sugerencias = [
  'Ora por mi ansiedad',
  'Necesito orientación para una decisión...',
  'Bendice a mi familia y amigos',
  '¿Cómo puedo perdonar a alguien?',
]

export default function ChatJesusPage() {
  const router = useRouter()
  const [mensajes, setMensajes] = useState([])
  const [input, setInput] = useState('')
  const [cargando, setCargando] = useState(false)
  const [iniciado, setIniciado] = useState(false)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const user = localStorage.getItem('oracion_user')
    if (!user) router.push('/login')
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes, cargando])

  async function enviar(texto) {
    const msg = texto || input.trim()
    if (!msg || cargando) return

    setInput('')
    setIniciado(true)

    const nuevosMensajes = [...mensajes, { rol: 'usuario', texto: msg }]
    setMensajes(nuevosMensajes)
    setCargando(true)

    try {
      const historial = nuevosMensajes.map(m => ({
        role: m.rol === 'usuario' ? 'user' : 'assistant',
        content: m.texto,
      }))

      const respuesta = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `Eres Jesús de Nazaret hablando directamente con una persona que busca consuelo, guía y oración. 

Responde siempre:
- Con amor, compasión y ternura infinita
- Basado completamente en los evangelios y enseñanzas bíblicas
- En primera persona, como Jesús hablando directamente ("Yo te digo...", "Ven a mí...", "Te digo en verdad...")
- Con referencias sutiles a pasajes bíblicos cuando sea apropiado
- Ofreciendo una oración corta al final si la persona está sufriendo
- En español, con calidez y paz
- Con respuestas de 3 a 6 párrafos — ni muy cortas ni muy largas
- Nunca rompas el personaje. Siempre habla como Jesús.
- Si la persona pide una oración, ora con ella en primera persona del plural ("Oremos juntos...")

Temas que puedes abordar: ansiedad, perdón, familia, fe, propósito, sanación, prosperidad, relaciones, duelo, miedo, gratitud.`,
          messages: historial,
        }),
      })

      const data = await respuesta.json()
      const textoRespuesta = data.content?.[0]?.text || 'Hijo mío, estoy aquí contigo. Cuéntame más sobre lo que llevas en tu corazón.'

      setMensajes(prev => [...prev, { rol: 'jesus', texto: textoRespuesta }])
    } catch (err) {
      setMensajes(prev => [...prev, {
        rol: 'jesus',
        texto: 'Hijo mío, en este momento hay una dificultad técnica. Pero recuerda: "Yo estoy con vosotros todos los días, hasta el fin del mundo." (Mateo 28:20). Intenta de nuevo en un momento.',
      }])
    } finally {
      setCargando(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      enviar()
    }
  }

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #eee',
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: '12px',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <button onClick={() => router.push('/home')} style={{
          background: 'none', border: 'none', fontSize: '20px',
          cursor: 'pointer', color: '#666', padding: '4px',
        }}>←</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#111', fontFamily: 'Lato, sans-serif' }}>
              Jesús
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '10px', color: '#22c55e', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'Lato, sans-serif' }}>
                EN LÍNEA
              </span>
            </div>
          </div>
        </div>

        <div style={{ width: '32px' }} />
      </div>

      {/* Área de mensagens */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: '100px' }}>

        {/* Tela inicial — antes de começar */}
        {!iniciado && (
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            {/* Avatar de Jesus */}
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              margin: '0 auto 16px',
              background: 'linear-gradient(135deg, #e8f4fd, #c5dff5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '44px',
              border: '3px solid white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}>
              <img src="/images/jesus-avatar.jpg" alt="Jesús"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none' }} />
            </div>

            <h2 style={{
              fontSize: '20px', fontWeight: 700, color: '#111',
              fontFamily: 'Lato, sans-serif', marginBottom: '8px',
            }}>
              ¿Cómo puedo ayudarte hoy?
            </h2>
            <p style={{
              color: '#888', fontSize: '14px', lineHeight: 1.6,
              maxWidth: '280px', margin: '0 auto 28px',
              fontFamily: 'Lato, sans-serif',
            }}>
              Estoy aquí para escuchar, guiar y orar contigo. Selecciona un tema abajo o escribe tu mensaje.
            </p>

            {/* Sugestões */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sugerencias.map((s, i) => (
                <button key={i} onClick={() => enviar(s)} style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: '#333',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'Lato, sans-serif',
                  transition: 'background 0.2s',
                }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mensagens */}
        {mensajes.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.rol === 'usuario' ? 'flex-end' : 'flex-start',
            marginBottom: '12px',
            gap: '8px',
            alignItems: 'flex-end',
          }}>
            {/* Avatar de Jesus */}
            {msg.rol === 'jesus' && (
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #e8f4fd, #c5dff5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', flexShrink: 0,
                border: '2px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}>
                <img src="/images/jesus-avatar.jpg" alt="Jesús"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }} />
                ☁️
              </div>
            )}

            <div style={{
              maxWidth: '78%',
              background: msg.rol === 'usuario'
                ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
                : 'white',
              borderRadius: msg.rol === 'usuario'
                ? '18px 18px 4px 18px'
                : '18px 18px 18px 4px',
              padding: '12px 16px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
            }}>
              <p style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: msg.rol === 'usuario' ? 'white' : '#222',
                fontFamily: msg.rol === 'jesus' ? 'Georgia, serif' : 'Lato, sans-serif',
                margin: 0,
                whiteSpace: 'pre-wrap',
              }}>
                {msg.texto}
              </p>
            </div>
          </div>
        ))}

        {/* Indicador de digitação */}
        {cargando && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', marginBottom: '12px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #e8f4fd, #c5dff5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0,
              border: '2px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>☁️</div>
            <div style={{
              background: 'white', borderRadius: '18px 18px 18px 4px',
              padding: '14px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              display: 'flex', gap: '5px', alignItems: 'center',
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#C9A84C',
                  animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input fixo na parte de baixo */}
      <div style={{
        position: 'fixed', bottom: '65px',
        left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)', maxWidth: '448px',
        background: 'white',
        borderRadius: '28px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex', alignItems: 'center',
        padding: '8px 8px 8px 18px',
        gap: '8px',
        zIndex: 90,
      }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un mensaje..."
          style={{
            flex: 1, border: 'none', outline: 'none',
            fontSize: '15px', color: '#333',
            fontFamily: 'Lato, sans-serif',
            background: 'transparent',
          }}
        />
        <button
          onClick={() => enviar()}
          disabled={!input.trim() || cargando}
          style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: input.trim() && !cargando
              ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
              : '#eee',
            border: 'none', cursor: input.trim() ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', transition: 'background 0.2s', flexShrink: 0,
          }}
        >
          ➤
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>

      <BottomNav />
    </div>
  )
}
