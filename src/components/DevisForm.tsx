"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertDescription } from "@/src/components/ui/alert";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function DevisForm() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<SubmissionState>("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        if (!serviceId || !templateId || !publicKey) {
            setStatus("error");
            setErrorMessage(
                "Configuration EmailJS manquante. Veuillez définir les variables d'environnement."
            );
            return;
        }

        try {
            setStatus("sending");
            await emailjs.sendForm(serviceId, templateId, formRef.current, {
                publicKey,
            });
            setStatus("success");
            formRef.current.reset();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            } else {
                setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
            }
            setStatus("error");
        }
    };

    return (
        <div className="max-w-3xl mx-auto w-full">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Nom complet</label>
                    <input
                        name="full_name"
                        required
                        placeholder="Ex: Jean K."
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="vous@exemple.com"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>

                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Téléphone</label>
                    <input
                        name="phone"
                        placeholder="Ex: +229 90 00 00 00"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Entreprise</label>
                    <input
                        name="company"
                        placeholder="Nom de votre structure"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>

                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Budget</label>
                    <select
                        name="budget"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        defaultValue="200k-400k"
                    >
                        <option value="<200k">Moins de 200.000 FCFA</option>
                        <option value="200k-400k">
                            200.000 - 400.000 FCFA
                        </option>
                        <option value=">400k">Plus de 400.000 FCFA</option>
                    </select>
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm mb-1">Paiement</label>
                    <select
                        name="payment_plan"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        defaultValue="x1"
                    >
                        <option value="x1">Paiement en une fois (x1)</option>
                        <option value="x3">Paiement en 3 fois (x3)</option>
                        <option value="x6">Paiement en 6 fois (x6)</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm mb-1">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Parlez-nous de votre projet (objectifs, pages, inspiration, délais)"
                        className="w-full rounded-md bg-background/50 border border-primary/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                        En envoyant ce formulaire, vous acceptez d&apos;être
                        contacté par Digital Innovation.
                    </p>
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="px-6 py-2 cursor-pointer rounded-full text-xs bg-primary text-black border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 disabled:opacity-60"
                    >
                        {status === "sending"
                            ? "Envoi..."
                            : "Envoyer la demande"}
                    </button>
                </div>
            </form>

            {status === "success" && (
                <div className="mt-4">
                    <Alert className="border-primary/20 bg-primary/5">
                        <AlertDescription className="text-primary font-medium">
                            Votre demande a été envoyée. Nous reviendrons vers
                            vous sous 24h.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
            {status === "error" && (
                <div className="mt-4">
                    <Alert className="border-destructive/20 bg-destructive/10">
                        <AlertDescription className="text-destructive font-medium">
                            {errorMessage}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}
