import React from "react";

import { Container, Row } from "components/grid/index";
import Button from "components/ui/Button/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--home bg-black">
        <Container>
            <div className="block text-center text-white">
                <h1 className="block__title block__elem--lg">
                    Introducing Memurai<br />
                    Redis-compatible, enterprise-grade  in-memory database for Windows
                </h1>
                <p className="block_description block__elem">
                    Technical preview now available for download.
                </p>
                <Row theme="no-col" className="justify-center-xs">
                    <Button type="solid" theme="red-white chevron versioned">
                        Download for free
                    </Button>
                    <Button type="hollow" theme="red-white chevron promo-home">
                        Learn more
                    </Button>
                </Row>
                <p className="block__postfix block__postfix--promo-home">
                    Current version: 0.1.2-beta. Compatible with Redis 4.2
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;