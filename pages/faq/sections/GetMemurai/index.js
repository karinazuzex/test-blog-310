
import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config";

import { Container, Row } from "components/grid";
import { Button } from "components/ui";

const GetMemuraiSection = () => (
    <section className="section section__get-memurai bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    TRY MEMURAI TODAY
                </div>
                <h3 className="block__title block__elem--lg">
                    Download the free Developer Edition<br />
                </h3>
                <Row theme="no-col" className="justify-center-xs">
                    <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
                        <Button as="a" type="solid" theme="red-white">
                            Download for free
                        </Button>
                    </NextLink>
                </Row>
                <p className="block__postfix block__postfix--promo-home" style={{textAlign:"center"}}>
                    Current version: {consts.MEMURAI_VERSION}
                </p>
            </div>
        </Container>
    </section>
);

export default GetMemuraiSection;
