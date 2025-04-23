import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, NotebookPen } from "lucide-react";

const articles = [
    {
        title: "Introduction à React",
        description: "Les bases de React",
        image: "/blog-images/article-1.jpg",
        link: "/blog/article-1",
        date: "23 avril 2025",
        author: "Digital Innovation",
        excerpt:
            "React est une bibliothèque JavaScript pour construire des interfaces utilisateur interactives.",
    },
    {
        title: "Optimisation pour les moteurs de recherche",
        description: "L'importance du SEO",
        image: "/blog-images/article-2.jpg",
        link: "/blog/article-2",
        date: "20 avril 2025",
        author: "Digital Innovation",
        excerpt:
            "Le SEO est essentiel pour améliorer la visibilité de votre site web.",
    },
    {
        title: "Pourquoi migrer vers le cloud en 2025 ?",
        description: "Les tendances du cloud computing",
        image: "/blog-images/article-3.jpg",
        link: "/blog",
        date: "15 avril 2025",
        author: "Digital Innovation",
        excerpt:
            "Le cloud computing transforme la manière dont les entreprises gèrent leurs infrastructures IT.",
    },
    {
        title: "Protégez vos données en ligne",
        description: "Cybersécurité en entreprise",
        image: "/blog-images/article-4.jpg",
        link: "/blog",
        date: "10 avril 2025",
        author: "Digital Innovation",
        excerpt:
            "La cybersécurité est devenue un enjeu crucial pour les entreprises.",
    },
];

export function Blog() {
    return (
        <section className="py-12 px-4 md:px-10 lg:px-24">
            <h2 className="font-bold text-primary text-3xl md:text-4xl mb-10">
                Tous les articles
            </h2>
            <div className="flex flex-col gap-8">
                {articles.map((article, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                    >
                        <div className="relative min-h-[180px] md:min-h-[220px] md:w-1/3 flex-shrink-0">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-6 md:w-2/3">
                            <div>
                                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                    {article.description}
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                                    {article.excerpt}
                                </p>
                                {/* Contenu ajouté ici */}
                                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-4 gap-4">
                                    <span className="flex items-center gap-1">
                                        <CalendarCheck className="h-5 w-5" />{" "}
                                        {article.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <NotebookPen className="w-5 h-5" />{" "}
                                        {article.author}
                                    </span>
                                </div>
                            </div>
                            <Link
                                href={article.link}
                                className="inline-block text-sm font-bold text-green-600 hover:underline"
                            >
                                Lire plus →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
