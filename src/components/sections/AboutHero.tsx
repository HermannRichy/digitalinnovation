import Image from "next/image";

export function AboutHero() {
    return (
        <section className="flex flex-col md:flex-row mt-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24 gap-8 items-center justify-between">
            <div className="md:w-1/2 space-y-5">
                <h3 className="text-3xl md:text-4xl lg:text-6xl text-primary font-bold mb-8">
                    Derrière l’innovation, une équipe passionnée.
                </h3>
                <p className="mb-10">
                    Digital Innovation, c’est une équipe jeune, dynamique et
                    engagée, prête à transformer vos ambitions en réalité. Nous
                    accompagnons les entrepreneurs, PME et startups SaaS avec
                    des stratégies digitales innovantes et des solutions sur
                    mesure.
                </p>
            </div>
            <div className="flex items-center h-full md:justify-center md:w-1/2">
                <Image
                    src="/svg-images/team.svg"
                    alt="Equipe Digital Innovation"
                    className="w-full lg:w-3/4 lg:mx-auto lg:h-[400px]"
                />
            </div>
        </section>
    );
}
