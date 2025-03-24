export function AboutWhoWeAre() {
    return (
        <section className="mt-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
                <h3 className="text-xs font-bold text-secondary mb-6 uppercase">
                    Qui sommes-nous ?
                </h3>
                <div className="grid md:grid-cols-2 gap-5 items-center">
                    <div className="bg-dark p-6 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Une équipe jeune et dynamique
                        </h3>
                        <p>
                            Digital Innovation, c’est une équipe passionnée qui
                            fusionne créativité et technologie pour développer
                            des solutions digitales innovantes adaptées aux
                            entreprises modernes.
                        </p>
                    </div>
                    <div className="bg-dark p-6 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            Notre approche
                        </h3>
                        <p>
                            De la stratégie à l’exécution, nous accompagnons nos
                            clients avec une méthodologie structurée qui allie
                            innovation, analyse et optimisation continue.
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <img
                        src="/svg-images/analytics.svg"
                        alt="Notre équipe en pleine stratégie"
                        className="w-full h-96"
                    />
                </div>
            </div>
        </section>
    );
}
