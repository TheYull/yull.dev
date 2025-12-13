import { REVIEWS } from "./reviewsConfig";

export function ReviewsCard() {

    return (
        <div className="pt-[48px] flex gap-[64px]">
            {REVIEWS.map((item) => (
                <article key={item.id} className="min-w-[372px]">
                    <h5 className="!pb-[24px] lg:!pb-[32px]">{item.text}</h5>

                    <div className="lg:flex items-center justify-between">

                        <div className="w-[58px] h-[56px] ">
                            <img src={item.image} alt="person" className="rounded-full" />
                        </div>

                        <div className="lg:py-0  pt-[16px] pb-[30px]">
                            <h6 className="!pb-[5px]">{item.name}</h6>
                            <p>{item.position}</p>
                        </div>

                        <span className="w-px bg-[var(--color-scheme-1-text)] lg:h-[61px]"></span>

                        <div className=" h-[48px]">
                            <img src={item.network_img} alt="network" className="max-w-[120px] h-[48px]" />
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}