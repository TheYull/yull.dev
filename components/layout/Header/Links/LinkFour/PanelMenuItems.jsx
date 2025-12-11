"use client"


export function PanelMenuItems() {
    return (
        <>
            <section className="section--black ">
                <div className="lg:px-[64px] px-[20px] lg:py-[24px] py-[16px] flex flex-col lg:flex-row lg:gap-[98px] gap-[32px]">
                    <div className="flex flex-col gap-[16px]">
                        <h6 className="!p-0">Contact me</h6>
                        <a href="mailto:frontend.yuliia@gmail.com" target="_blank" className="hover:text-[var(--color-blue-lighter)]">Email</a>
                        <a href="https://t.me/moonlight_in_the_darks" target="_blank" className="hover:text-[var(--color-blue-lighter)]">Telegram</a>
                        <a href="https://www.instagram.com/dev_yull?igsh=a3R1MnNuM3lxNHAw&utm_source=qr" target="_blank" className="hover:text-[var(--color-blue-lighter)]">Instagram</a>
                        <a href="https://www.linkedin.com/in/yuliia-kosenko-388458248/" target="_blank" className="hover:text-[var(--color-blue-lighter)]">Linkedin</a>
                        <a href="https://github.com/TheYull" target="_blank" className="hover:text-[var(--color-blue-lighter)]">GitHub</a>

                    </div>

                    <div>
                        Content in progress..
                    </div>
                </div>
            </section>
        </>
    )
}