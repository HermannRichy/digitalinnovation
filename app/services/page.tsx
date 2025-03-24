import { Footer } from "@/src/components/sections/Footer";
import { Header } from "@/src/components/sections/Header";
import { HeroTitle } from "@/src/components/sections/HeroTitle";
import { Navbar } from "@/src/components/sections/Navbar";
import { Pricing } from "@/src/components/sections/Pricing";
import { Services } from "@/src/components/sections/Services";

export default function Page() {
    const breadcrumbs = [
        { label: "Accueil", url: "/" },
        { label: "Services", url: "/services" },
    ];
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <HeroTitle
                    pageTitle="Nos expertises à Digital Innovation"
                    breadcrumbs={breadcrumbs}
                />
                <Services />
                <Pricing />
            </main>
            <Footer />
        </>
    );
}
