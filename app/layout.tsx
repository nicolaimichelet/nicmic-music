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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                            ml('account', '1771157');
                        `,
                    }}
                />
            </body>
        </html>
    );
}
