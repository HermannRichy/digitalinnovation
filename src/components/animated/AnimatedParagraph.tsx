"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface AnimatedParagraphProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    stagger?: number;
}

export function AnimatedParagraph({ 
    children, 
    className = "", 
    delay = 0.5,
    stagger = 0.05 
}: AnimatedParagraphProps) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const split = new SplitType(textRef.current, { 
            types: "lines,words",
            lineClass: "animated-line"
        });

        gsap.set(split.lines, {
            opacity: 0,
            y: 30
        });

        gsap.to(split.lines, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: stagger,
            delay: delay
        });

        return () => {
            if (split) {
                split.revert();
            }
        };
    }, [delay, stagger]);

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    );
}

