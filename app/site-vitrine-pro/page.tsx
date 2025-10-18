import type { Metadata } from "next";
import Link from "next/link";
import {
    MoveRight,
    Palette,
    Target,
    Zap,
    Globe,
    DollarSign,
    Shield,
    Rocket,
    Lock,
    Sparkles,
    Info,
    Check,
    Star,
    Plus,
} from "lucide-react";
import { SparklesText } from "@/src/components/magicui/sparkles-text";
import { MagicCard } from "@/src/components/magicui/magic-card";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { Badge } from "@/src/components/ui/badge";
import { Alert, AlertDescription } from "@/src/components/ui/alert";
import { DevisForm } from "@/src/components/DevisForm";
import { Footer } from "@/src/components/sections/Footer";

export const metadata: Metadata = {
    title: "Démo gratuite et audit de site web | Digital Innovation",
    description:
        "Obtenez votre démo gratuite et audit de site web personnalisé. Maquette de votre futur site ou analyse complète de votre site existant.",
    openGraph: {
        title: "Démo gratuite et audit de site web | Digital Innovation",
        description:
            "Obtenez votre démo gratuite et audit de site web personnalisé. Maquette de votre futur site ou analyse complète de votre site existant.",
        type: "website",
        url: "https://digitalinnovation.bj/site-vitrine-pro",
        images: [
            {
                url: "/images/opengraphsite.png",
                width: 1200,
                height: 630,
                alt: "Création de site vitrine - Digital Innovation",
            },
        ],
    },
};

