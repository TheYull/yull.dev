"use client";
import { useState } from "react";

export function useContactForm() {
    // Status: request
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Status: success/error
    const [status, setStatus] = useState({
        ok: false,
        message: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();

        setStatus({ ok: false, message: "" });
        setIsSubmitting(true);

        try {
            // Collects all fields from the form
            const formData = new FormData(event.target);
            
            // Gets the values of fields
            const name = formData.get("name")?.toString().trim() || "";
            const email = formData.get("email")?.toString().trim() || "";
            const message = formData.get("message")?.toString().trim() || "";
            const honeypot = formData.get("honeypot")?.toString().trim() || "";
            const agree = formData.get("agree") === "on";

            // User data verification frontend
            if (!name || !email || !message) {
                setStatus({
                    ok: false,
                    message: "Please fill in all required fields.",
                });

                setIsSubmitting(false);
                return;
            }
            if (!agree) {
                setStatus({
                    ok: false,
                    message: "You must agree to the terms and conditions.",
                });

                setIsSubmitting(false);
                return;
            }

            // Sending a POST request to the API route
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    honeypot,
                    agree,
                }),
            });

            // Trying to read JSON from the response
            const data = await res.json().catch(() => null);

            if (!res.ok || !data?.ok) { 
                setStatus({
                    ok: false,
                    message: data?.error || "An error occurred while sending the message. Please try again later.",
                });
                setIsSubmitting(false);
                return;
            }

            setStatus({
                ok: true,
                message: "Your message has been sent successfully!",
            });

            event.target.reset();

        } catch (error) {
            console.error("Contact form error:", error);
            setStatus({
                ok: false,
                message: "An unexpected error occurred. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        isSubmitting,
        status,
        handleSubmit,
    };
}