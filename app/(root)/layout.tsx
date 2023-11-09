import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import RootLayoutWrapper from '@/components/shared/providers/RootLayoutWrapper'
import InformationNavigation from '@/components/shared/navigation/InformationNavigation'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Community Dev',
  description:
    'This is platform for developers community, to explore, solve and find problems about coding and programming'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <RootLayoutWrapper informationComponent={<InformationNavigation />}>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  )
}
