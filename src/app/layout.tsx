import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalSchema from "@/components/seo/LocalSchema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Life Money | Expert Financial Planning in the GTA",
  description: "Specialized financial planning for divorce, inheritance, business sales, and job loss across the Greater Toronto Area. Based in Mississauga, serving all GTA cities.",
  keywords: "financial planner GTA, divorce financial advisor Toronto, inheritance planning Mississauga, business sale advisor, severance package planning",
  authors: [{ name: "Life Money" }],
  creator: "Life Money",
  publisher: "Life Money",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://lifemoney.ca',
    siteName: 'Life Money',
    title: 'Life Money | Expert Financial Planning in the GTA',
    description: "Specialized financial planning for divorce, inheritance, business sales, and job loss across the Greater Toronto Area.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Money | Expert Financial Planning in the GTA',
    description: "Specialized financial planning for divorce, inheritance, business sales, and job loss across the Greater Toronto Area.",
  },
  verification: {
    google: 'google-site-verification-token-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalSchema isHomepage={true} />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
