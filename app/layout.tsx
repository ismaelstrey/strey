import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Strey Portfolio',
  description: 'Showcase profissional em Next.js inspirado no layout original.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
