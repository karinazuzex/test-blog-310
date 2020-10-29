import NextLink from "next/link";

import { routes, consts } from "config";

import { Container, Row } from "components/grid";
import { Button } from "components/ui";
import { Link } from "components/ui";

const PromoSection = () => (
    <section className="section section__get-memurai section__get-memurai--main bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    TRY MEMURAI TODAY
                </div>
                <h2 className="block__title block__elem--lg">
                    Download the free Developer Edition<br />
                </h2>
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
                <div className="block__description">
                    Want to learn more? Check out the&nbsp;
                    <NextLink href={routes.FAQ_PAGE.path} passHref>
                        <Link theme="red">
                            {routes.FAQ_PAGE.name}
                        </Link>
                    </NextLink> or&nbsp;
                    <NextLink href={routes.CONTACT_PAGE.path} passHref>
                        <Link theme="red">
                            {routes.CONTACT_PAGE.nameLong}
                        </Link>
                    </NextLink>.
                </div>
            </div>
        </Container>
    </section>
);

export default PromoSection;
