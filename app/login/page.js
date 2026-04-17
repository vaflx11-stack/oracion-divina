'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleLogin(e) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Salva o email no localStorage como "sessão simples"
    localStorage.setItem('oracion_user', email)
    setTimeout(() => router.push('/home'), 800)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f0c24 0%, #1a1035 50%, #2d1b4e 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Efeito de luz dourada no topo */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Imagem de anjo placeholder */}
      <div style={{
        width: '180px', height: '220px',
        background: 'linear-gradient(180deg, rgba(201,168,76,0.2) 0%, transparent 100%)',
        borderRadius: '50% 50% 40% 40%',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '80px',
        border: '1px solid rgba(201,168,76,0.2)',
      }}>
        🕊️
      </div>

      <h1 style={{
        fontFamily: 'Cinzel, serif',
        color: '#E8C97A',
        fontSize: '26px',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '8px',
        letterSpacing: '0.05em',
      }}>
        Oración Divina
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '40px',
        fontFamily: 'Lato, sans-serif',
      }}>
        Gracia y Sanación Diaria
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '20px',
        padding: '32px 24px',
        width: '100%',
        maxWidth: '360px',
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 600,
          marginBottom: '6px',
          fontFamily: 'Lato, sans-serif',
        }}>
          Bienvenido de vuelta
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
          marginBottom: '24px',
          fontFamily: 'Lato, sans-serif',
        }}>
          Inicia sesión para continuar tu jornada espiritual
        </p>

        <form onSubmit={handleLogin}>
          <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontFamily: 'Lato, sans-serif' }}>
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(201,168,76,0.3)',
              background: 'rgba(255,255,255,0.08)',
              color: 'white',
              fontSize: '15px',
              outline: 'none',
              marginTop: '6px',
              marginBottom: '20px',
              fontFamily: 'Lato, sans-serif',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-gold"
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Entrando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>

      <p style={{
        color: 'rgba(255,255,255,0.3)',
        fontSize: '12px',
        marginTop: '32px',
        fontFamily: 'Lato, sans-serif',
      }}>
        Oración Divina App © 2025
      </p>
    </div>
  )
}
