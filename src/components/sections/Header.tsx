import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconBrandTiktok,
} from "@tabler/icons-react";

export function Header() {
    const socialLinks = [
        {
            href: "https://facebook.com",
            icon: <IconBrandFacebook className="h-6 w-6 hover:text-neon" />,
        },
        {
            href: "https://instagram.com",
            icon: <IconBrandInstagram className="h-6 w-6 hover:text-neon" />,
        },
        {
            href: "https://whatsapp.com",
            icon: <IconBrandWhatsapp className="h-6 w-6 hover:text-neon" />,
        },
        {
            href: "https://tiktok.com",
            icon: <IconBrandTiktok className="h-6 w-6 hover:text-neon" />,
        },
    ];

    return (
        <header className="flex justify-between items-center border-b border-neon2 mb-10 mx-auto w-11/12 md:px-10 lg:px-20 py-4 lg:py-6">
            <h1 className="text-lg text-primary font-bold">
                Digital Innovation
            </h1>
            <div className="flex space-x-4">
                {socialLinks.map(({ href, icon }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neon"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </header>
    );
}
