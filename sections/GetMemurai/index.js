import React from "react";

import { Container, Row } from "components/grid/index";
import Button from "components/ui/Button/index";

const PromoSection = () => (
    <section className="section section__get-memurai bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem">
                    GET MEMURAI
                </div>
                <h3 className="block__title block__elem--lg">
                    Download the free technical preview<br />
                    Try Memurai today
                </h3>
                <Row theme="no-col" className="justify-center-xs">
                    <Button type="solid" theme="red-white chevron versioned versioned-black">
                        Download for free
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
