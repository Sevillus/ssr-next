import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // Poprawiona ścieżka do pliku globals.css

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="pl">
      <head>
        <title>Słaba Wydajność Next.js</title>
      </head>
      <body>{children}</body>
      </html>
  );
}