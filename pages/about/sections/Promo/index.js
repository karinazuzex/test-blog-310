import React from "react";

import { Container } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--about">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    About Us
                </h3>
                <p className="block__description block__description--fixed">
                    The Memurai team is comprised of individuals who are passionate about delivering cutting edge
                    solutions that solve customer problems. Our journey with Memurai can be traced back to 2013, when a
                    few of our team members started working on the Microsoft Open Technologies port of Redis to Windows.
                    A few years later, after that project had ended, it became clear that there were many companies with
                    large investments in Windows infrastructure and know-how who needed a high-performance data store
                    solution compatible with Redis and its ecosystem. Memurai for Windows was born.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
