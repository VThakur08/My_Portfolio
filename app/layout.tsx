import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishal Thakur - Full Stack Developer & UI/UX Designer',
  description: 'Premium portfolio showcasing innovative digital experiences and cutting-edge web development projects.',
  openGraph: {
    title: 'Vishal Thakur - Full Stack Developer',
    description: 'Crafting beautiful, functional digital experiences',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F1E" />
      </head>
      <body className={`${geist.className} bg-black text-white antialiased`}>
        <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
