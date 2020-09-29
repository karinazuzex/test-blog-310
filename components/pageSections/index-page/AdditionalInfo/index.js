import { Fragment } from "react";
import NextLink from "next/link";

import { Container } from "components/grid";
import { Link } from "components/ui";

const AdditionalInfoSection = () => (
    <Fragment>
    <section className="section section__additional-info bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem">
                    Nuget package for Memurai Developer
                </h3>
                <div className="block__description">
                    Get Memurai Developer&nbsp;
                    <NextLink href="https://www.nuget.org/packages/MemuraiDeveloper/" passHref>
                        <Link target="_blank" theme="red">
                        from Nuget
                        </Link>
                    </NextLink>.
                </div>
            </div>
        </Container>
    </section>
    <section className="section section__additional-info bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem">
                    Chocolatey package for Memurai Developer
                </h3>
                <div className="block__description">
                    Install Memurai Developer&nbsp;
                    <NextLink href="https://chocolatey.org/packages/memurai-developer/" passHref>
                        <Link target="_blank" theme="red">
                            with Chocolatey
                        </Link>
                    </NextLink>.
                </div>
            </div>
        </Container>
    </section>
    </Fragment>
);

export default AdditionalInfoSection;
