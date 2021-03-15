import React from "react";
import NextLink from "next/link";
import { routes } from "config";
import { Container } from "components/grid";
import { Button } from "components/ui";
import MemuraiFinancialBanner from "/static/images/iot_background.jpg";

const PromoSection = () => {
    return (
        <section className="section section__promo section__promo--solutions pb-0 pt-0">
            <Container>
                <div className="block">
                    <div className="block block__elem--lg">
                        <h1 className="block__title text-bold block__elem--xs">
                            Redis/Memurai IoT Use Case
                        </h1>
                    </div>
                    <div className="block block__elem--lg justify-center-xs">
                        <img src={MemuraiFinancialBanner} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromoSection;
