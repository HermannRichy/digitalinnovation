import localFont from "next/font/local";

export const kindAvenue = localFont({
    src: [
        {
            path: "../public/fonts/kind-avenue.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-kind-avenue",
    display: "swap",
});

export const gebuk = localFont({
    src: [
        {
            path: "../public/fonts/gebuk.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-gebuk",
    display: "swap",
});
