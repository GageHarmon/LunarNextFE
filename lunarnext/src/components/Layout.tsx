import type { ReactNode } from "react"
import Navbar from "./Navbar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 w-full">{children}</main>
    </>
  )
}