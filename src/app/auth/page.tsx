"use client"

import { useState } from "react"
import Link from "next/link"

const WAVE_BARS = Array.from({ length: 48 }, (_, i) => ({
  h: 12 + ((i * 17 + 11) % 49),
  delay: ((i * 13) % 200) / 100,
  dur: 1.8 + ((i * 7) % 20) / 10,
}))

function WaveBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center gap-[5px] opacity-55">
      {WAVE_BARS.map((b, i) => (
        <div
          key={i}
          className="bg-accent w-[3px] rounded-full"
          style={{ height: b.h, animation: `shimmer ${b.dur}s ease-in-out ${b.delay}s infinite` }}
        />
      ))}
    </div>
  )
}

function Spinner() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="animate-spin">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      <path
        d="M7 1.5A5.5 5.5 0 0 1 12.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-border h-px flex-1" />
      <span className="text-muted text-[11px] tracking-[0.08em] whitespace-nowrap">{label}</span>
      <div className="bg-border h-px flex-1" />
    </div>
  )
}

function SocialBtn({ icon, label }: { icon: "google" | "apple"; label: string }) {
  const googleIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
  const appleIcon = (
    <svg width="15" height="16" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-160.1-101.6C82 582.5 47.2 488.6 47.2 398.4c0-153.9 100.3-235.2 198.2-235.2 51.5 0 94.3 33.8 126.7 33.8 31 0 79.5-35.8 140.4-35.8 22.7 0 108.2 1.9 162.3 85.7zm-234-181.5c31-36.5 53.7-87.1 53.7-137.8 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.8-147.1 75.8-28.5 32.4-55.1 83-55.1 134.4 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 134.9-71.7z" />
    </svg>
  )
  return (
    <button
      type="button"
      className="border-border bg-bg2 hover:bg-bg3 text-text flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-lg border px-3.5 py-[10px] text-[13px] transition-colors duration-150"
    >
      {icon === "google" ? googleIcon : appleIcon}
      {label}
    </button>
  )
}

function Logo() {
  return (
    <div className="mb-9 flex items-center justify-center gap-2.5">
      <svg width="44" height="18" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
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
      <span className="text-text text-[13px] font-semibold tracking-[0.18em] uppercase">Echos</span>
    </div>
  )
}

