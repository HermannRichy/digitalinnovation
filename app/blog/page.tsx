import { Blog } from "@/src/components/sections/Blog";
import { Footer } from "@/src/components/sections/Footer";
import { Header } from "@/src/components/sections/Header";
import { HeroTitle } from "@/src/components/sections/HeroTitle";
import { Navbar } from "@/src/components/sections/Navbar";

export default function Page() {
    const breadcrumbs = [
        { label: "Accueil", url: "/" },
        { label: "Blog", url: "/blog" },
    ];
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <HeroTitle pageTitle="Digital Blog" breadcrumbs={breadcrumbs} />
                <Blog />
                <Footer />
            </main>
        </>
    );
}
