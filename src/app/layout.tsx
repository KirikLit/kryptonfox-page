import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Metadata } from 'next';


const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'KryptonFox',
  description: 'personal page of KryptonFox',
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-zinc-900 text-white" lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center min-h-screen">
          <Navbar />
          <main className="container mt-[var(--header-h)] mx-auto flex-1 px-4">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}