import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement | null>,
    callback: (event: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Vérifiez si ref.current existe avant de l'utiliser
            if (!ref.current || !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
