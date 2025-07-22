import '@/app/ui/global.css'
import { montserrat } from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <nav>
          <h1>Esto puede ser el header</h1>
        </nav>
        {children}
        <footer className="py-10 flex justify-center">
          Hecho por mi owo 😊✌🏻
        </footer>
      </body>
    </html>
  )
}
