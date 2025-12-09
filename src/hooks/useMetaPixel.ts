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
        (data: Record<string, unknown> = {}) => {
            const defaultData = {
                content_name: document.title,
                content_category: "Contact",
                content_ids: ["whatsapp_contact"],
                content_type: "button_click",
                value: 1,
                currency: "XOF",
                ...data,
            };

            // Envoi de l'événement standard Contact
            trackEvent("Contact", defaultData);

            // Événement personnalisé pour le suivi détaillé
            trackEvent("WhatsAppClick", {
                ...defaultData,
                eventID: `wa_${Date.now()}`,
                eventTime: new Date().toISOString(),
                userAgent:
                    typeof window !== "undefined"
                        ? window.navigator.userAgent
                        : "",
                pageUrl:
                    typeof window !== "undefined" ? window.location.href : "",
            });
        },
        [trackEvent]
    );

    const trackWhatsAppClick = useCallback(
        (
            buttonLocation: string,
            additionalData: Record<string, unknown> = {}
        ) => {
            trackContact({
                button_location: buttonLocation,
                button_id: `wa_${buttonLocation
                    .toLowerCase()
                    .replace(/\s+/g, "_")}`,
                ...additionalData,
            });
        },
        [trackContact]
    );

    return {
        trackEvent,
        trackLead,
        trackContact,
        trackWhatsAppClick,
    };
}
