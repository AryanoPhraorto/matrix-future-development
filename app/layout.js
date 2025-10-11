import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: "Matrix Future Development - Building Tomorrow's Solutions Today",
  description: 'Professional AI development company specializing in web applications, AI solutions, and data-driven platforms.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
