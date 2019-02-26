import React from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Row } from "components/grid/index";
import Button from "components/ui/Button/index";

const PromoSection = () => (
    <section className="section section__promo section__promo--home bg-black">
        <Container>
            <div className="block text-center text-white">
                <p className="block__description block__elem--sm">
                    Introducing Memurai for Windows
                </p>
                <h1 className="block__title block__elem--lg">
                    Redis-compatible, enterprise-grade in-memory database for Windows
                </h1>
                <p className="block__description block__elem">
                    Technical preview now available for download.
                </p>
                <Row theme="no-col" className="justify-center-xs">
                    <div className="button__wrapper">
                        <NextLink href={routes.GET_MEMURAI_PAGE.path}>
                            <Button type="solid" theme="red-white chevron chevron-down">
                                Download for free
                            </Button>
                        </NextLink>
                        <NextLink href={routes.WHY_MEMURAI_PAGE.path}>
                            <Button type="hollow" theme="red-white chevron promo-home">
                                Learn more
                            </Button>
                        </NextLink>
                    </div>
                </Row>
                <p className="block__postfix block__postfix--promo-home">
                    Current version: 0.1.2-beta. Compatible with Redis 4.2
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
