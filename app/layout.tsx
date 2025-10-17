import type { Metadata } from "next";
import { Outfit, Fira_Code, Space_Grotesk } from "next/font/google";
import { kindAvenue, gebuk } from "./fonts";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Digital Innovation",
    description: "Agence web et de communication digitale",
    openGraph: {
        title: "Digital Innovation - Agence web et communication digitale",
        description:
            "Nous offrons des solutions innovantes pour votre présence en ligne.",
        url: "https://digitalinnovation.bj",
        type: "website",
        images: [
            {
                url: "/images/opengraph.png",
                width: 1200,
                height: 630,
                alt: "Logo Digital Innovation avec fond créatif",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Innovation - Agence web et communication digitale",
        description: "Solutions innovantes pour votre présence en ligne.",
        images: ["/images/opengraph.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${outfit.variable} ${firaCode.variable} ${spaceGrotesk.variable} relative scroll-smooth antialiased font-outfit`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
