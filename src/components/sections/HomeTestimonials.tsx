import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";

export function HomeTestimonials() {
    const testimonials = [
        {
            quote: "Le site web de tous mes projets est maintenant géré par une seule agence web: Digital Innovation.",
            name: "Yoan Melson DANSOU",
            designation: "CEO Programme Futur & FuturCraft Institut",
            src: "/images/testimonial-img-1.jpg",
        },
        {
            quote: "Le site web de notre centre de formation a été développé par Digital Innovation. Je recommande ces professionnels.",
            name: "Serge HOUNDODE",
            designation: "PDG Cefora Formation",
            src: "/images/testimonial-img-3.jpg",
        },
        {
            quote: "La charte graphique réalisée par l'équipe de Digital Innovation à donner une nouvelle vie à mon entreprise.",
            name: "Emile",
            designation: "Gérant de Extra Ménuiserie",
            src: "/images/testimonial-img-2.jpeg",
        },
    ];

    return (
        <section className="mt-20 lg:mt-40 px-4 py-10 md:px-10 lg:px-24 bg-white">
            <div className="mb-5 md:w-2/3 lg:w-3/4 md:text-center md:mx-auto">
                <h2 className="font-bold text-secondary text-3xl md:text-4xl lg:text-6xl mb-5">
                    Découvrez ce que nos clients disent de nous.
                </h2>
                <p className="text-dark">
                    Ne vous contentez pas de nous croire sur parole. Découvrez
                    ce que nos clients disent de nous et de nos services.
                </p>
            </div>
            <AnimatedTestimonials testimonials={testimonials} />
        </section>
    );
}
