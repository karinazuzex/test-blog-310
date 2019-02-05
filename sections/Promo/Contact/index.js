import React from "react";

import { Container } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--contact">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Contact
                </h3>
                <p className="block_description">
                    Have a question? Send us a note using the form below and someone from the Memurai team will be in
                    touch soon.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
