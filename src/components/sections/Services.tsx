"use client";
import React from "react";
import {
    LucideMonitorSmartphone,
    LucideShoppingCart,
    LucideCloud,
    LucideSmartphone,
    LucidePencilLine,
    LucideTrendingUp,
    LucidePalette,
    LucidePenTool,
    LucideSearch,
    LucideArrowRight,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export function Services() {
    return (
        <section className="mt-20 lg:mt-40 px-4 md:px-10 lg:px-24">
            <div className="lg:flex items-start justify-between mb-20">
                <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Nos services
                </h2>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="#pricing">
                        Voir nos tarifs{" "}
                        <LucideArrowRight size={20} className="ml-6 md:ml-10" />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {/* Site vitrine */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideMonitorSmartphone className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Création de site vitrine
                    </h4>
                    <p>
                        Design responsive, intégration CMS, et maintenance
                        incluse pour mettre en valeur votre entreprise.
                    </p>
                </div>

                {/* E-commerce */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideShoppingCart className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        E-commerce
                    </h4>
                    <p>
                        Création de boutiques en ligne avec paiement sécurisé,
                        gestion des produits et design personnalisé.
                    </p>
                </div>

                {/* SaaS */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideCloud className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        SaaS
                    </h4>
                    <p>
                        Développement de solutions SaaS sur mesure, évolutives
                        et performantes.
                    </p>
                </div>

                {/* Application Mobile */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideSmartphone className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Application Mobile
                    </h4>
                    <p>
                        Création d'applications mobiles natives (iOS & Android)
                        pour une expérience utilisateur optimale.
                    </p>
                </div>

                {/* Community Management */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucidePencilLine className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Community Management
                    </h4>
                    <p>
                        Gestion de vos réseaux sociaux, création de contenu
                        engageant et animation de votre communauté.
                    </p>
                </div>

                {/* Conception Graphique */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucidePalette className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Conception Graphique
                    </h4>
                    <p>
                        Création de logos, chartes graphiques, supports visuels
                        et identité de marque percutante.
                    </p>
                </div>

                {/* UI/UX Design */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucidePenTool className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        UI/UX Design
                    </h4>
                    <p>
                        Conception d'interfaces utilisateur intuitives et
                        expériences utilisateur optimisées pour tous vos
                        supports.
                    </p>
                </div>

                {/* Campagne Publicitaire */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideTrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Campagne Publicitaire
                    </h4>
                    <p>
                        Mise en place de campagnes publicitaires efficaces sur
                        les plateformes digitales pour atteindre vos objectifs.
                    </p>
                </div>

                {/* Référencement (SEO) */}
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideSearch className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Référencement (SEO)
                    </h4>
                    <p>
                        Optimisation de votre site web pour un meilleur
                        positionnement dans les résultats de recherche.
                    </p>
                </div>
            </div>
        </section>
    );
}
