import { ContactForm } from "@/src/components/sections/ContactForm";
import { Footer } from "@/src/components/sections/Footer";
import { Header } from "@/src/components/sections/Header";
import { HeroTitle } from "@/src/components/sections/HeroTitle";
import { Navbar } from "@/src/components/sections/Navbar";

export default function Page() {
    const breadcrumbs = [
        { label: "Accueil", url: "/" },
        { label: "Contact", url: "/contact" },
    ];
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <HeroTitle
                    pageTitle="Contactez Digital Innovation"
                    breadcrumbs={breadcrumbs}
                />
                <ContactForm />
                <Footer />
            </main>
        </>
    );
}
