export function AboutWorkflow() {
    const steps = [
        {
            title: "Planning",
            description: "Analyse et définition des besoins.",
        },
        {
            title: "Conception",
            description: "Création de l'architecture et wireframes.",
        },
        {
            title: "Design",
            description: "Définition de l'identité visuelle et UI/UX.",
        },
        {
            title: "Développement",
            description: "Implémentation et tests du projet.",
        },
    ];

    return (
        <section className="mt-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl md:text-center text-primary font-bold mb-10">
                    Notre processus de travail
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 pl-0 mr-10">
                            {/* Cercle bleu en haut à gauche */}
                            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                            {/* Bordure en pointillé en haut */}
                            <div className="border-2 border-dashed border-neon2 w-full absolute top-0 left-0 z-10"></div>
                            {/* Contenu */}
                            <h3 className="text-lg font-semibold mt-2">
                                {step.title}
                            </h3>
                            <p className="mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