function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  autoFocus,
}: {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  autoFocus?: boolean
}) {
  const [showPw, setShowPw] = useState(false)
  const isPw = type === "password"

  return (
    <label className="block">
      <span className="text-muted mb-[7px] block text-[11px] tracking-[0.1em] uppercase">
        {label}
      </span>
      <div className="relative">
        <input
          type={isPw && showPw ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoFocus={autoFocus}
          className={`bg-bg3 border-border focus:border-accent text-text w-full rounded-lg border text-[14px] transition-colors duration-150 outline-none ${isPw ? "py-[11px] pr-11 pl-3.5" : "px-3.5 py-[11px]"}`}
        />
        {isPw && (
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            tabIndex={-1}
            className="text-muted hover:text-text absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-transparent p-0.5 transition-colors duration-150"
          >
            {showPw ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0112 20C7 20 2.73 16.39 1 12a18.45 18.45 0 015.06-6.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c5 0 9.27 3.61 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12C2.73 7.61 7 4 12 4s9.27 3.61 11 8c-1.73 4.39-6 8-11 8S2.73 16.39 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </label>
  )
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      className="rounded-lg border px-3 py-[9px] text-[12px]"
      style={{
        background: "oklch(40% 0.12 30 / 0.18)",
        borderColor: "oklch(55% 0.12 30 / 0.4)",
        color: "oklch(72% 0.1 30)",
      }}
    >
      {message}
    </div>
  )
}

function LoginForm({ onSwitch, onSuccess }: { onSwitch: () => void; onSuccess: () => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 1400)
  }

  return (
    <div className="animate-fade-up">
      <Logo />
      <h1 className="font-display mb-1.5 text-center text-[26px] font-normal tracking-[-0.02em]">
        Bon retour
      </h1>
      <p className="text-muted mb-8 text-center text-[13px]">Vos sons vous attendent</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
        <FormField
          label="Adresse e-mail"
          type="email"
          placeholder="vous@exemple.fr"
          value={email}
          onChange={setEmail}
          autoFocus
        />
        <FormField
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
        />

        <div className="-mt-2 flex justify-end">
          <button
            type="button"
            className="text-muted hover:text-accent cursor-pointer bg-transparent p-0 text-[12px] transition-colors duration-150"
          >
            Mot de passe oublié ?
          </button>
        </div>

        {error && <ErrorBanner message={error} />}

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-bg flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-none py-3 text-[14px] font-medium transition-opacity duration-150 hover:opacity-80 disabled:cursor-default disabled:opacity-70"
        >
          {loading ? (
            <>
              <Spinner /> Connexion…
            </>
          ) : (
            "Se connecter"
          )}
        </button>

        <Divider label="ou" />
        <SocialBtn icon="google" label="Continuer avec Google" />
        <SocialBtn icon="apple" label="Continuer avec Apple" />
      </form>

      <p className="text-muted mt-7 text-center text-[12px]">
        Pas encore de compte ?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-accent cursor-pointer bg-transparent p-0 text-[12px]"
        >
          Créer un compte
        </button>
      </p>
    </div>
  )
}

function SignupForm({ onSwitch, onSuccess }: { onSwitch: () => void; onSuccess: () => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [agreed, setAgreed] = useState(false)

  const pwStrength = (() => {
    if (!password) return null
    if (password.length < 6) return { label: "Trop court", color: "oklch(60% 0.14 30)", w: "25%" }
    if (password.length < 10) return { label: "Moyen", color: "oklch(72% 0.14 72)", w: "60%" }
    return { label: "Fort", color: "oklch(62% 0.14 150)", w: "100%" }
  })()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!name || !email || !password) {
      setError("Veuillez remplir tous les champs.")
      return
    }
    if (!agreed) {
      setError("Veuillez accepter les conditions d'utilisation.")
      return
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 1500)
  }

  return (
    <div className="animate-fade-up">
      <Logo />
      <h1 className="font-display mb-1.5 text-center text-[26px] font-normal tracking-[-0.02em]">
        Créer un compte
      </h1>
      <p className="text-muted mb-8 text-center text-[13px]">Commencez à capturer vos sons</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          label="Nom affiché"
          type="text"
          placeholder="ex. Marie Roux"
          value={name}
          onChange={setName}
          autoFocus
        />
        <FormField
          label="Adresse e-mail"
          type="email"
          placeholder="vous@exemple.fr"
          value={email}
          onChange={setEmail}
        />

        <div>
          <FormField
            label="Mot de passe"
            type="password"
            placeholder="8 caractères minimum"
            value={password}
            onChange={setPassword}
          />
          {pwStrength && (
            <div className="mt-2">
              <div className="bg-border h-0.5 overflow-hidden rounded-sm">
                <div
                  className="h-full rounded-sm transition-[width,background] duration-300"
                  style={{ width: pwStrength.w, background: pwStrength.color }}
                />
              </div>
              <span className="mt-1 block text-[11px]" style={{ color: pwStrength.color }}>
                {pwStrength.label}
              </span>
            </div>
          )}
        </div>

        {error && <ErrorBanner message={error} />}

        <label className="flex cursor-pointer items-start gap-2.5 select-none">
          <div
            onClick={() => setAgreed((a) => !a)}
            className={`mt-0.5 flex size-[18px] shrink-0 cursor-pointer items-center justify-center rounded-[5px] transition-all duration-150 ${
              agreed
                ? "border-accent bg-accent border-[1.5px]"
                : "border-border border-[1.5px] bg-transparent"
            }`}
          >
            {agreed && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                stroke="var(--bg)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="1 4 4 7 9 1" />
              </svg>
            )}
          </div>
          <span className="text-muted text-[12px] leading-relaxed">
            J&apos;accepte les{" "}
            <button
              type="button"
              className="text-accent cursor-pointer bg-transparent p-0 text-[12px]"
            >
              conditions d&apos;utilisation
            </button>{" "}
            et la{" "}
            <button
              type="button"
              className="text-accent cursor-pointer bg-transparent p-0 text-[12px]"
            >
              politique de confidentialité
            </button>
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-bg flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-none py-3 text-[14px] font-medium transition-opacity duration-150 hover:opacity-80 disabled:cursor-default disabled:opacity-70"
        >
          {loading ? (
            <>
              <Spinner /> Création…
            </>
          ) : (
            "Créer mon compte"
          )}
        </button>

        <Divider label="ou" />
        <SocialBtn icon="google" label="Continuer avec Google" />
        <SocialBtn icon="apple" label="Continuer avec Apple" />
      </form>

      <p className="text-muted mt-7 text-center text-[12px]">
        Déjà un compte ?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-accent cursor-pointer bg-transparent p-0 text-[12px]"
        >
          Se connecter
        </button>
      </p>
    </div>
  )
}

