
export function FAQsSection({items}) {

    return (
        <div className="lg:pb-[80px] pb-[48px]">
            <hr />
            {items.map((item, id) => (
                <article key={item.id} className="">
                    
                    <h5 className="py-[21px]">{item.question}</h5>
                    <p className="lg:pb-[24px] pb-[20px]">{item.answer}</p>
                    <hr />
                </article>
            ))}
        </div>
    )
}