import { Header } from "@/src/components/sections/Header";
import { HeroTitle } from "@/src/components/sections/HeroTitle";
import { Navbar } from "@/src/components/sections/Navbar";
import { AboutHero } from "@/src/components/sections/AboutHero";
import { Footer } from "@/src/components/sections/Footer";
import { AboutWhoWeAre } from "@/src/components/sections/AboutWhoWeAre";
import { AboutWorkflow } from "@/src/components/sections/AboutWorkflow";
import { MissionAndVision } from "@/src/components/sections/MissionAndVision";
import { WhyChooseUs } from "@/src/components/sections/WhyChooseUse";
import { TeamMembers } from "@/src/components/sections/TeamMembers";

export default function Page() {
    const breadcrumbs = [
        { label: "Accueil", url: "/" },
        { label: "A propos", url: "/about" },
    ];
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <HeroTitle
                    pageTitle="A propos de Digital Innovation"
                    breadcrumbs={breadcrumbs}
                />
                <AboutHero />
                <AboutWhoWeAre />
                <AboutWorkflow />
                <MissionAndVision />
                <WhyChooseUs />
                <TeamMembers />
                <Footer />
            </main>
        </>
    );
}
