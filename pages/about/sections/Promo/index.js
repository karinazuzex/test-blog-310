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
                    The Memurai team is a group of experienced developers and IT<br/> 
                    professionals with a long track record of delivering cutting edge solutions to<br/>
                    software developers and enterprise customers. We combine our expertise in<br/>
                    open source technologies with deep understanding of the needs and<br/>
                    challenges that enterprise customers are facing in the new fast-moving<br/>
                    world of cloud-native app and service development.<br/><br/>
                    Our journey with Memurai for Windows can be traced back to 2013, when we<br/>
                    began leading the development of the Redis on Windows project by<br/>
                    Microsoft Open Technologies (MSOpenTech).<br /><br />

                    <small>Memurai is a division and d/b/a of Janea Systems, Inc.</small>
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
