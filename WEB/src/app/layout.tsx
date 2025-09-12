import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  icons: {
    icon: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1757005747/98bccfeb-83f1-483c-a1f6-bfe4e97ef3ad.png",
    shortcut: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1757005747/98bccfeb-83f1-483c-a1f6-bfe4e97ef3ad.png",
    apple: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1757005747/98bccfeb-83f1-483c-a1f6-bfe4e97ef3ad.png",
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/djwzwq4cu/image/upload/v1756569005/505741758_18330309811162334_2253254708631389546_n_pjujvy.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['https://res.cloudinary.com/djwzwq4cu/image/upload/v1756569005/505741758_18330309811162334_2253254708631389546_n_pjujvy.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <link rel="shortcut icon" href="https://res.cloudinary.com/djwzwq4cu/image/upload/v1757005747/98bccfeb-83f1-483c-a1f6-bfe4e97ef3ad.png" type="image/x-icon" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/djwzwq4cu/image/upload/v1757005747/98bccfeb-83f1-483c-a1f6-bfe4e97ef3ad.png" type="image/x-icon" />

        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <AuthProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
