import { cn } from "@/src/lib/utils";
import {
    IconWriting,
    IconBrandFigma,
    IconCode,
    IconArrowRight,
    IconTrendingUp,
} from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export function WhoWeAre() {
    const features = [
        {
            title: "Community & Social Media Manager",
            description:
                "Nous transformons vos réseaux sociaux en puissants leviers de croissance grâce à des contenus engageants.",
            icon: <IconTrendingUp />,
        },
        {
            title: "Designer graphique & UI/UX",
            description:
                "Nos designers créent des designs qui captivent et des interfaces qui marquent, alliant créativité et expérience utilisateur.",
            icon: <IconBrandFigma />,
        },
        {
            title: "Copywriter & Ghostwriter",
            description:
                "Nous donnons vie à vos idées avec des mots qui inspirent, convainquent et fidélisent votre audience.",
            icon: <IconWriting />,
        },
        {
            title: "Développeurs web & mobile",
            description:
                "Nos développeurs conçoivent des sites et applications solides, performants et adaptés à vos besoins.",
            icon: <IconCode />,
        },
    ];
    return (
        <section
            className="mt-20 md:mt-0 px-4 py-10 md:px-10 lg:px-24 lg:flex lg:gap-x-5 bg-white"
            id="about"
        >
            <div className="md:w-4/5 lg:w-2/5 lg:mt-6">
                <h3 className="font-bold text-secondary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Qui sommes nous ?
                </h3>
                <h2 className="mb-5 text-dark">
                    Digital Innovation, c&apos;est une jeune équipe dynamique et
                    passionnée, dédiée à transformer vos idées en succès
                    digital. Basée au Bénin, nous accompagnons entrepreneurs,
                    TPE, PME et startups dans leur transformation numérique,
                    avec des solutions créatives et sur mesure.
                </h2>
                <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-dark text-dark"
                >
                    <Link href="/about">
                        En savoir plus sur nous{" "}
                        <IconArrowRight size={20} className="ml-6 md:ml-10" />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 max-w-7xl lg:w-3/5 mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature border-secondary",
                (index === 0 || index === 4) && "lg:border-l border-secondary",
                index < 4 && "lg:border-b border-secondary"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-400 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-400 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-secondary">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-secondary dark:bg-secondary group-hover/feature:bg-blue-800 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-secondary">
                    {title}
                </span>
            </div>
            <p className="text-sm text-dark max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
