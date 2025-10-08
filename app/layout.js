import '../styles/globals.css'

export const metadata = {
  title: 'Matrix Future Development',
  description: 'Building Tomorrow\'s Solutions Today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
