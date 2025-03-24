import React from "react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function CTA() {
    return (
        <section
            className="relative mt-20 lg:mt-40 flex items-center justify-center h-screen bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: "url('images/cta-bg.jpeg')" }}
        >
            {/* Filtres superposés */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-secondary/50 to-dark/70 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-neon/20 via-secondary/30 to-dark/60 mix-blend-color-dodge"></div>

            {/* Effet de flou et de dégradé */}
            <div className="absolute top-1/2 left-1/2 w-full h-screen bg-gradient-radial from-dark/50 via-secondary/30 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Contenu */}
            <div className="relative z-10 text-center p-4 lg:p-8 rounded-lg max-w-2xl mx-auto">
                <h1 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Prêt à transformer vos idées en succès digital ?
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-default mb-6">
                    Faites le premier pas aujourd'hui. Contactez notre équipe
                    d'experts pour discuter de votre projet et découvrir comment
                    nous pouvons vous aider à atteindre vos objectifs.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/contact">
                        Parlez nous de votre projet{" "}
                        <LucideArrowRight size={20} className="ml-6 md:ml-10" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
