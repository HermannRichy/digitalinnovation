"use client";
import React from "react";
import {
    LucideCheck,
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
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";

export function Pricing() {
    const tarifs = [
        {
            title: "Site vitrine",
            price: "200 000 – 400 000 FCFA",
            details: [
                "Design responsive",
                "5 pages max",
                "Intégration CMS",
                "Maintenance 1 an incluse",
            ],
        },
        {
            title: "E-commerce",
            price: "500 000 – 1 200 000 FCFA",
            details: [
                "Catalogue produits",
                "Paiement sécurisé",
                "Design personnalisé",
                "Formation utilisateur",
            ],
        },
        {
            title: "Application mobile",
            price: "1 000 000 – 4 000 000 FCFA",
            details: [
                "Design UI/UX",
                "Déploiement sur stores",
                "Tests de performance",
            ],
        },
        {
            title: "SaaS",
            price: "1 500 000 – 5 000 000 FCFA",
            details: [
                "Architecture cloud",
                "Gestion d'abonnements",
                "API sécurisées",
                "Tests utilisateurs",
            ],
        },
        {
            title: "Community Management",
            price: "150 000 – 500 000 FCFA/mois",
            details: [
                "Gestion de 3 réseaux sociaux",
                "Création de contenu",
                "Analyse mensuelle",
                "Engagement communautaire",
            ],
        },
        {
            title: "Conception graphique",
            price: "100 000 – 300 000 FCFA",
            details: [
                "Logo + charte graphique",
                "Fichiers vectoriels",
                "Guide d'utilisation",
                "Visuels print/web",
            ],
        },
        {
            title: "UI/UX Design",
            price: "200 000 – 800 000 FCFA",
            details: [
                "Wireframes interactifs",
                "Tests utilisateurs",
                "Maquettes haute fidélité",
                "Optimisation ergonomique",
            ],
        },
        {
            title: "Campagne publicitaire",
            price: "300 000 – 2 000 000 FCFA",
            details: [
                "Création de visuels",
                "Diffusion ciblée",
                "Suivi des performances",
                "Optimisation en temps réel",
            ],
        },
        {
            title: "Référencement (SEO)",
            price: "150 000 – 800 000 FCFA/mois",
            details: [
                "Audit technique",
                "Création de contenu SEO",
                "Backlinks qualitatifs",
                "Suivi des positions",
            ],
        },
    ];

    return (
        <section className="my-20 lg:mt-40 px-4 md:px-10 lg:px-24" id="pricing">
            <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-20">
                Nos Tarifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {tarifs.map((tarif, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-neon2 p-5"
                    >
                        <Badge className="mb-10">{tarif.title}</Badge>
                        <p className="text-lg font-bold mb-10">{tarif.price}</p>
                        <div className="flex flex-col gap-4">
                            {tarif.details.map((detail, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-4 h-4 p-1 rounded-full bg-primary text-dark flex items-center justify-center">
                                        <LucideCheck className="w-2 h-2" />
                                    </div>
                                    <span className="text-sm">{detail}</span>
                                </div>
                            ))}
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full mt-10"
                        >
                            <Link
                                href={`https://wa.me/2290166360300?text=Je%20souhaite%20souscrire%20au%20forfait%20${encodeURIComponent(
                                    tarif.title
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Souscrire
                                <LucideArrowRight
                                    size={20}
                                    className="ml-6 md:ml-10"
                                />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}
