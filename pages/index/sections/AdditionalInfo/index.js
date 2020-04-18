import React, { Fragment } from "react";
import NextLink from "next/link";

import { routes } from "config";

import { Container } from "components/grid";
import { Link } from "components/ui";

const AdditionalInfoSection = () => (
    <Fragment>
    <section className="section section__additional-info bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem">
                    Memurai DevEd available from NuGet
                </h3>
                <div className="block__description">
                    Recently we added Memurai DevEd to the Nuget gallery.&nbsp;
                    <NextLink href="https://www.nuget.org/packages/MemuraiDevEd/" passHref prefetch>
                        <Link target="_blank" theme="red">
                            More details »
                        </Link>
                    </NextLink>
                </div>
            </div>
        </Container>
    </section>
    <section className="section section__additional-info bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem">
                    Chocolatey package for Memurai DevEd <br/>is available now
                </h3>
                <div className="block__description">
                    Installing Memurai DevEd on Windows with chocolatey is available now.&nbsp;
                    <NextLink href="https://chocolatey.org/packages/MemuraiDevEd" passHref prefetch>
                        <Link target="_blank" theme="red">
                            More details »
                        </Link>
                    </NextLink>
                </div>
            </div>
        </Container>
    </section>
    </Fragment>
);

export default AdditionalInfoSection;
