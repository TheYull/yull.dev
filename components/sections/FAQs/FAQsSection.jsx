import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQsSection({ items }) {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => { 
        setOpenId((current) => (current === id ? null : id));
    }

    return (
        <div className="lg:pb-[80px] pb-[48px]">
            <hr />
            {items.slice(0, 5).map((item, id) => {
                const isOpen = openId === item.id;

                return (
                    <article key={item.id} className="">
                    
                        
                        <button
                            type="button"
                            className="h-full w-full text-left lg:py-[21px] py-[16px] flex flex-col"
                            onClick={() => handleToggle(item.id)}>
                            
                            <div className=" flex items-center gap-[15px] justify-between">
                                <h6 className="text-[20px] !py-0">{item.question}</h6>
                                <ChevronDown
                                    className={`shrink-0 transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                                }`}
                                />
                            </div>
                            </button>
                            

                        {isOpen && (
                            <p className="lg:pb-[24px] pb-[20px]">{item.answer}</p>
                        )}
                    
                        <hr />
                    </article>
                );
        })}
        </div>
    )
}