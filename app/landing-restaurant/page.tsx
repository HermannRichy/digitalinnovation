import type { Metadata } from "next";
import Link from "next/link";
import {
    MoveRight,
    Utensils,
    Calendar,
    QrCode,
    Smartphone,
    Zap,
    ChefHat,
    PartyPopper,
    Gift,
    Clock,
    Shield,
    Check,
    Star,
    Phone,
    MessageCircle,
} from "lucide-react";
import { SparklesText } from "@/src/components/magicui/sparkles-text";
import { MagicCard } from "@/src/components/magicui/magic-card";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { Badge } from "@/src/components/ui/badge";
import { Footer } from "@/src/components/sections/Footer";

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

export default function RestaurantsFetesPage() {
    const whatsappNumber = "2290166360300";
    const whatsappMessage =
        "Bonjour ! Je suis intéressé(e) par la solution digitale pour mon restaurant. Pouvez-vous m'en dire plus ?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-amber-950/20 to-dark text-light">
                {/* Hero - Spécial Fêtes */}
                <AuroraBackground>
                    <div className="container mx-auto px-4 md:px-6 text-white flex flex-col justify-center items-center text-center relative z-10 pt-20">
                        <Badge className="relative top-2 lg:top-5 -rotate-8 bg-gradient-to-r from-amber-500 to-red-500 text-black">
                            🎄 Offre Spéciale Fêtes de Fin d&apos;Année 🎅
                        </Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight font-space-grostek mt-6">
                            <SparklesText
                                colors={{ first: "#FFD700", second: "#FF6B6B" }}
                            >
                                Boostez Votre Restaurant Pour Les Fêtes !
                            </SparklesText>
                        </h1>
                        <p className="mt-6 text-xl lg:text-2xl text-amber-100 font-medium">
                            Menu Digital QR Code + Commande en Ligne + Système
                            de Gestion
                        </p>
                        <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-3xl">
                            Digitalisez votre restaurant pour la saison des
                            fêtes. <br />
                            <span className="text-amber-300 font-semibold">
                                Service accéléré, moins d&apos;erreurs, plus de
                                ventes !
                            </span>
                        </p>

                        <div className="mt-10 flex flex-col items-center gap-4">
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl font-bold font-space-grostek bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
                                    300.000 FCFA
                                </div>
                                <p className="text-amber-200 mt-2">
                                    Solution complète • Livraison en 7 jours
                                </p>
                            </div>

                            <Link
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-8 py-2 text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                            >
                                <MessageCircle size={20} />
                                Discuter sur WhatsApp
                                <MoveRight
                                    className="group-hover:translate-x-2 transition-transform"
                                    size={20}
                                />
                            </Link>

                            <p className="text-sm text-amber-100/70 mt-2">
                                Réponse garantie dans l&apos;heure • 01 66 36 03
                                00
                            </p>
                        </div>
                    </div>
                </AuroraBackground>

                {/* Problèmes Restaurants */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Badge className="relative top-2 lg:top-3 -rotate-8 bg-amber-500/20 text-amber-300 border-amber-500/30">
                                Les défis des fêtes
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-6 text-white">
                                La saison des fêtes, votre plus grosse
                                opportunité...
                                <br />
                                <span className="text-amber-300">
                                    si vous êtes bien équipé !
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: (
                                        <Clock
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Files d'attente interminables",
                                    description:
                                        "Les clients impatients partent chez la concurrence pendant les heures de pointe.",
                                },
                                {
                                    icon: (
                                        <Utensils
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Erreurs de commande fréquentes",
                                    description:
                                        "Stress du personnel = commandes mélangées = clients mécontents.",
                                },
                                {
                                    icon: (
                                        <ChefHat
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Cuisine submergée",
                                    description:
                                        "Les commandes s'accumulent, la qualité baisse, le service ralentit.",
                                },
                                {
                                    icon: (
                                        <Smartphone
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Pas de commande en ligne",
                                    description:
                                        "Vous perdez les clients qui préfèrent commander depuis chez eux.",
                                },
                                {
                                    icon: (
                                        <Calendar
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Réservations chaotiques",
                                    description:
                                        "Gestion manuelle des réservations = double réservations = conflits.",
                                },
                                {
                                    icon: (
                                        <Gift
                                            className="text-red-400"
                                            size={24}
                                        />
                                    ),
                                    title: "Opportunités perdues",
                                    description:
                                        "Pas de système pour promouvoir vos spécialités fêtes ou offres groupées.",
                                },
                            ].map((item, index) => (
                                <MagicCard
                                    key={index}
                                    className="rounded-2xl p-6 border border-red-500/20 bg-gradient-to-br from-red-950/20 to-dark"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-20 bg-gradient-to-b from-dark to-amber-950/10">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Badge className="relative top-2 lg:top-3 -rotate-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                                Notre solution
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-6 text-white">
                                Tout ce dont vous avez besoin dans{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-400">
                                    une seule solution
                                </span>
                            </h2>
                            <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
                                Digital Innovation transforme votre restaurant
                                en établissement moderne et efficace,
                                spécialement optimisé pour la saison des fêtes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <MagicCard className="rounded-3xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-dark">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                                        <QrCode
                                            size={32}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Menu Digital QR Code
                                    </h3>
                                    <p className="text-gray-300">
                                        Plus besoin d&apos;imprimer des menus !
                                        Vos clients scannent, consultent en
                                        ligne, commandent directement.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Mise à jour des prix en temps réel",
                                        "Photos professionnelles des plats",
                                        "Description détaillée des spécialités",
                                        "Allergènes et informations nutritionnelles",
                                        "Langues multiples (FR, EN)",
                                        "Disponibilité en temps réel",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <Check
                                                className="text-green-400 flex-shrink-0"
                                                size={18}
                                            />
                                            <span className="text-gray-200">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </MagicCard>

                            <div className="space-y-8">
                                <MagicCard className="rounded-2xl p-6 border border-green-500/30 bg-gradient-to-br from-green-950/20 to-dark">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <Smartphone
                                                className="text-green-400"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-white">
                                                Commande en Ligne & Sur Place
                                            </h3>
                                            <p className="text-gray-300">
                                                Votre client scanne le QR Code,
                                                commande, paie (optionnel), la
                                                commande arrive directement en
                                                cuisine.
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>

                                <MagicCard className="rounded-2xl p-6 border border-blue-500/30 bg-gradient-to-br from-blue-950/20 to-dark">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <ChefHat
                                                className="text-blue-400"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-white">
                                                Interface Cuisine
                                            </h3>
                                            <p className="text-gray-300">
                                                Écran dédié en cuisine :
                                                commandes organisées par heure,
                                                statut modifiable, historique
                                                complet.
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>

                                <MagicCard className="rounded-2xl p-6 border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-dark">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                            <Calendar
                                                className="text-purple-400"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-white">
                                                Réservations Intelligentes
                                            </h3>
                                            <p className="text-gray-300">
                                                Calendrier intégré, confirmation
                                                automatique, rappels SMS,
                                                gestion des tables optimisée.
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>

                                <MagicCard className="rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-dark">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                                            <PartyPopper
                                                className="text-amber-400"
                                                size={24}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-white">
                                                Spécial Fêtes
                                            </h3>
                                            <p className="text-gray-300">
                                                Menu spécial fêtes, offres
                                                groupées, cadeaux digitaux,
                                                cartes cadeaux électroniques.
                                            </p>
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Offre & Tarifs */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Badge className="relative top-2 lg:top-3 -rotate-8 bg-gradient-to-r from-amber-500 to-red-500 text-black">
                                🎁 Offre Limitée Fêtes
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-6 text-white">
                                Solution Complète à{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-400">
                                    300.000 FCFA
                                </span>
                            </h2>
                            <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
                                Tout inclus • Installation en 7 jours •
                                Formation offerte
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <MagicCard className="rounded-3xl p-8 border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-dark to-red-950/20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Colonne gauche : Inclus */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            <Star
                                                className="text-amber-400"
                                                size={24}
                                            />
                                            Tout ce qui est inclus
                                        </h3>

                                        <div className="space-y-6">
                                            {[
                                                {
                                                    category: "📱 Menu Digital",
                                                    items: [
                                                        "QR Code personnalisé",
                                                        "Menu interactif",
                                                        "Mise à jour illimitée",
                                                        "Photos professionnelles (10 plats)",
                                                    ],
                                                },
                                                {
                                                    category:
                                                        "🛒 Système de Commande",
                                                    items: [
                                                        "Commande via QR Code",
                                                        "Interface cuisine",
                                                        "Paiement en ligne intégré",
                                                        "Gestion des stocks basique",
                                                    ],
                                                },
                                                {
                                                    category:
                                                        "🎯 Fonctionnalités Fêtes",
                                                    items: [
                                                        "Menu spécial fêtes",
                                                        "Offres groupées",
                                                        "Réservations en ligne",
                                                        "Cartes cadeaux digitales",
                                                    ],
                                                },
                                                {
                                                    category:
                                                        "⚙️ Support & Formation",
                                                    items: [
                                                        "Installation en 7 jours",
                                                        "Formation équipe",
                                                        "Support 1 mois",
                                                        "Hébergement 1 an",
                                                    ],
                                                },
                                            ].map((group, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-black/30 rounded-xl p-4"
                                                >
                                                    <h4 className="font-semibold text-amber-300 mb-3">
                                                        {group.category}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {group.items.map(
                                                            (item, itemIdx) => (
                                                                <li
                                                                    key={
                                                                        itemIdx
                                                                    }
                                                                    className="flex items-center gap-2 text-gray-200"
                                                                >
                                                                    <Check
                                                                        className="text-green-400"
                                                                        size={
                                                                            16
                                                                        }
                                                                    />
                                                                    <span className="text-sm">
                                                                        {item}
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Colonne droite : Paiement & CTA */}
                                    <div>
                                        <div className="bg-gradient-to-br from-amber-900/30 to-red-900/30 rounded-2xl p-6 mb-8">
                                            <h3 className="text-xl font-bold text-white mb-4">
                                                Options de Paiement Flexibles
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-black/40 rounded-xl p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-200">
                                                            Paiement unique
                                                        </span>
                                                        <Badge className="bg-gradient-to-r from-amber-500 to-red-500">
                                                            -0 FCFA
                                                        </Badge>
                                                    </div>
                                                    <div className="text-3xl font-bold text-white">
                                                        300.000 FCFA
                                                    </div>
                                                    <p className="text-sm text-amber-200 mt-1">
                                                        Économisez sur les frais
                                                    </p>
                                                </div>

                                                <div className="bg-black/40 rounded-xl p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-200">
                                                            2 échéances
                                                        </span>
                                                        <Badge
                                                            variant="outline"
                                                            className="border-amber-500/50"
                                                        >
                                                            Popular
                                                        </Badge>
                                                    </div>
                                                    <div className="text-3xl font-bold text-white">
                                                        150.000 FCFA × 2
                                                    </div>
                                                    <p className="text-sm text-gray-300">
                                                        Total : 300.000 FCFA
                                                    </p>
                                                </div>

                                                <div className="bg-black/40 rounded-xl p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-200">
                                                            3 échéances
                                                        </span>
                                                    </div>
                                                    <div className="text-3xl font-bold text-white">
                                                        100.000 FCFA × 3
                                                    </div>
                                                    <p className="text-sm text-gray-300">
                                                        Total : 300.000 FCFA
                                                    </p>
                                                </div>

                                                <div className="bg-black/40 rounded-xl p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-200">
                                                            4 échéances
                                                        </span>
                                                    </div>
                                                    <div className="text-3xl font-bold text-white">
                                                        75.000 FCFA × 4
                                                    </div>
                                                    <p className="text-sm text-gray-300">
                                                        Total : 300.000 FCFA
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Principal */}
                                        <div className="text-center">
                                            <Link
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-8 py-2 text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group w-full mb-4"
                                            >
                                                <MessageCircle
                                                    size={20}
                                                />
                                                Commander maintenant
                                                <MoveRight
                                                    className="group-hover:translate-x-2 transition-transform"
                                                    size={20}
                                                />
                                            </Link>

                                            <div className="flex items-center justify-center gap-4 text-xs text-gray-300">
                                                <div className="flex items-center gap-2">
                                                    <Shield
                                                        className="text-amber-400"
                                                        size={16}
                                                    />
                                                    <span>
                                                        Garantie 30 jours
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Zap
                                                        className="text-amber-400"
                                                        size={16}
                                                    />
                                                    <span>
                                                        Installation 7 jours
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </section>

                {/* Témoignages & Urgence */}
                <section className="py-20 bg-gradient-to-b from-dark to-amber-950/10">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <Badge className="relative top-2 lg:top-3 -rotate-8 bg-gradient-to-r from-red-500 to-amber-500 text-white">
                                ⏱️ Urgence Fêtes
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-6 text-white">
                                Prêt pour la ruée des fêtes ?
                            </h2>
                            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                                Les fêtes approchent à grands pas. Ne laissez
                                pas les opportunités vous échapper.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <MagicCard className="rounded-2xl p-8 border border-red-500/30 bg-gradient-to-br from-red-950/20 to-dark">
                                <div className="text-center">
                                    <Clock
                                        className="text-red-400 mx-auto mb-4"
                                        size={48}
                                    />
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Dernier Délai
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Pour être opérationnel avant le pic des
                                        fêtes, nous devons commencer votre
                                        projet avant le{" "}
                                        <strong className="text-amber-300">
                                            15 décembre
                                        </strong>
                                        .
                                    </p>
                                    <div className="text-3xl font-bold text-red-400 font-space-grostek">
                                        7 JOURS
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Délai d&apos;installation moyen
                                    </p>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-green-500/30 bg-gradient-to-br from-green-950/20 to-dark">
                                <div className="text-center">
                                    <Phone
                                        className="text-green-400 mx-auto mb-4"
                                        size={48}
                                    />
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Contact Direct
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Parlez directement à notre expert
                                        restaurants. Réponse garantie dans
                                        l&apos;heure.
                                    </p>
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-8 py-2 font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                                    >
                                        <MessageCircle
                                            className="mr-2"
                                            size={20}
                                        />
                                        01 66 36 03 00
                                    </Link>
                                    <p className="text-sm text-gray-400 mt-4">
                                        Ou cliquez sur le bouton WhatsApp
                                    </p>
                                </div>
                            </MagicCard>
                        </div>

                        {/* CTA Final */}
                        <div className="text-center mt-16">
                            <div className="bg-gradient-to-r from-amber-900/20 via-red-900/20 to-amber-900/20 rounded-3xl p-8 max-w-3xl mx-auto">
                                <PartyPopper
                                    className="text-amber-400 mx-auto mb-4"
                                    size={48}
                                />
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Ne ratez pas la saison la plus lucrative de
                                    l&apos;année !
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                    Des dizaines de restaurants nous font déjà
                                    confiance. Rejoignez-les et transformez
                                    votre établissement avant les fêtes.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-8 py-2 text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                                    >
                                        <MessageCircle
                                            size={24}
                                        />
                                        Discuter avec un expert
                                        <MoveRight
                                            className="group-hover:translate-x-2 transition-transform"
                                            size={20}
                                        />
                                    </Link>

                                    <Link
                                        href="tel:0166360300"
                                        className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-full px-8 py-2 text-sm font-semibold hover:from-amber-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                    >
                                        <Phone className="mr-2" size={24} />
                                        Appeler maintenant
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
