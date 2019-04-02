import React from "react";

import { Container } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--why">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Why Memurai
                </h3>
                {/* <p className="block__description block__description--fixed">
                Redis-compatible, enterprise-grade in-memory database for Windows.
                </p> 
                */}
            </div>
        </Container>
    </section>
);

export default PromoSection;
