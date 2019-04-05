import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config/index";

import { Container, Row } from "components/grid/index";
import { Button } from "components/ui/index";

const PromoSection = () => (
    <section className="section section__get-memurai section__get-memurai--home bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    TRY MEMURAI TODAY
                </div>
                <h3 className="block__title block__elem--lg">
                    Download the free technical preview<br />
                </h3>
                <Row theme="no-col" className="justify-center-xs">
                    <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref prefetch>
                        <Button as="a" type="solid" theme="red-white chevron chevron-down">
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
