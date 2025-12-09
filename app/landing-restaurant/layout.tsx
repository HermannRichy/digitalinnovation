import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solution Digital Restaurants - Boostez vos ventes pour les fêtes | Digital Innovation",
    description:
        "Menu digital QR Code + Commande en ligne + Gestion des commandes. Offre spéciale fêtes à 300.000 FCFA. Transformez votre restaurant pour la saison des fêtes !",
    openGraph: {
        title: "Solution Digital Restaurants - Boostez vos ventes pour les fêtes | Digital Innovation",
        description:
            "Menu digital QR Code + Commande en ligne + Gestion des commandes. Offre spéciale fêtes à 300.000 FCFA.",
        type: "website",
        url: "https://digitalinnovation.bj/landing-restaurant",
        images: [
            {
                url: "/images/opengraph.png",
                width: 1200,
                height: 630,
                alt: "Solution Digital Restaurants - Digital Innovation",
            },
        ],
    },
};

export default function RestaurantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