function SuccessScreen({ mode }: { mode: "login" | "signup" }) {
  return (
    <div className="animate-fade-up text-center">
      <Logo />
      <div className="bg-accent mx-auto mb-5 flex size-[52px] items-center justify-center rounded-full">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="var(--bg)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 11 8.5 15.5 18 6" />
        </svg>
      </div>
      <h2 className="font-display mb-2 text-[22px] font-normal">
        {mode === "login" ? "Connexion réussie" : "Compte créé !"}
      </h2>
      <p className="text-muted text-[13px] leading-relaxed">
        {mode === "login"
          ? "Vous allez être redirigé vers votre espace…"
          : "Bienvenue sur Echos. Prêt à capturer vos premiers sons."}
      </p>
      <Link
        href="/"
        className="bg-accent text-bg mt-7 inline-block rounded-lg px-[22px] py-[10px] text-[13px] font-medium no-underline transition-opacity duration-150 hover:opacity-80"
      >
        Aller à mon espace →
      </Link>
    </div>
  )
}

type Mode = "login" | "signup" | "success-login" | "success-signup"

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login")
  const [key, setKey] = useState(0)

  const switchTo = (m: Mode) => {
    setKey((k) => k + 1)
    setMode(m)
  }

  const isForm = mode === "login" || mode === "signup"

  return (
    <div className="relative flex min-h-screen flex-col">
      <WaveBg />

      {isForm && (
        <Link
          href="/"
          className="text-muted hover:text-text absolute top-5 left-6 z-10 flex items-center gap-1.5 text-[12px] no-underline transition-colors duration-150"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            <polyline points="9 2 4 7 9 12" />
          </svg>
          Retour
        </Link>
      )}

      {isForm && (
        <div className="border-border bg-bg3 absolute top-[18px] right-6 z-10 flex gap-0.5 rounded-lg border p-[3px]">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => switchTo(m)}
              className={`cursor-pointer rounded-md border-none px-3.5 py-[5px] text-[12px] transition-all duration-[180ms] ${
                mode === m
                  ? "bg-bg2 text-text shadow-[0_1px_4px_oklch(0%_0%_0_/_0.4)]"
                  : "text-muted bg-transparent"
              }`}
            >
              {m === "login" ? "Connexion" : "Inscription"}
            </button>
          ))}
        </div>
      )}

      <div className="relative z-[1] flex flex-1 items-center justify-center px-6 py-[60px]">
        <div
          className="border-border w-full max-w-[400px] rounded-[18px] border px-8 pt-9 pb-8 backdrop-blur-[20px]"
          style={{
            background: "oklch(12% 0.015 55 / 0.88)",
            boxShadow: "0 24px 80px oklch(0% 0% 0 / 0.5)",
          }}
        >
          <div key={key}>
            {mode === "login" && (
              <LoginForm
                onSwitch={() => switchTo("signup")}
                onSuccess={() => switchTo("success-login")}
              />
            )}
            {mode === "signup" && (
              <SignupForm
                onSwitch={() => switchTo("login")}
                onSuccess={() => switchTo("success-signup")}
              />
            )}
            {(mode === "success-login" || mode === "success-signup") && (
              <SuccessScreen mode={mode === "success-login" ? "login" : "signup"} />
            )}
          </div>
        </div>
      </div>

      <div className="relative z-[1] pb-6 text-center">
        <p className="text-[11px] tracking-[0.05em]" style={{ color: "oklch(35% 0.01 55)" }}>
          © 2026 Echos · Capturer ce qui compte
        </p>
      </div>
    </div>
  )
}
