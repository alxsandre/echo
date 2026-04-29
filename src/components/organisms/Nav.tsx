"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Avatar } from "@/components/atoms/Avatar"

const LINKS = [
  { href: "/", label: "Mon espace" },
  { href: "/feed", label: "Fil d'actualité" },
]

export function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-border bg-bg-nav sticky top-0 z-[100] border-b backdrop-blur-[12px]">
      <div className="mx-auto flex h-14 max-w-[900px] items-center gap-10 px-6">
        {/* Logo */}
        <span className="flex shrink-0 items-center gap-2.5">
          <svg
            width="44"
            height="18"
            viewBox="0 0 300 120"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
          >
            <circle cx="40" cy="60" r="14" fill="var(--text)" />
            <path
              fill="none"
              stroke="var(--text)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M100,60 C120,20 160,20 180,60 C200,100 240,100 280,60"
            />
          </svg>
          <span className="text-text text-[13px] font-semibold tracking-[0.18em] uppercase">
            Echo
          </span>
        </span>

        {/* Links */}
        <div className="flex flex-1 gap-0.5">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-ui relative inline-block rounded-md px-3 py-1.5 text-[13px] no-underline transition-colors duration-150 ${
                  active ? "text-text font-medium" : "text-muted font-normal"
                }`}
              >
                {link.label}
                {active && (
                  <span className="bg-accent absolute right-3 -bottom-px left-3 h-px rounded-sm" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Avatar with dropdown */}
        <div
          className="relative"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setMenuOpen(false)
            }
          }}
        >
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="cursor-pointer rounded-full bg-transparent p-0"
          >
            <Avatar initials="MR" size="sm" />
          </button>

          {menuOpen && (
            <div className="border-border bg-bg2 absolute top-[calc(100%+8px)] right-0 z-50 min-w-[180px] overflow-hidden rounded-xl border shadow-[0_8px_32px_oklch(0%_0%_0_/_0.4)]">
              <div className="px-3 py-2.5">
                <p className="text-text text-[13px] font-medium">Marie Roux</p>
                <p className="text-muted text-[11px]">marie@exemple.fr</p>
              </div>

              <div className="bg-border h-px" />

              <div className="p-1">
                <button
                  type="button"
                  className="text-muted hover:bg-bg3 hover:text-text flex w-full cursor-pointer items-center gap-2.5 rounded-lg bg-transparent px-2.5 py-2 text-left text-[13px] transition-colors duration-100"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Mon profil
                </button>
                <button
                  type="button"
                  className="text-muted hover:bg-bg3 hover:text-text flex w-full cursor-pointer items-center gap-2.5 rounded-lg bg-transparent px-2.5 py-2 text-left text-[13px] transition-colors duration-100"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  Paramètres
                </button>
              </div>

              <div className="bg-border h-px" />

              <div className="p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    router.push("/auth")
                  }}
                  className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg bg-transparent px-2.5 py-2 text-left text-[13px] text-[oklch(62%_0.14_30)] transition-colors duration-100 hover:bg-[oklch(40%_0.12_30_/_0.12)]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Se déconnecter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
