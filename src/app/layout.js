import { Montserrat, IBM_Plex_Sans_Arabic} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
const inter2 =IBM_Plex_Sans_Arabic({ subsets: ['latin'], weight: ['200', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter2.className}`}>
        <main className='relative min-w-full min-h-screen flex flex-col justify-between overflow-x-hidden '>
          <Navigation />
          <div className='flex-1 px-10 2xl:px-40'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
