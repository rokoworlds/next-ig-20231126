import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar/component'

export const revalidate = 10;

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'IG with Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}