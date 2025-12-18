import { Star, User } from "lucide-react";

export function ReviewsCard({ reviews }) {

    return (
        <div className="pt-[48px] flex justify-center gap-[64px] max-w-[1200px] mx-auto">
            {reviews.map((item) => (
                <article key={item.id} className="md:max-w-[570px] w-full max-w-[372px]" >

                    <div className="flex gap-1 pb-[32px]">
                    {[...Array(item.rating)].map((_, i) => (
                        <Star
                        key={i}
                        size={20}
                        className="text-black/20"
                        fill="black"
                        strokeWidth={1.5}
                        />
                ))}
                    </div>
                    
                    <h5 className="!pb-[24px] lg:!pb-[32px]">{item.text}</h5>

                    <div className="lg:flex items-center justify-between">

                        <div className="w-[58px] h-[56px] bg-[#cac2d3] rounded-4xl flex flex-col justify-center items-center">
                        {item.image && (
                            <img src={item.image} alt="person" className="rounded-full" />
                        )|| (
                            <User />
                                )}
                        </div>
                        

                        <div className="lg:px-0  pt-[16px] pb-[30px]">
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