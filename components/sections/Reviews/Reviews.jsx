"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { ReviewsCard } from "./ReviewsCard";
import { EmptyReviews } from "./EmptyReviews";
import { REVIEWS } from "./reviewsConfig";

export function Reviews({ reviews = [] }) {
    const list = reviews && reviews.length > 0 ? reviews : REVIEWS;
    const isEmpty = list.length === 0;

    const t = useTranslations("reviews");

    return (
        <section className="section-shell section--pink ">
            <Container>
                <div id="reviews">
                    <h3>{t("title")}</h3>
                    <p>{t("subtitle")}</p>

                    {isEmpty ? (
                        <EmptyReviews t={t} />
                    ): (
                        <ReviewsCard reviews={list}/>    
                    )}
                    
                </div>
            </Container>
        </section>
    );
}