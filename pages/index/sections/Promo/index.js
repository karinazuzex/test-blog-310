import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config";

import { Container, Row } from "components/grid";
import { Button } from "components/ui";

const PromoSection = () => (
    <section className="section section__promo section__promo--home bg-black">
        <Container>
            <div className="block text-center text-white">
                <p className="block__description block__elem--sm">
                    Ready for the most demanding production workloads
                    <br/>
                    Free for development and testing
                </p>
                <h1 className="block__title block__elem--lg">
                    <span className="text-normal">
                        Redis-compatible cache and datastore for Windows
                    </span>
                </h1>
                <p className="block__description block__elem">
                    Developer Edition now available for download.
                </p>
                <Row theme="no-col" className="justify-center-xs">
                    <div className="button__wrapper">
                        <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref prefetch>
                            <Button as="a" type="solid" theme="red-white chevron chevron-down">
                                Download for free
                            </Button>
                        </NextLink>
                        <Button as="scroll"
                                to="learn-more-anchor"
                                smooth="easeOutQuad"
                                duration={400}
                                offset={-60}
                                type="hollow"
                                theme="red-white chevron promo-home"
                        >
                            Learn more
                        </Button>
                    </div>
                </Row>
                <p className="block__postfix block__postfix--promo-home">
                    Current version: {consts.MEMURAI_VERSION}
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
