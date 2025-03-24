import { motion } from "motion"; // Nouveau nom si renommé
import {
    IconCode,
    IconSeo,
    IconBrandGoogle,
    IconBulb,
} from "@tabler/icons-react";

const services = [
    {
        title: "Développement Web",
        icon: <IconCode className="h-8 w-8" />,
        delay: 0.2,
    },
    {
        title: "Stratégie SEO",
        icon: <IconSeo className="h-8 w-8" />,
        delay: 0.4,
    },
    {
        title: "Marketing Digital",
        icon: <IconBrandGoogle className="h-8 w-8" />,
        delay: 0.6,
    },
    {
        title: "Innovation Technologique",
        icon: <IconBulb className="h-8 w-8" />,
        delay: 0.8,
    },
];

const HeroIntro = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5, // Décalage global
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20, // Contrôle du rebond
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl mx-auto text-center"
            >
                {/* Titre principal */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6"
                >
                    Digital Innovation
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Transformons votre présence digitale avec des solutions
                    innovantes et sur mesure
                </motion.p>

                {/* Grille de services */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: "easeInOut", // Ajout d'un easing
                                    }}
                                    className="text-cyan-400"
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold text-white">
                                    {service.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bouton CTA */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/30"
                >
                    Start Your Project
                </motion.button>
            </motion.div>
        </div>
    );
};

export default HeroIntro;
