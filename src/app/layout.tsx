import { Metadata } from "next"
import "styles/globals.css"
import { patuaOne } from "./fonts"
import { ReactNode } from "react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"


export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={patuaOne.className}>
    <body>
    <main className="relative">{props.children}</main>
    </body>
    </html>
  )
}
