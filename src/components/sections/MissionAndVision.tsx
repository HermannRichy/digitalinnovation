import Image from "next/image";

export function MissionAndVision() {
    return (
        <>
            <section className="flex flex-col md:flex-row-reverse mt-20 lg:mt-40 py-14 px-4 md:px-10 lg:px-24 gap-8 items-center justify-between bg-white">
                <div className="md:w-1/2 space-y-5">
                    <h1 className="text-xs font-default font-bold text-secondary mb-6 uppercase">
                        Notre Vision
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-secondary font-bold mb-8">
                        Innovation, Numérique.
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-default text-dark mb-10">
                        Nous aspirons à créer un monde où l&apos;innovation
                        digitale permet aux entreprises et aux individus
                        d&apos;atteindre leur plein potentiel.
                    </p>
                </div>
                <div className="flex items-center h-full md:justify-center md:w-1/2">
                    <Image
                        src="/svg-images/project-planning.svg"
                        alt="Equipe Digital Innovation"
                        className="w-full lg:w-3/4 lg:mx-auto lg:h-[400px]"
                    />
                </div>
            </section>
            <section className="flex flex-col md:flex-row py-14 px-4 md:px-10 lg:px-24 gap-8 items-center justify-between bg-white">
                <div className="md:w-1/2 space-y-5">
                    <h1 className="text-xs font-default font-bold text-secondary mb-6 uppercase">
                        Notre Mission
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-secondary font-bold mb-8">
                        Croissance Numérique.
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-default text-dark mb-10">
                        Fournir des solutions numériques stratégiques et
                        performantes qui boostent la croissance et transforment
                        les défis en opportunités.
                    </p>
                </div>
                <div className="flex items-center h-full md:justify-center md:w-1/2">
                    <Image
                        src="/svg-images/growth.svg"
                        alt="Equipe Digital Innovation"
                        className="w-full lg:w-3/4 lg:mx-auto lg:h-[400px]"
                    />
                </div>
            </section>
        </>
    );
}
