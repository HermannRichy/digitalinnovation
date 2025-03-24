"use client";
import React from "react";
import { LucideMail, LucideSendHorizonal } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
    return (
        <>
            <section className="my-20 lg:mt-40 px-4 md:px-10 lg:px-24">
                <h2 className="font-bold text-primary text-3xl md:text-4xl lg:text-6xl mb-20">
                    Contactez-nous
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    {/* Information de contact */}
                    <div className="rounded-2xl border border-neon2 p-5">
                        <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                            <LucideMail className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-primary md:text-lg mb-5">
                            Besoin d&apos;aide ou de conseils ?
                        </h4>
                        <p className="text-neutral-400 mb-8">
                            N&apos;hésitez pas à nous contacter pour toute
                            question ou demande de devis.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="font-medium">Tél :</span>
                                <Link
                                    href="tel:+2290166360300"
                                    className="text-primary hover:text-opacity-80"
                                >
                                    +229 01 66 36 03 00
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-medium">Email :</span>
                                <Link
                                    href="mailto:contact@digitalinnovation.bj"
                                    className="text-primary hover:text-opacity-80"
                                >
                                    contact@digitalinnovation.bj
                                </Link>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="font-medium">
                                    Adresse : Immeuble Supermarché Ô Bénin,
                                    Godomey.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="rounded-2xl border border-neon2 p-5">
                        <div className="w-12 h-12 p-2 mb-5 rounded-full bg-primary text-dark flex items-center justify-center">
                            <LucideSendHorizonal className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-primary md:text-lg mb-5">
                            Envoyez-nous un message
                        </h4>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-400">
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-400">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="exemple@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-neutral-400">
                                    Message *
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Décrivez votre projet ou votre question..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-dark cursor-pointer px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0735978109146!2d2.3297041740450233!3d6.384502724764954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102357dc7747f489%3A0x647ad63bdbf3f3f0d4!2sDigital%20Innovation!5e0!3m2!1sfr!2sbj!4v1742839513536!5m2!1sfr!2sbj"
                    className="w-full h-96"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" // Correction ici
                ></iframe>
            </section>
        </>
    );
}
