import React from "react";
import { FlipWords } from "@/src/components/ui/flip-words";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { IconCornerRightDown, IconMessageCircle } from "@tabler/icons-react";
import { IconCloud } from "@/src/components/magicui/icon-cloud";
import { Header } from "./Header";

const images = [
    "/svg-icons/wordpress.svg",
    "/svg-icons/figma.svg",
    "/svg-icons/laravel.svg",
    "/svg-icons/nextjs.svg",
    "/svg-icons/vercel.svg",
    "/svg-icons/openai.svg",
    "/svg-icons/postgresql.svg",
    "/svg-icons/react.svg",
    "/svg-icons/supabase.svg",
    "/svg-icons/tailwind-css.svg",
    "/svg-icons/prisma.svg",
    "/svg-icons/github.svg",
    "/svg-icons/git.svg",
    "/svg-icons/node-js.svg",
    "/svg-icons/facebook.svg",
    "/svg-icons/tiktok.svg",
];

export function IconCloudDemo() {
    return (
        <div className="relative flex w-full h-[400px] items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}

export function Hero() {
    const words = ["web", "de com"];

    return (
        <section>
            <Header />
            <div className="flex flex-col md:flex-row h-fit lg:h-[80vh] w-full px-4 md:px-10 lg:px-24 overflow-hidden antialiased items-center justify-center">
                <div className="w-full md:w-3/5 lg:w-8/12 p-4">
                    <h1 className="text-primary text-4xl font-bold lg:text-7xl">
                        Agence <FlipWords words={words} /> <br /> Digital
                        Innovation.
                    </h1>
                    <h3 className="mt-4 max-w-lg text-base lg:text-lg font-normal">
                        Entrepreneurs, TPE, PME, startups SaaS :<br /> on vous
                        propulse dans l'ère du digitale.
                    </h3>
                    <p className="flex items-center mt-8 gap-x-4">
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full"
                        >
                            <Link href="#about">
                                En savoir plus{" "}
                                <IconCornerRightDown
                                    size={20}
                                    className="ml-6 md:ml-10"
                                />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-full"
                        >
                            <Link href="/contact">
                                Contact{" "}
                                <IconMessageCircle
                                    size={20}
                                    className="ml-6 md:ml-10"
                                />
                            </Link>
                        </Button>
                    </p>
                </div>
                <div className="relative md:w-2/5 lg:w-4/12">
                    <IconCloudDemo />
                </div>
            </div>
        </section>
    );
}
