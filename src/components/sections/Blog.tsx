"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/src/hooks/use-outside-click";

export function Blog() {
    return (
        <section className="my-20 lg:mt-40 px-4 md:px-10 lg:px-24">
            <div className="mt-20 lg:mt-40 mb-20 lg:flex items-start justify-between">
                <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Blog: <br /> Tous les articles
                </h2>
            </div>
            <BlogCards />
        </section>
    );
}

export function BlogCards() {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                            >
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-60 w-full  rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Les bases de React",
        title: "Introduction à React",
        src: "/blog-images/coder.svg",
        ctaText: "Lire plus",
        ctaLink: "/blog/react-intro",
        content: () => {
            return (
                <p>
                    React est une bibliothèque JavaScript puissante pour
                    construire des interfaces utilisateur interactives. Créée
                    par Facebook, elle permet de développer des composants
                    réutilisables et dynamiques pour les applications web
                    modernes. <br /> <br />
                    Découvrez comment démarrer avec React, ses concepts
                    fondamentaux tels que les composants, les props et
                    l&apos;état, et pourquoi il est devenu un outil
                    incontournable pour les développeurs front-end.
                </p>
            );
        },
    },
    {
        description: "L'importance du SEO",
        title: "Optimisation pour les moteurs de recherche",
        src: "/blog-images/team.svg",
        ctaText: "Lire plus",
        ctaLink: "/blog/seo-guide",
        content: () => {
            return (
                <p>
                    Le SEO (Search Engine Optimization) est essentiel pour
                    améliorer la visibilité de votre site web sur les moteurs de
                    recherche. En optimisant vos contenus et en utilisant des
                    techniques adaptées, vous pouvez attirer plus de visiteurs
                    et augmenter votre trafic organique.
                    <br /> <br />
                    Apprenez les bonnes pratiques en matière de mots-clés,
                    balises meta, liens internes et bien plus encore dans cet
                    article dédié.
                </p>
            );
        },
    },
    {
        description: "Les tendances du cloud computing",
        title: "Pourquoi migrer vers le cloud en 2025 ?",
        src: "/blog-images/pair-programming.svg",
        ctaText: "Lire plus",
        ctaLink: "/blog/cloud-computing-trends",
        content: () => {
            return (
                <p>
                    Le cloud computing continue de transformer la manière dont
                    les entreprises gèrent leurs infrastructures IT. Avec des
                    solutions flexibles et évolutives, le cloud offre des
                    avantages tels que la réduction des coûts et une meilleure
                    sécurité. <br /> <br />
                    Découvrez les tendances actuelles comme le multicloud, le
                    edge computing et l&apos;IA intégrée aux services cloud dans
                    cet article.
                </p>
            );
        },
    },
    {
        description: "Cybersécurité en entreprise",
        title: "Protégez vos données en ligne",
        src: "/blog-images/project-planning.svg",
        ctaText: "Lire plus",
        ctaLink: "/blog/cybersecurity-tips",
        content: () => {
            return (
                <p>
                    Avec l&apos;augmentation des cyberattaques, la cybersécurité
                    est devenue un enjeu crucial pour les entreprises. Protéger
                    vos données sensibles et celles de vos clients est
                    indispensable dans un monde numérique en constante
                    évolution. <br /> <br />
                    Apprenez comment mettre en place des mesures efficaces
                    telles que le chiffrement, l&apos;authentification
                    multifactorielle et la formation des employés.
                </p>
            );
        },
    },
];
