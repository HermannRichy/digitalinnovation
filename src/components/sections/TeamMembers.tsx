import React from "react";
import {
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Hermann Ulrich HOUNNOUVI",
        role: "CEO & Lead Developer",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Audrey Faustin HOUESSOU",
        role: "CTO & WordPress Expert",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Mario MARTIN",
        role: "UX/UI Designer",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Membre 4",
        role: "Community Manager",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Membre 5",
        role: "Développeur Web",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
    {
        name: "Membre 6",
        role: "Graphiste",
        image: "/images/hero.png",
        socials: { facebook: "#", linkedin: "#", twitter: "#" },
    },
];

export function TeamMembers() {
    return (
        <section className="hidden my-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-center text-primary font-bold mb-8">
                    Notre équipe d&apos;innovateurs
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative bg-dark text-primary p-6 rounded-2xl shadow-md group transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                                    <div className="flex space-x-3">
                                        <a
                                            href={member.socials.facebook}
                                            className="text-white hover:text-primary"
                                        >
                                            <IconBrandFacebook />
                                        </a>
                                        <a
                                            href={member.socials.linkedin}
                                            className="text-white hover:text-primary"
                                        >
                                            <IconBrandLinkedin />
                                        </a>
                                        <a
                                            href={member.socials.twitter}
                                            className="text-white hover:text-primary"
                                        >
                                            <IconBrandTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">
                                {member.name}
                            </h3>
                            <p className="">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
