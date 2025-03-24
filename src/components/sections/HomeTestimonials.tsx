import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";

export function HomeTestimonials() {
    const testimonials = [
        {
            quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "/images/testimonial-img-1.jpg",
        },
        {
            quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "/images/testimonial-img-1.jpg",
        },
        {
            quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "/images/testimonial-img-1.jpg",
        },
        {
            quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "/images/testimonial-img-1.jpg",
        },
        {
            quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "/images/testimonial-img-1.jpg",
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
