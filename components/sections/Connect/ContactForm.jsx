"use client"

import { UIButton } from "@/components/ui/Button";
import { useContactForm } from "./useContactForm";

export function ContactForm() {

    const { isSubmitting, status, handleSubmit } = useContactForm();
    return (
        <>
            <form
                onSubmit={handleSubmit}
                aria-describedby="contact-status"
                className="max-w-[600px] w-full flex flex-col gap-[24px]"
            >
                <div className="hidden">
                    <label>Do not fill this field</label>
                    <input id="honeypot" name="honeypot" type="text" autoComplete="off" tabIndex={-1}/>
                </div>


                <div>
                    <label>Name</label>
                    <div >
                        <input id="name" name="name" className="h-[48px] w-full outline-none"/>
                        <hr />
                    </div>
                    
                </div>
                <div>
                    <label>Email</label>
                    <div className="w-full">
                        <input id="email" name="email" type="email" className="h-[48px] w-full outline-none" />
                        <hr />
                    </div>
                </div>
                <div>
                    <label>Message</label>
                    <div>
                        <textarea id="message" name="message" className="h-[180px] w-full py-[12px]
                            outline-none
                            resize-none 
                        "
                            placeholder="Type your message..."
                        />
                        <hr />
                    </div>
                </div>

                <div className="flex flex-row items-center gap-[8px] ">
                    <input id="agree" name="agree" type="checkbox" className="
                    w-[18px] h-[18px]
                    accent-[var(--color-electric-violet)]
                    "/>
                    <label className="flex flex-row ">I accept the&nbsp;
                        <div>
                            <a href="#">Terms</a>
                            <hr />
                        </div>
                    </label>
                </div>

                <div>
                    <UIButton type="submit" variant="solid"  disabled={isSubmitting}>Submit</UIButton>
                </div>

                {status.message && (
                    <div
                        id="contact-status"
                        aria-live="polite"
                        className="text-sm"
                    >
                        <p className={status.ok ? "text-emerald-400" : "text-red-400"}>
                        {status.message}
                        </p>
                    </div>
                )}
                
            </form>
        </>
    )
}