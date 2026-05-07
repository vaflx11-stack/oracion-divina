'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const items = [
    {
      href: '/home',
      label: 'Inicio',
      icon: (active) => (
        <svg viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : '#999'} strokeWidth="1.8">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
          <path d="M9 21V12h6v9"/>
        </svg>
      ),
    },
    {
      href: '/oraciones',
      label: 'Oraciones',
      icon: (active) => (
        <svg viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : '#999'} strokeWidth="1.8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      href: '/agua-sagrada',
      label: 'Ritual',
      icon: (active) => (
        <svg viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : '#999'} strokeWidth="1.8">
          <path d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z"/>
        </svg>
      ),
    },
    {
      href: '/musica',
      label: 'Música',
      icon: (active) => (
        <svg viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : '#999'} strokeWidth="1.8">
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      ),
    },
    {
      href: '/dormir',
      label: 'Dormir',
      icon: (active) => (
        <svg viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : '#999'} strokeWidth="1.8">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      ),
    },
  ]

  return (
    <nav className="bottom-nav">
      {items.map((item) => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} className={`nav-item ${active ? 'active' : ''}`}>
            {item.icon(active)}
            <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: active ? 700 : 400 }}>
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
