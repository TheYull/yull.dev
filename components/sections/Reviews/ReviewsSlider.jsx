"use client";

import { useState } from "react";
import { ReviewsCard } from "./ReviewsCard";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

export function ReviewsSlider({ reviews }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(i => (i === 0 ? reviews.length - 1 : i - 1));

  const next = () =>
    setIndex(i => (i === reviews.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">

      {/* MASK */}
      <div className="overflow-hidden">

        {/* TRACK */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map(item => (
            <div key={item.id} className="w-full flex-shrink-0">
              <ReviewsCard reviews={[item]} />
            </div>
          ))}
        </div>

      </div>

        <div className="flex justify-between">
              
            {/* DOTS */}
            <div className="flex gap-2 mt-6">
                {reviews.map((_, i) => (
                <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                    index === i ? "bg-black" : "bg-black/30"
                    }`}
                />
                ))}
            </div>

                {/* ARROWS */}
                <div className="flex gap-4 mt-4">
                    <button onClick={prev}><CircleArrowLeft /></button>
                    <button onClick={next}><CircleArrowRight /></button>
                </div>
              
      </div>
          
    </div>
  );
}
