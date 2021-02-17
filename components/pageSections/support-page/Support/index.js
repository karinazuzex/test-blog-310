import React from "react";
import NextLink from "next/link";
import { Button, Link } from "components/ui";
import { routes } from "config";
import { Container, Row, Col } from "components/grid";

const SupportSection = () => {
    return (
        <section className="section section__support bg-white-grey pb-0">
            <Container>
                <Col>
                    <Row className="justify-center-lg justify-center-md justify-center-xs">
                        <div className="col-xs-12">
                            <div className="block enterprise_bg">
                                <div className="block text-center text-white">
                                    <h2 className="block__title block__elem--lg">
                                        Enterprise Support - 24/7 Worldwide
                                    </h2>

                                    <p className="block__description block__elem">
                                        Worldwide, in all timezones, Memurai
                                        provides 24/7 support. <br />
										Our skilled technical team will respond to your support requests and guide you through issue troubleshooting and resolution.
                                    </p>
                                    <div class="row justify-center-xs col-xs-12 row--no-col ">
                                        <div class="button__wrapper">
                                            <NextLink
                                                href={routes.CONTACT_PAGE.path}
                                                passHref
                                            >
                                                <Button
                                                    as="a"
                                                    type="solid"
                                                    theme="red-white"
                                                    style={{ width: "unset" }}
                                                >
                                                    Contact us
                                                </Button>
                                            </NextLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-between-lg justify-between-md justify-center-xs block__elem--40">
                        <div className="block__elem--40 col-md-4 col-xs-12">
                            <div className="block__blog ht-100 justify-between-xs">
                                <h4 className="blog__title blog__title--bottom">
                                    Developer Edition
                                </h4>
                                <p className="blog__text blog__text--bottom blog__text--link">
                                    Memurai community support on StackOverflow.
                                </p>
                                <Link
                                    href="https://stackoverflow.com/questions/tagged/memurai"
                                    target="_blank"
                                    passHref
                                    className="link--red"
                                >
                                    <span className="blog__text">
                                        Go to Stack Overflow
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="block__elem--40 col-md-4 col-xs-12">
                            <div className="block__blog ht-100 justify-between-xs">
                                <h4 className="blog__title blog__title--bottom">
                                    Enterprise Edition
                                </h4>
                                <p className="blog__text blog__text--bottom blog__text--link">
                                    Submit support issues through the Help Center.
                                </p>
                                <Link
                                    href="https://support.memurai.com"
                                    target="_blank"
                                    passHref
                                    className="link--red"
                                >
                                    <span className="blog__text">
                                        Go to Help Center
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="block__elem--40 col-md-4 col-xs-12">
                            <div className="block__blog ht-100 justify-between-xs">
                                <h4 className="blog__title blog__title--bottom">
                                    Consulting services
                                </h4>
                                <p className="blog__text blog__text--bottom blog__text--link">
                                    Our team is happy to offer consulting
                                    services for architectural and technical
                                    implementations.
                                </p>
                                <NextLink
                                    href={routes.CONTACT_PAGE.path}
                                    passHref
                                >
                                    <Link className="link--red">
                                        <span className="blog__text">
                                            Contact us
                                        </span>
                                    </Link>
                                </NextLink>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>
        </section>
    );
};

export default SupportSection;
