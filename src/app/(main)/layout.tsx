import { Nav } from "@/components/organisms/Nav"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
