import type {Metadata} from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'gleam genie - professional cleaning services',
  description: 'professional cleaning services for homes and offices. your space, spotlessly clean.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFAB />
        <Toaster />
      </body>
    </html>
  );
}
