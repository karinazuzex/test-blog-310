import React from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container } from "components/grid/index";
import { Link } from "components/ui";

const AdditionalInfoSection = () => (
    <section className="section section__additional-info bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    Additional Info
                </div>
                <h3 className="block__title block__elem">
                    Want to know more?
                </h3>
                <div className="block__description">
                    Check out the&nbsp;
                    <NextLink href={routes.FAQ_PAGE.path} passHref prefetch>
                        <Link theme="red">
                            {routes.FAQ_PAGE.name}
                        </Link>
                    </NextLink> or&nbsp;
                    <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                        <Link theme="red">
                            {routes.CONTACT_PAGE.nameLong}
                        </Link>
                    </NextLink>.
                </div>
            </div>
        </Container>
    </section>
);

export default AdditionalInfoSection;
