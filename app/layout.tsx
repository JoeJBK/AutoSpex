import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
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
      <body className="min-h-screen bg-off-white font-sans antialiased" suppressHydrationWarning={true}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>

        {/* </ThemeProvider> */}

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
