import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // Semibold
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nicmic music",
  description: "Website for nicmic music",
  icons: 
  {
    icon: '/favicon.svg', // Path to your SVG in the public folder
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
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
