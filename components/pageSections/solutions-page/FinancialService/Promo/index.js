import React from "react";
import NextLink from "next/link";
import { routes } from "config";
import { Container } from "components/grid";
import { Button } from "components/ui";
import MemuraiFinancialBanner from "/static/images/memurai-money-banner.png";

const PromoSection = () => {
    return (
        <section className="section section__promo section__promo--solutions pb-0">
            <Container>
                <div className="block">
                    <div className="block block__elem--lg">
                        <h1 className="block__title text-bold block__elem--xs">
                            Memurai Enterprise for financial services
                        </h1>
                        <p className="block__description block__elem--lg text-weight-500 text-secondary">
                            Lower risk, improved resilience, assure compliance
                            and provide a superior customer experience with
                            Memurai
                        </p>
                    </div>
                    <div className="block block__elem--lg">
                        <img src={MemuraiFinancialBanner} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromoSection;
