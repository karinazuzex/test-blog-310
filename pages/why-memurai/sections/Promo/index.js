import React from "react";

import { Container } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--why">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    Why Memurai
                </h3>
                <p className="block__description block__description--fixed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
