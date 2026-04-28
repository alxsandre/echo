'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar } from '@/components/atoms/Avatar'

const LINKS = [
  { href: '/', label: 'Mon espace' },
  { href: '/feed', label: "Fil d'actualité" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-[100] border-b border-border backdrop-blur-[12px] bg-bg-nav">
      <div className="max-w-[900px] mx-auto px-6 flex items-center h-14 gap-10">
        {/* Logo */}
        <span className="flex items-center gap-2.5 shrink-0">
          <svg width="44" height="18" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" className="block">
            <circle cx="40" cy="60" r="14" fill="var(--text)" />
            <path fill="none" stroke="var(--text)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
              d="M100,60 C120,20 160,20 180,60 C200,100 240,100 280,60" />
          </svg>
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase text-text">
            Echo
          </span>
        </span>

        {/* Links */}
        <div className="flex gap-0.5 flex-1">
          {LINKS.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-block text-[13px] font-ui px-3 py-1.5 rounded-md no-underline transition-colors duration-150 ${
                  active ? 'text-text font-medium' : 'text-muted font-normal'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-px left-3 right-3 h-px bg-accent rounded-sm" />
                )}
              </Link>
            )
          })}
        </div>

        <Avatar initials="MR" size="sm" />
      </div>
    </nav>
  )
}
