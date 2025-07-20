import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Main',
  description: 'next.js starter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}