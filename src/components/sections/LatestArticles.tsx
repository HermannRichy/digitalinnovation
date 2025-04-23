import Image from "next/image";
import Link from "next/link";

const articles = [
    {
        title: "Introduction à React",
        description: "Les bases de React",
        image: "/blog-images/article-1.jpg",
        link: "/blog",
    },
    {
        title: "Optimisation pour les moteurs de recherche",
        description: "L'importance du SEO",
        image: "/blog-images/article-2.jpg",
        link: "/blog",
    },
    {
        title: "Pourquoi migrer vers le cloud en 2025 ?",
        description: "Les tendances du cloud computing",
        image: "/blog-images/article-3.jpg",
        link: "/blog",
    },
    {
        title: "Protégez vos données en ligne",
        description: "Cybersécurité en entreprise",
        image: "/blog-images/article-4.jpg",
        link: "/blog",
    },
];

export function LatestArticles() {
    return (
        <section className="py-12 px-4 md:px-10 lg:px-24">
            <h2 className="font-bold text-primary text-3xl md:text-4xl mb-10">
                Derniers articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((article, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={220}
                            className="w-full h-48 object-cover"
                        />
                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                                {article.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-1">
                                {article.description}
                            </p>
                            <Link
                                href={article.link}
                                className="inline-block mt-auto text-sm font-bold text-green-600 hover:underline"
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
