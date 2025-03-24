import React from "react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    return (
        <section className="w-full h-screen flex justify-center items-center bg-background">
            <div className="p-5 text-center text-dark font-default">
                <Image
                    src="svg-images/404.svg"
                    alt="404"
                    className="mb-5 md:h-96"
                />
                <p className="font-heading font-bold text-secondary mb-5">
                    Il semble que vous êtes au mauvais endroit !
                </p>
                <div className="flex justify-center">
                    <Link href="/" className="underline flex items-center">
                        Revenir à la page d&apos;accueil
                        <LucideArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
