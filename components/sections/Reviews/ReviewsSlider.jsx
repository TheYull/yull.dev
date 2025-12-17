"use client";

import { useEffect, useMemo, useState } from "react";
import { ReviewsCard } from "./ReviewsCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

function chunkArray(array, size) {
    const results = [];
    for (let i = 0; i < array.length; i += size) {
        results.push(array.slice(i, i + size));
    }
    return results;
}

export function ReviewsSlider({ reviews }) { 
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {

        // window size detection
        function updateItems() {
            if (typeof window === "undefined") return;
            setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
        }

        updateItems();
        // listener resize 
        window.addEventListener("resize", updateItems);

        // delete listener on unmount
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    // chunk reviews into pages
    const pages = useMemo(() => chunkArray(reviews, itemsPerPage), [reviews, itemsPerPage]);
    const totalPages = pages.length;

    // reset current page if total pages change
    useEffect(() => {
        if (currentPage > totalPages - 1) {
            setCurrentPage(0);
        }
    }, [totalPages, currentPage]);

    // handlers for prev
    const handlePrev = () => setCurrentPage(prev => (prev === 0 ? totalPages - 1 : prev - 1));

    // handlers for next
    const handleNext = () => setCurrentPage(prev => (prev === totalPages - 1 ? 0 : prev + 1));

    // handlers for dot click
   const handleDotClick = i => setCurrentPage(i);

    return (
        <div>

            <div className="relative">
                <div className="overflow-hidden">
                
                    <div className="flex transition-transform duration-500 ease-in-out "
                        style={{
                            transform: `translateX(-${currentPage * (100 / totalPages)}%)

                        `}}>

                        {pages.map((page, i) => (
                            <div key={i} className="flex-shrink-0 w-full">
                                
                                <ReviewsCard key={i} reviews={page} />
                            
                            </div>
                        ))}
                    
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
                {pages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        className={`h-2 w-2 rounded-full transition ${
                            currentPage === i ? "bg-black" : "bg-black/30 hover:bg-black/60"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex flex-row justify-end">
                    <button
                        onClick={handlePrev} 
                    aria-label="Previous slide"
                    >
                        <CircleArrowLeft />
                    </button>
                    <button
                        onClick={handleNext} 
                        aria-label="Next slide"
                    >
                       <CircleArrowRight />
                    </button>
                </div>
            )}
            
            

        </div>
    )
}