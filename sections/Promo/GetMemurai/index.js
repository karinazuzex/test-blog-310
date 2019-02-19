import React from "react";

import { Container } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--get-memurai">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Get Memurai
                </h3>
                <p className="block_description">
                    Please fill in the information below so we can send you a download link.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
