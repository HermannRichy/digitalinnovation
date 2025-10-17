import React from "react";
import {
    IconBrandWhatsapp,
    IconBrandTiktok,
    IconBrandFacebook,
    IconBrandInstagram,
} from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className="bg-secondary py-14 px-4 md:px-10 lg:px-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <h1 className="font-bold font-fira-code text-xl md:text-2xl mb-5">
                            Digital Innovation
                        </h1>
                        <p className="mb-4">Elevons les normes du numérique.</p>
                        <p className="mb-4">
                            Let&apos;s raise digital standars.
                        </p>
                        <div className="mt-4 bg-dark text-neon py-4 px-8 rounded-lg w-fit">
                            <p className="mb-4">
                                <span className="font-semibold">Email :</span>{" "}
                                digitalinnovationbj@gmail.com
                            </p>
                            <p>
                                <span className="font-semibold">Numéro :</span>{" "}
                                +229 01 6636 0300
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-xl md:text-2xl mb-5">
                            Entrer en contact
                        </h2>
                        <p className="mb-4">
                            Agence web et marketing digital à Cotonou, Bénin.{" "}
                            <br />
                            Suivez-nous sur les réseaux sociaux :
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/digitalinnovationbj"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandFacebook className="h-8 w-8 hover:text-neon" />
                            </a>
                            <a
                                href="https://www.instagram.com/digitalinnovationbj?igsh=dXhnN3MzcnJ0YXVn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandInstagram className="h-8 w-8 hover:text-neon" />
                            </a>
                            <a
                                href="https://wa.me/22966360300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandWhatsapp className="h-8 w-8 hover:text-neon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@digital_innov?_t=ZN-8vQGUZfRx1L&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandTiktok className="h-8 w-8 hover:text-neon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-white pt-4 text-center text-xs md:flex justify-between">
                    <p>
                        &copy; {new Date().getFullYear()} Digital Innovation.
                        Tous droits réservés.
                    </p>
                    <a href="/mentions-legales" className="underline">
                        Mentions légales
                    </a>
                </div>
            </div>
        </footer>
    );
}
