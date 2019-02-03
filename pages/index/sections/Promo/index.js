import React from "react";

import { Container, Row } from "components/grid";
import Button from "components/ui/Button";

const PromoSection = () => (
    <section className="section section--home-promo bg-black">
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
                    <Button type="solid" theme="red-white">
                        Download for free
                    </Button>
                    <Button type="hollow" theme="red-white">
                        Learn more
                    </Button>
                </Row>
                <p className="block__postfix">
                    Current version: 0.1.2-beta. Compatible with Redis 4.2
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
