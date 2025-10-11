import './globals.css'

export const metadata = {
  title: 'Matrix Future - DeepSeek',
  description: 'Intelligent Solutions, Deep Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
