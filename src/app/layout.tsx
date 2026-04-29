import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Echo — Partage sonore",
  description: "Votre espace pour publier et partager des sons enregistrés.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  )
}
