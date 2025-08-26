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
  title: "Life Money - CFP® Certified Financial Planning | Divorce, Inheritance & Business Sale Experts | GTA",
  description: "Get expert CFP® certified financial planning for life transitions. Free consultations for divorce, inheritance, business sales & severance planning across Toronto, Mississauga, Brampton & all GTA. Call today!",
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
    title: 'Life Money - CFP® Certified Financial Planning | GTA Experts',
    description: "Get expert CFP® certified financial planning for life transitions. Free consultations for divorce, inheritance, business sales & severance planning across the GTA.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Money - CFP® Certified Financial Planning | GTA Experts',
    description: "Get expert CFP® certified financial planning for life transitions. Free consultations for divorce, inheritance, business sales & severance planning across the GTA.",
  },
  verification: {
    google: 'mhlzLkvd9HxIG32i_Aw3dsNTfD1nH892gsBoSPpKnaY',
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
