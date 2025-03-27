import { FAQ } from "@/src/components/sections/FAQ";
import { Hero } from "@/src/components/sections/Hero";
import { HomePortfolio } from "@/src/components/sections/HomePortfolio";
import { HomeTestimonials } from "@/src/components/sections/HomeTestimonials";
import { Navbar } from "@/src/components/sections/Navbar";
import { WhoWeAre } from "@/src/components/sections/WhoWeAre";
import { WorkFlow } from "@/src/components/sections/WorkFlow";
import { CTA } from "@/src/components/sections/CTA";
import { LatestArticles } from "@/src/components/sections/LatestArticles";
import { Footer } from "@/src/components/sections/Footer";
import { HeroIntro } from "@/src/components/sections/HeroIntro";

export default function Home() {
    return (
        <>
            <HeroIntro />
            <Navbar />
            <main className="min-h-screen bg-dark">
                <Hero />
                <WhoWeAre />
                <HomePortfolio />
                <WorkFlow />
                <HomeTestimonials />
                <FAQ />
                <CTA />
                <LatestArticles />
                <Footer />
            </main>
        </>
    );
}
