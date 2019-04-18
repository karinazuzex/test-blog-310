import React from "react";

import { Container } from "components/grid";

const PromoSection = () => (
    <section className="section section__promo section__promo--about">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem text-bold">
                    About Us
                </h3>
                <p className="block__description block__description--fixed">
                    The Memurai team is a group of experienced IT professionals with a long track record of delivering
                    cutting edge solutions to software developers and enterprise customers. Our journey with Memurai for
                    Windows can be traced back to 2013, when we began leading the development of the port of
                    Redis to Windows by Microsoft Open Technologies (MS Open Tech). Memurai for Windows is the fruit of the
                    expertise gained through that project.<br /><br />

                    Memurai is a division and d/b/a of Janea Systems, Inc.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
