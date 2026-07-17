import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bayanda Junior Mhlwathika | ICT Applications Development Graduate',
  description:
    'Portfolio of Bayanda Junior Mhlwathika — ICT Applications Development graduate, Microsoft Certified Azure Developer Associate, and Google AI Essentials holder specializing in AI, cloud, and cybersecurity.',
  generator: 'v0.app',
  keywords: [
    'Bayanda Junior Mhlwathika',
    'ICT Applications Development',
    'Azure Developer Associate',
    'Software Developer',
    'AI',
    'Cloud',
    'Cybersecurity',
    'Johannesburg',
  ],
  authors: [{ name: 'Bayanda Junior Mhlwathika' }],
  openGraph: {
    title: 'Bayanda Junior Mhlwathika | Software Developer Portfolio',
    description:
      'ICT Applications Development graduate | Azure Developer Associate | AI & Cloud Technology Enthusiast.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
