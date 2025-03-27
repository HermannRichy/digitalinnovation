"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
    IconCode,
    IconPalette,
    IconBrandFigma,
    IconBrandReact,
    IconBrandMeta,
    IconRocket,
} from "@tabler/icons-react";

const icons = [
    <IconCode size={40} />,
    <IconPalette size={40} />,
    <IconBrandFigma size={40} />,
    <IconBrandReact size={40} />,
    <IconBrandMeta size={40} />,
    <IconRocket size={40} />,
];

export function HeroIntro() {
    const [phase, setPhase] = useState<"circle" | "text" | "icon">("circle");
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setPhase("text"), 2000);
        const timer2 = setTimeout(() => setPhase("icon"), 6000);
        const timer3 = setTimeout(() => setLoading(false), 8000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    useEffect(() => {
        if (phase === "icon") {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % icons.length);
            }, 200); // 200ms par icône
            return () => clearInterval(interval);
        }
    }, [phase]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 bg-dark flex items-center justify-center"
                >
                    {phase === "circle" && (
                        <motion.div
                            key="circle"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                    )}

                    {phase === "text" && (
                        <motion.div
                            key="text"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            className="relative w-60 h-60 md:w-96 md:h-96 flex items-center justify-center"
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
                                layoutId="circle"
                            />
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-2xl md:text-4xl font-bold text-white z-10"
                            >
                                Digital Innovation
                            </motion.h1>
                        </motion.div>
                    )}

                    {phase === "icon" && (
                        <motion.div
                            key="icon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary"
                        >
                            {icons[activeIndex]}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
