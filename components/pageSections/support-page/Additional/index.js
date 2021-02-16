import React from "react";
import NextLink from "next/link";
import { Button, Link } from "components/ui";
import { routes } from "config";
import { Container, Row, Col } from "components/grid";

import BlockImage from "static/images/blog.png";
import DocumentationImage from "static/images/documentation.png";
import QuestionImage from "static/images/questions.png";
import NewsletterImage from "static/images/newsletter.png";

const AdditionalSection = () => {
    return (
        <section class="section section__support bg-white-grey separator-bt pb-0">
            <Container className="bg-white-grey">
                <Row className="justify-center-lg justify-center-md justify-center-xs block__elem--xl">
                    <div>
                        <h1 className="block__title block__elem--xs">
                            Additional support
                        </h1>
                        <p>
                            Please refer to these helpful resources for all of
                            your Memurai needs.
                        </p>
                    </div>
                </Row>
                <div className="block">
                    <Row className="justify-center-lg justify-center-md justify-center-xs">
                        <div className="col-md-6 col-xs-12 block__elem--80">
                            <div className="d-flex nowrap  ht-100">
                                <img
                                    src={BlockImage}
                                    className="icon__icon-sm"
                                />
                                <div className="text-left column justify-between-xs">
                                    <div>
                                        <h4 className="blog__title blog-subscribe__title blog__title--bottom">
                                            Blog
                                        </h4>
                                        <p className="blog__text blog__text--bottom blog__text--link ">
                                            Technical articles and news about
                                            Memurai including categories such as
                                            SQL index, financial services,
                                            performance and more.
                                        </p>
                                    </div>
                                    <NextLink
                                        href={routes.BLOG_PAGE.path}
                                        passHref
                                    >
                                        <Link className="link--red">
                                            <span className="blog__text">
                                                View Blog
                                            </span>
                                        </Link>
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 block__elem--80">
                            <div className="d-flex nowrap ht-100">
                                <img
                                    src={DocumentationImage}
                                    className="icon__icon-sm"
                                />
                                <div className="text-left column justify-between-xs">
                                    <div>
                                        <h4 className="blog__title blog-subscribe__title blog__title--bottom">
                                            Documentation
                                        </h4>
                                        <p className="blog__text blog__text--bottom blog__text--link">
                                            Helpful documentation for getting
                                            started with Memurai as well as
                                            various tools and additional
                                            technical references.
                                        </p>
                                    </div>

                                    <Link
                                        href="https://memuweb-docs.netlify.app/en/installation.html"
                                        target="_blank"
                                        passHref
                                        className="link--red"
                                    >
                                        <span className="blog__text">
                                            View Documentation
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="justify-center-lg justify-center-md justify-center-xs">
                        <div className="col-md-6 col-xs-12 block__elem--100">
                            <div className="d-flex nowrap ht-100">
                                <img
                                    src={QuestionImage}
                                    className="icon__icon-sm"
                                />

                                <div className="text-left column justify-between-xs">
                                    <div>
                                        <h4 className="blog__title blog-subscribe__title blog__title--bottom">
                                            Frequently Asked Questions
                                        </h4>
                                        <p className="blog__text blog__text--bottom blog__text--link">
                                            Technical articles and news about
                                            Memurai including categories such as
                                            SQL index, financial services,
                                            performance and more.
                                        </p>
                                    </div>
                                    <NextLink
                                        href={routes.FAQ_PAGE.path}
                                        passHref
                                    >
                                        <Link className="link--red">
                                            <span className="blog__text">
                                                View FAQs
                                            </span>
                                        </Link>
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 block__elem--100">
                            <div className="d-flex nowrap ht-100">
                                <img
                                    src={NewsletterImage}
                                    className="icon__icon-sm"
                                />
                                <div className="col text-left column justify-between-xs">
                                    <div>
                                        <h4 className="blog__title blog-subscribe__title blog__title--bottom">
                                            Newsletter
                                        </h4>
                                        <p className="blog__text blog__text--bottom blog__text--link">
                                            Receive updates about key news and
                                            special offers. We send out the
                                            Memurai newsletter
                                            {` <#>`} month.
                                        </p>
                                    </div>
                                    <NextLink
                                        href={routes.NEWSLETTER_PAGE.path}
                                        passHref
                                    >
                                        <Link className="link--red">
                                            <span className="blog__text">
                                                Subscribe to Newsletter
                                            </span>
                                        </Link>
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default AdditionalSection;
