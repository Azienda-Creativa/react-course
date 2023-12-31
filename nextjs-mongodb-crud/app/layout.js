import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CRUD App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <div className="flex max-w-3xl mx-auto p-4">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
