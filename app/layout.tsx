import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Digital Innovation",
    description: "Agence web et de communication digitale",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.variable} ${firaCode.variable} relative scroll-smooth antialiased font-outfit`}
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
