import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Karanja Portfolio',
  description: 'I am Daniel Karanja, a fullstack software engineer based in Nairobi Kenya, I help bring brands online by providing them with top quality solutions for platforms including Android apps, IOS Apps and Web Apps',
  openGraph: {
    title: 'Daniel Karanja Portfolio',
    description: 'I am Daniel Karanja, a fullstack software engineer based in Nairobi Kenya, I help bring brands online by providing them with top quality solutions for platforms including Android apps, IOS Apps and Web Apps',
    url: 'https://agiraportfolio.vercel.app',
    siteName: 'Daniel Karanja Dev Portfolio',
    image: [
      {
        url: 'https://agiraportfolio.vercel.app/favicon.ico',
        width: 1260,
        height: 800
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
