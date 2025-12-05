"use client"

import { UIButton } from "@/components/ui/Button"

export function ContactForm() {
    return (
        <>
            <form
                aria-describedby="contact-status"
                className="max-w-[600px] w-full flex flex-col gap-[24px]"
            >
                <div className="hidden">
                    <label>Do not fill this field</label>
                    <input type="text" autoComplete="off" tabIndex={-1}
                        // {...register("honeypot")}
                    />
                </div>


                <div>
                    <label>Name</label>
                    <div >
                        <input id="name" className="h-[48px] w-full px-[5px] outline-none"/>
                        <hr />
                    </div>
                    
                </div>
                <div>
                    <label>Email</label>
                    <div className="w-full">
                        <input id="email" type="email" className="h-[48px] w-full px-[5px] outline-none" />
                        <hr />
                    </div>
                </div>
                <div>
                    <label>Message</label>
                    <div>
                        <textarea id="message" className="h-[180px] w-full px-[5px]
                            outline-none
                            resize-none 
                        "/>
                        <hr />
                    </div>
                </div>

                <div className="flex flex-row items-center gap-[8px] py-[24px]">
                    <input id="agree" type="checkbox" className="
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
                    <UIButton as="a" href="#" variant="solid" type="submit">Submit</UIButton>
                </div>
                
            </form>
        </>
    )
}