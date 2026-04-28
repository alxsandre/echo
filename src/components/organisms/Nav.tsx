"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar } from "@/components/atoms/Avatar"

const LINKS = [
  { href: "/", label: "Mon espace" },
  { href: "/feed", label: "Fil d'actualité" },
]

export function Nav() {
  const pathname = usePathname()

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

        <Avatar initials="MR" size="sm" />
      </div>
    </nav>
  )
}
