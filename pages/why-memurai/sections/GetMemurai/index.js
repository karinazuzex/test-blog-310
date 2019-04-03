import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config";

import { Container, Row } from "components/grid/index";
import Button from "components/ui/Button/index";

const PromoSection = () => (
    <section className="section section__get-memurai bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    GET MEMURAI
                </div>
                <h3 className="block__title block__elem--lg">
                    Download the free technical preview<br />
                    <span className="text-normal">Try Memurai today</span>
                </h3>
                <Row theme="no-col" className="justify-center-xs">
                    <NextLink href={routes.GET_MEMURAI_PAGE.path}>
                        <Button type="solid" theme="red-white chevron versioned versioned-black">
                            Download for free
                        </Button>
                    </NextLink>
                </Row>
                <p className="block__postfix block__postfix--promo-home">
                    Current version: {consts.MEMURAI_VERSION}
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;