import React from "react";
import { FloatingDock } from "@/src/components/ui/floating-dock";
import {
    IconMessages,
    IconWriting,
    IconMoneybag,
    IconHome,
    IconUserCog,
    IconQuestionMark,
} from "@tabler/icons-react";

export function Navbar() {
    const links = [
        {
            title: "Accueil",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "A propos",
            icon: (
                <IconQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Services",
            icon: (
                <IconUserCog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/services",
        },
        {
            title: "Blog",
            icon: (
                <IconWriting className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/blog",
        },
        {
            title: "Contact",
            icon: (
                <IconMessages className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/contact",
        },
    ];
    return (
        <nav className="fixed z-[100] bottom-6 right-6 md:bottom-10 md:right-1/2 md:translate-x-1/2">
            <FloatingDock items={links} />
        </nav>
    );
}
