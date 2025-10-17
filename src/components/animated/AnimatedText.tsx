"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface AnimatedTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    stagger?: number;
}

export function AnimatedText({ 
    children, 
    className = "", 
    delay = 0,
    stagger = 0.1 
}: AnimatedTextProps) {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const split = new SplitType(textRef.current, { 
            types: "words,chars",
            tagName: "span"
        });

        gsap.set(split.chars, {
            opacity: 0,
            y: 50,
            rotateX: -90
        });

        gsap.to(split.chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
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

