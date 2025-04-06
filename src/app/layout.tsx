import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:{
    default: "Aymane | Personal Portfolio",
    template: "%s | Aymane"
  },
  description: "Aymane personal portfolio website",
  keywords: ['développement web', 'SEO', 'front end developer', 'developpeur front end', 'développeur web', 'web developer', 'développement web', 'portfolio'],
  authors: [{ name: 'Aymane Bachar' }],
  creator: 'Aymane Bachar',
  publisher: 'Aymane Bachar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.x-Web.vercel.app/',
    title: 'Aymane | Personal Portfolio',
    description: 'Aymane personal portfolio website spécialisée dans le développement web, l&aposoptimisation SEO et la formation numérique.',
    siteName: 'Aymane',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aymane | Personal Portfolio',
    description: 'Aymane personal portfolio website spécialisée dans le développement web, l&aposoptimisation SEO et la formation numérique.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}
;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning  className="scroll-smooth" >
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ThemeProvider>     
      </body>
    </html>
  );
}