export default function SiteVitrineProPage() {
    return (
        <>
            <main className="min-h-screen bg-dark text-light">
                {/* Hero */}
                <AuroraBackground>
                    <div className="container mx-auto px-4 md:px-6 text-white flex flex-col justify-center items-center text-center relative z-10">
                        <Badge className="relative top-2 lg:top-5 -rotate-8">
                            Livré en 10 jours
                        </Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight font-space-grostek">
                            <SparklesText>
                                Site vitrine pro qui transforme vos visiteurs en
                                leads qualifiés
                            </SparklesText>
                        </h1>
                        <p className="mt-4 text-muted-foreground text-base lg:text-lg">
                            Site vitrine moderne, performant, optimisé SEO et
                            conversions. <br />
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="#devis"
                                className="flex items-center justify-center text-black rounded-md group"
                            >
                                <span className="px-8 py-2 rounded-full text-xs bg-primary group-hover:bg-transparent group-hover:text-primary border border-primary transition-all duration-300">
                                    Obtenir une démo
                                </span>
                                <span className="w-8 h-8 rounded-full flex items-center justify-center border border-primary group-hover:bg-primary relative right-1">
                                    <MoveRight
                                        size={20}
                                        className="text-primary group-hover:text-black group-hover:rotate-45 transition-all duration-300"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </AuroraBackground>
                {/* Features */}
                <section className="min-h-screen overflow-hidden flex items-center mt-20">
                    <div className="container mx-auto px-4 md:px-6 text-white flex flex-col justify-center items-center gap-5">
                        <div className="text-center">
                            <Badge className="relative top-2 lg:top-3 -rotate-8">
                                Fonctionnalités
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek">
                                Bien plus qu&apos;une simple vitrine...
                            </h2>
                            <p className="mt-4 text-muted-foreground text-sm lg:text-base">
                                Une machine à conversion qui conquit le coeur de
                                votre futur client.
                            </p>
                            <Link
                                href="#devis"
                                className="flex items-center justify-center text-black mt-4 rounded-md group"
                            >
                                <span className="px-8 py-2 rounded-full text-xs bg-primary group-hover:bg-transparent group-hover:text-primary border border-primary transition-all duration-300">
                                    Obtenir une démo
                                </span>
                                <span className="w-8 h-8 rounded-full flex items-center justify-center border border-primary group-hover:bg-primary relative right-1">
                                    <MoveRight
                                        size={20}
                                        className="text-primary group-hover:text-black group-hover:rotate-45 transition-all duration-300"
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
                            <MagicCard className="rounded-2xl p-5 border border-primary/10">
                                <div className="flex flex-col items-start gap-y-8">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Palette
                                            className="text-primary"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 font-space-grostek">
                                            UX/UI exceptionnelle
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Design moderne et intuitif qui guide
                                            naturellement vos visiteurs vers
                                            l&apos;action et maximise les
                                            conversions.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <MagicCard className="rounded-2xl p-5 border border-primary/10">
                                <div className="flex flex-col items-start gap-y-8">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Target
                                            className="text-primary"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 font-space-grostek">
                                            Message clair & positionnement fort
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Proposition de valeur percutante et
                                            stratégie de contenu qui différencie
                                            votre marque de la concurrence.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <MagicCard className="rounded-2xl p-5 border border-primary/10">
                                <div className="flex flex-col items-start gap-y-8">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Zap
                                            className="text-primary"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2 font-space-grostek">
                                            Performance & confiance
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Vitesse optimale, sécurité renforcée
                                            et fiabilité technique pour inspirer
                                            confiance à vos prospects.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="min-h-screen overflow-hidden flex items-center mt-20">
                    <div className="container mx-auto px-4 md:px-6 text-white">
                        <div className="text-center mb-16">
                            <Badge className="relative top-2 lg:top-3 -rotate-8">
                                Pourquoi nous ?
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-4">
                                Pourquoi nous confier votre site vitrine ?
                            </h2>
                            <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-3xl mx-auto">
                                A Digital Innovation, nous ne créons pas juste
                                des sites web, nous construisons des{" "}
                                <Badge className="-rotate-3 text-black">
                                    machines à conversion
                                </Badge>
                                qui inspirent confiance et transforment vos
                                visiteurs en clients fidèles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Globe
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Un site qui attire, impressionne et
                                            convertit
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Votre site ne doit pas juste
                                            exister. Nous créons une{" "}
                                            <Badge
                                                variant="secondary"
                                                className="mx-1"
                                            >
                                                vitrine digitale impactante
                                            </Badge>
                                            , pensée pour captiver vos visiteurs
                                            et les transformer en clients.
                                            Chaque page est optimisée pour la{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                visibilité
                                            </Badge>
                                            , la{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                crédibilité
                                            </Badge>{" "}
                                            et la{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                conversion
                                            </Badge>
                                            .
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Une présence en ligne qui inspire
                                            confiance dès le premier clic.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Rocket
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Une équipe jeune, créative et à
                                            votre écoute
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Chez{" "}
                                            <Badge
                                                variant="secondary"
                                                className="mx-1"
                                            >
                                                Digital Innovation
                                            </Badge>
                                            , nous mettons{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                toute notre énergie
                                            </Badge>{" "}
                                            dans chaque projet. Pas de solutions
                                            copiées-collées : chaque site est{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                sur mesure
                                            </Badge>
                                            , adapté à votre secteur et à vos
                                            objectifs spécifiques.
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Vous n&apos;êtes pas juste un
                                            client, vous devenez un partenaire.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <DollarSign
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Une offre accessible, sans compromis
                                            sur la qualité
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Vous débutez ou vous avez un budget
                                            limité ? Nous proposons des{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                formules flexibles
                                            </Badge>{" "}
                                            et{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                paiements échelonnés
                                            </Badge>{" "}
                                            pour rendre la qualité
                                            professionnelle accessible à tous
                                            les entrepreneurs ambitieux.
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Commencez petit, grandissez avec
                                            nous.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Lock
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Performance, sécurité et
                                            référencement inclus
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Nos sites sont{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                rapides
                                            </Badge>
                                            ,{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                sécurisés
                                            </Badge>{" "}
                                            et{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                optimisés pour Google
                                            </Badge>
                                            . De la configuration technique au
                                            SEO de base, tout est inclus pour
                                            assurer une présence solide et
                                            durable.
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Votre site est prêt à performer dès
                                            sa mise en ligne.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Shield
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Garantie satisfaction et
                                            accompagnement continu
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Nous offrons{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                30 jours de modifications
                                                gratuites
                                            </Badge>{" "}
                                            et un{" "}
                                            <Badge
                                                variant="outline"
                                                className="mx-1"
                                            >
                                                support technique
                                            </Badge>{" "}
                                            pour garantir votre satisfaction
                                            totale. Votre succès est notre
                                            priorité absolue.
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Nous sommes là pour vous accompagner
                                            sur le long terme.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>

                            <MagicCard className="rounded-2xl p-8 border border-primary/10 h-full">
                                <div className="flex flex-col gap-4 h-full">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Sparkles
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4 font-space-grostek">
                                            Une agence locale, fière
                                            d&apos;accompagner les marques
                                            béninoises
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Digital Innovation, c&apos;est une{" "}
                                            <Badge
                                                variant="secondary"
                                                className="mx-1"
                                            >
                                                agence web basée au Bénin
                                            </Badge>
                                            , proche de ses clients et engagée
                                            dans la réussite des entreprises
                                            locales. Nous comprenons vos
                                            réalités, vos défis et vos
                                            ambitions.
                                        </p>
                                    </div>
                                    <Alert className="border-primary/20 bg-primary/5">
                                        <Info
                                            className="text-primary"
                                            size={16}
                                        />
                                        <AlertDescription className="text-primary font-medium">
                                            Avec nous, vous investissez dans une
                                            solution fiable, créée ici, pour
                                            vous.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="min-h-screen overflow-hidden flex items-center mt-20">
                    <div className="container mx-auto px-4 md:px-6 text-white">
                        <div className="text-center mb-16">
                            <Badge className="relative top-2 lg:top-3 -rotate-8">
                                Tarifs
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-4">
                                Un tarif simple, transparent et accessible
                            </h2>
                            <p className="mt-4 text-muted-foreground text-sm lg:text-base max-w-3xl mx-auto">
                                Commencez à{" "}
                                <Badge className="-rotate-3 text-black">
                                    200.000 FCFA
                                </Badge>{" "}
                                et choisissez votre rythme de paiement. Plus de
                                fonctionnalités = plus de valeur, mais toujours
                                à un prix juste.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <MagicCard className="rounded-3xl p-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                                <div className="text-center mb-8">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <Star
                                            className="text-primary"
                                            size={24}
                                        />
                                        <h3 className="text-2xl font-bold font-space-grostek">
                                            Site Vitrine Pro
                                        </h3>
                                        <Star
                                            className="text-primary"
                                            size={24}
                                        />
                                    </div>
                                    <div className="text-5xl font-bold text-primary mb-2 font-space-grostek">
                                        200.000 FCFA
                                    </div>
                                    <p className="text-muted-foreground">
                                        Prix de base - Fonctionnalités
                                        essentielles
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="text-center p-4 rounded-xl bg-background/50 border border-primary/10">
                                        <h4 className="font-semibold mb-2">
                                            Paiement unique
                                        </h4>
                                        <div className="text-2xl font-bold text-primary font-space-grostek">
                                            200.000 FCFA
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Économisez 0 FCFA
                                        </p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-background/50 border border-primary/10">
                                        <h4 className="font-semibold mb-2">
                                            3 échéances
                                        </h4>
                                        <div className="text-2xl font-bold text-primary font-space-grostek">
                                            70.000 FCFA
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Total : 210.000 FCFA
                                        </p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-background/50 border border-primary/10">
                                        <h4 className="font-semibold mb-2">
                                            6 échéances
                                        </h4>
                                        <div className="text-2xl font-bold text-primary font-space-grostek">
                                            35.000 FCFA
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Total : 210.000 FCFA
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                            Inclus dans le tarif de base
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Design moderne et responsive
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    4 à 5 pages optimisées
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Optimisation SEO de base
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Formulaire de contact
                                                    fonctionnel
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Hébergement et nom de
                                                    domaine (1 an)
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Certificat SSL inclus
                                                </span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <Check
                                                    className="text-primary"
                                                    size={16}
                                                />
                                                <span className="text-sm">
                                                    Livraison en 10 jours ouvrés
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                            <Plus
                                                className="text-primary"
                                                size={20}
                                            />
                                            Fonctionnalités supplémentaires
                                        </h4>
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-lg bg-background/30 border border-primary/10">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">
                                                        E-commerce basique
                                                    </span>
                                                    <Badge variant="outline">
                                                        +100.000 FCFA
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Jusqu&apos;à 10 produits,
                                                    panier, paiement
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-background/30 border border-primary/10">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">
                                                        Blog intégré
                                                    </span>
                                                    <Badge variant="outline">
                                                        +50.000 FCFA
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Système de gestion de posts
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-background/30 border border-primary/10">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">
                                                        Flux réseaux sociaux
                                                    </span>
                                                    <Badge variant="outline">
                                                        +25.000 FCFA
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Intégration flux Instagram,
                                                    Tiktok
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-background/30 border border-primary/10">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">
                                                        SEO avancé
                                                    </span>
                                                    <Badge variant="outline">
                                                        +50.000 FCFA
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Optimisation complète,
                                                    sitemap
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-8">
                                    <Link
                                        href="#devis"
                                        className="flex items-center justify-center text-black rounded-md group"
                                    >
                                        <span className="px-8 py-2 rounded-full text-xs bg-primary group-hover:bg-transparent group-hover:text-primary border border-primary transition-all duration-300">
                                            Obtenir une démo personnalisée
                                        </span>
                                        <span className="w-8 h-8 rounded-full flex items-center justify-center border border-primary group-hover:bg-primary relative right-1">
                                            <MoveRight
                                                size={20}
                                                className="text-primary group-hover:text-black group-hover:rotate-45 transition-all duration-300"
                                            />
                                        </span>
                                    </Link>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        Besoin d&apos;une fonctionnalité
                                        spécifique ? Parlons-en !
                                    </p>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </section>

                {/* Devis */}
                <section
                    id="devis"
                    className="min-h-screen overflow-hidden flex items-center my-20"
                >
                    <div className="container mx-auto px-4 md:px-6 text-white">
                        <div className="text-center mb-10">
                            <Badge className="relative top-2 lg:top-3 -rotate-8">
                                Obtenir votre démo
                            </Badge>
                            <h2 className="text-2xl md:text-4xl font-semibold leading-tight font-space-grostek mt-4">
                                Démarrons votre projet
                            </h2>
                            <p className="mt-3 text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
                                Dites-nous en plus sur vos besoins. Si vous avez déjà un site existant, nous vous offrons un audit gratuit. Sinon, nous créons une maquette personnalisée de votre futur site web.
                            </p>
                        </div>

                        <MagicCard className="rounded-3xl p-8 border border-primary/10">
                            <DevisForm />
                        </MagicCard>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
