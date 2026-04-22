import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ubax — Somali & East African Cuisine | Portland, OR",
  description: "Authentic halal Somali and East African cuisine in Montavilla, Portland. Order by phone: (503) 933-7368. Open daily 11AM–8PM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }} className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
