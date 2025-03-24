"use client";
import React from "react";
import {
    LucideUsers,
    LucideChartPie,
    LucidePencilRuler,
    LucideCodeXml,
    LucideTabletSmartphone,
    LucideRocket,
} from "lucide-react";

export function WorkFlow() {
    return (
        <section className="mt-20 lg:mt-40 px-4 md:px-10 lg:px-24">
            <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-20">
                Un workflow efficace <br /> pour un projet réussi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideUsers className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Écoute & Analyse
                    </h4>
                    <p className="">
                        Nous commençons par vous écouter attentivement.
                        Comprendre vos besoins, vos objectifs et votre vision
                        est essentiel pour poser les bases du projet.
                    </p>
                </div>
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideChartPie className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Stratégie & Planification
                    </h4>
                    <p className="">
                        Une fois vos besoins identifiés, nous définissons une
                        stratégie sur mesure et planifions chaque étape pour
                        garantir un déroulement sans accroc.
                    </p>
                </div>
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucidePencilRuler className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Design & Création
                    </h4>
                    <p className="">
                        Nos designers entrent en scène pour donner vie à votre
                        projet avec des visuels modernes, captivants et une
                        expérience utilisateur fluide.
                    </p>
                </div>
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideCodeXml className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Développement & Implémentation
                    </h4>
                    <p className="">
                        Nos développeurs transforment les concepts en réalité
                        grâce à un code propre, performant et sécurisé.
                    </p>
                </div>
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideTabletSmartphone className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Tests & Optimisation
                    </h4>
                    <p className="">
                        Avant le lancement, nous testons tout en détail pour
                        corriger les moindres bugs et optimiser les
                        performances.
                    </p>
                </div>
                <div className="rounded-2xl border border-neon2 p-5">
                    <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                        <LucideRocket className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-primary md:text-lg mb-5">
                        Lancement & Suivi
                    </h4>
                    <p className="">
                        Votre projet est mis en ligne, mais notre travail ne
                        s’arrête pas là. Nous vous accompagnons avec un suivi
                        régulier pour garantir un succès durable.
                    </p>
                </div>
            </div>
        </section>
    );
}
