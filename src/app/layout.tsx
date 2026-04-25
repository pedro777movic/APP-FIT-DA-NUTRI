
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/hooks/use-auth';
import { Toaster } from '@/components/ui/toaster';

/**
 * CONFIGURAÇÃO GLOBAL DE METADATA E FONTES
 * Preservando a identidade visual premium com Poppins e PT Sans.
 */

export const metadata: Metadata = {
  title: "Cantinho Fit da Nutri | Oficial",
  description: 'Seu organizador alimentar leve, rápido e com receitas validadas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1F3D2B" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30">
        <AuthProvider>
          <div className="relative flex min-h-screen w-full flex-col bg-background selection:text-primary">
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
