import type { Metadata } from "next";
import "./globals.css"; 

import { Inter } from "next/font/google";
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoSpex"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning={true}>
      <body className="min-h-screen font-sans antialiased bg-carbon" suppressHydrationWarning={true}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
