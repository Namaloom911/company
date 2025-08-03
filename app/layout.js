import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Digivelopers - AI-Powered Digital Solutions",
  description:
    "Transform your digital presence with cutting-edge AI automation, web development, and digital marketing solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
