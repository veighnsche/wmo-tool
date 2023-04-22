import './globals.css'

export const metadata = {
  title: 'WMO tool',
  description: 'Chatbot voor Mantelzorgers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
