"use client"
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="section--black text-center">
            <Container>
                <div id="footer" className="lg:pb-[80px] pb-[64px] sm:px-[20px] ">
                    <div className="lg:pt-[148px] pt-[116px] lg:pb-[80px] pb-[48px]">
                        <div className="flex md:flex-row flex-col justify-center lg:gap-[32px] gap-[24px] lg:pb-[32px] pb-[24px]">
                            <a href="https://www.linkedin.com/in/yuliia-kosenko-388458248/" className="hover:text-[var(--color-blue-lighter)] hover:scale-105" target="_blank">Linkedin</a>
                            <a href="https://github.com/TheYull" target="_blank" className="hover:text-[var(--color-blue-lighter)] hover:scale-105">GitHub</a>
                            <a href="https://t.me/moonlight_in_the_darks" target="_blank" className="hover:text-[var(--color-blue-lighter)] hover:scale-105">Telegram</a>
                            <a href="https://www.instagram.com/dev_yull?igsh=a3R1MnNuM3lxNHAw&utm_source=qr" target="_blank" className="hover:text-[var(--color-blue-lighter)] hover:scale-105">Instagram</a>
                        </div>
                        <a href="mailto:frontend.yuliia@gmail.com" target="_blank" className="hover:text-[var(--color-blue-lighter)]">Email</a>
                    </div>

                    <hr />

                    <div className="flex md:flex-row flex-col-reverse justify-between pt-[32px]">
                        <p>© 2024 Relume. All rights reserved.</p>
                        <div className="flex md:flex-row  flex-col items-center lg:gap-[24px] gap-[16px] md:pb-0 pb-[16px]">
                            <div>
                                <a href="#" className="hover:text-[var(--color-blue-lighter)]">Privacy Policy</a>
                                <hr />
                            </div>
                            <div>
                                <a href="#" className="hover:text-[var(--color-blue-lighter)]">Terms of Service</a>
                                <hr />
                            </div>
                            <div>
                                <a href="#" className="hover:text-[var(--color-blue-lighter)]">Cookies Settings</a>
                                <hr />
                            </div>
                        </div>
                    </div>
                    

                </div>
            </Container>
        </footer>
    );
}
