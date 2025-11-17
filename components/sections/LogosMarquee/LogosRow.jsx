"use client";
import Image from 'next/image';


export function LogosRow({
    items,
    gapClass = 'gap-10 md:gap-14',
    logoSize = { width: 160, height: 56 },
    ariaHidden = false,
    prioritizeFirst = false,
    className = ""
}) {
    
    return (
        <ul className={`flex shrink-0 items-center ${gapClass} ${className}`}
            aria-hidden={ariaHidden}
        >
            {items.map(({ src, alt }, index) => (
                <li key={index} 
                    className='flex-none'
                >
                    <Image 
                        src={src} 
                        alt={alt} 
                        width={logoSize.width} 
                        height={logoSize.height} 
                        priority={prioritizeFirst && index < 2}
                        className='opacity-90 transition-opacity hover:opacity-100'
                        sizes='(max-width: 768px) 40vw, 20vw'
                    />
                </li>
            ))}
       </ul>
    )
};