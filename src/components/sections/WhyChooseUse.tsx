import React from "react";
import {
    LucideTabletSmartphone,
    LucidePencilRuler,
    LucideHandshake,
} from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        icon: <LucidePencilRuler className="text-dark text-3xl" />,
        title: "Solutions sur mesure",
        description:
            "Nous concevons des solutions digitales adaptées à vos besoins pour maximiser votre impact en ligne et optimiser votre croissance.",
    },
    {
        icon: <LucideTabletSmartphone className="text-dark text-3xl" />,
        title: "Design & Performance",
        description:
            "Nos designs allient esthétique et efficacité pour une expérience utilisateur fluide et engageante, quel que soit l'appareil utilisé.",
    },
    {
        icon: <LucideHandshake className="text-dark text-3xl" />,
        title: "Support et accompagnement",
        description:
            "Nous vous accompagnons à chaque étape avec un support réactif et une expertise pour assurer la réussite de vos projets digitaux.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="mt-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-center text-primary font-bold mb-8">
                    Pourquoi choisir <br /> Digital Innovation ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-dark p-6 rounded-2xl">
                            <div className="h-12 w-12 p-2 flex items-center justify-center bg-primary rounded-full mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold">
                                {benefit.title}
                            </h3>
                            <p className="mt-2">{benefit.description}</p>
                        </div>
                    ))}
                </div>
                {/* Section Logos */}
                <div className="mt-12 text-center">
                    <p className="text-2xl font-bold text-primary">
                        Des clients satisfaits{" "}
                    </p>
                    <p className="mb-6">
                        Des entreprises et entrepreneurs nous font confiance
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Image
                            src="/images/partner1.png"
                            alt="Client 1"
                            width={60}
                            height={50}
                            className="h-12"
                        />
                        <Image
                            src="/images/partner7.jpeg"
                            alt="Client 2"
                            width={60}
                            height={50}
                            className="h-12 hidden md:inline-block"
                        />
                        <Image
                            src="/images/partner3.png"
                            alt="Client 3"
                            width={60}
                            height={50}
                            className="h-12"
                        />
                        <Image
                            src="/images/partner4.png"
                            alt="Client 4"
                            width={60}
                            height={50}
                            className="h-12"
                        />
                        <Image
                            src="/images/partner5.jpeg"
                            alt="Client 5"
                            width={60}
                            height={50}
                            className="h-12 hidden md:inline-block"
                        />
                        <Image
                            src="/images/partner8.webp"
                            alt="Client 6"
                            width={60}
                            height={50}
                            className="h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
