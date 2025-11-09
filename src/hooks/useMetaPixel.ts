"use client";

import { useCallback } from "react";

declare global {
    interface Window {
        fbq: (
            action: string,
            event: string,
            data?: Record<string, unknown>
        ) => void;
    }
}

/**
 * Hook pour tracker les événements avec le pixel Meta
 */
export function useMetaPixel() {
    const trackEvent = useCallback(
        (eventName: string, data?: Record<string, unknown>) => {
            if (typeof window === "undefined" || !window.fbq) {
                console.warn(
                    "Meta Pixel n'est pas initialisé. L'événement",
                    eventName,
                    "n'a pas été tracké."
                );
                return;
            }

            try {
                window.fbq("track", eventName, data || {});
            } catch (error) {
                console.error("Erreur lors du tracking Meta Pixel:", error);
            }
        },
        []
    );

    const trackLead = useCallback(
        (data?: Record<string, unknown>) => {
            trackEvent("Lead", data);
        },
        [trackEvent]
    );

    const trackContact = useCallback(
        (data?: Record<string, unknown>) => {
            trackEvent("Contact", data);
        },
        [trackEvent]
    );

    return {
        trackEvent,
        trackLead,
        trackContact,
    };
}
