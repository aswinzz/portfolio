import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aswin VB - Software Engineer",
  description: "Portfolio of Aswin VB, a Software Engineer specializing in web development",
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb', // blue-600
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      }
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Aswin VB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
