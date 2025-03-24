"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { LucideArrowRight, LucidePlus, LucideX } from "lucide-react";
import { Button } from "@/src/components/ui/button";

// Définition explicite du type FAQ
type FAQType = {
    question: string;
    answer: string;
};

const faqs: FAQType[] = [
    {
        question: "Quels types de projets Digital Innovation prend en charge ?",
        answer: "Nous gérons une large gamme de projets digitaux : conception et refonte de sites web, développement d’applications, UI/UX design, marketing digital, community management, et bien plus encore.",
    },
    {
        question: "Combien de temps faut-il pour terminer un projet ?",
        answer: "La durée dépend de la complexité du projet. Un site web simple peut être finalisé en 2 à 4 semaines, tandis qu’un développement d’application ou une stratégie marketing complète peut prendre plusieurs mois.",
    },
    {
        question:
            "Est-ce que Digital Innovation travaille avec des entreprises à l’étranger ?",
        answer: "Oui, absolument ! Bien que basés au Bénin, nous collaborons avec des clients à l’international. Grâce à nos outils digitaux, nous assurons un suivi fluide, où que vous soyez.",
    },
    {
        question:
            "Proposez-vous des services personnalisés selon les besoins ?",
        answer: "Oui ! Nous savons que chaque entreprise est unique. C’est pourquoi nos services sont entièrement personnalisables pour répondre parfaitement à vos attentes.",
    },
    {
        question: "Quels sont les coûts pour vos services ?",
        answer: "Les tarifs varient selon la nature et la portée du projet. Contactez-nous pour une consultation gratuite, et nous vous fournirons un devis adapté à vos besoins.",
    },
];

// Typage explicite du composant FAQItem
interface FAQItemProps {
    faq: FAQType;
    index: number;
    isOpen: boolean;
    onClick: (index: number) => void;
}

const FAQItem = ({ faq, index, isOpen, onClick }: FAQItemProps) => (
    <div className="mb-5 border-b border-neon2 pb-5">
        <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => onClick(index)}
        >
            <span className="font-bold font-heading text-lg text-primary">
                {index + 1}
            </span>
            <span className="flex-1 ml-4 font-semibold">{faq.question}</span>
            {isOpen ? (
                <LucideX className="w-5 h-5 text-primary" />
            ) : (
                <LucidePlus className="w-5 text-primary" />
            )}
        </div>
        {isOpen && <p className="mt-2">{faq.answer}</p>}
    </div>
);

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1);

    const handleClick = (index: number) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section className="mt-20 lg:mt-40 px-4 md:px-10 lg:px-24 lg:flex lg:gap-10">
            <div className="mb-14 lg:w-2/5">
                <h3 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Questions fréquemment posées
                </h3>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/contact">
                        Plus d'information{" "}
                        <LucideArrowRight size={20} className="ml-6 md:ml-10" />
                    </Link>
                </Button>
            </div>
            <div className="lg:w-3/5">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        index={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </section>
    );
}
