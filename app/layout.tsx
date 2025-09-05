import type { Metadata } from "next";
import { Marck_Script, Crimson_Pro } from "next/font/google";
import "./globals.css";

const titleFont = Marck_Script({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-title",
});

const bodyFont = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Nicmic music",
    description: "Website for nicmic music",
    icons: {
        icon: "/favicon.svg", // Path to your SVG in the public folder
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
                className={`${titleFont.variable} ${bodyFont.variable} antialiased font-body`}
            >
                {children}
            </body>
        </html>
    );
}
