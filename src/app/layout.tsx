// app/layout.tsx
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth/next'
import { SessionProvider } from '../components/SessionProvider'
import Navigation from '../components/Navigation'
import { authOptions } from '../_lib/auth'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing content',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navigation />
          <main className="container mx-auto p-4">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}