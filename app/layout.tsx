import './globals.css'

export const metadata = {
  title: 'Matrix Future Development',
  description: 'Building Tomorrow\'s Solutions Today',
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
