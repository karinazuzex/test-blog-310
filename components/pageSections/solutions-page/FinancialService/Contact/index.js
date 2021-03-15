import React from "react";
import NextLink from "next/link";
import { routes } from "config";
import { Container } from "components/grid";
import { Button } from "components/ui";
import { Logo } from "svg";
import Social from "components/Social";
const ContactSection = () => {
    return (
        <section className="section section__promo section__promo--solutions bg-black text-white">
            <Container>
                <div className="row row--no-col">
                    <div className="row row--no-col blog-item">
                        <div className="col-md-4">
                            <h1 className="block__title text-bold block__elem--xs">
                                Thank you
                            </h1>
                        </div>
                        <div className="col-md-8 justify-end-xs">
                            <Logo className="h-75 w-250" />
                        </div>
                    </div>
                    <div className="row row--no-col">
                        <div className="col-md-4">
                            Book a free consultation with one of our expert to
                            learn what we can do for your business
                            <div className="row row--no-col">
                                <div className="mt-30">
                                    <NextLink
                                        href={routes.CONTACT_PAGE.path}
                                        passHref
                                    >
                                        <Button
                                            as="a"
                                            type="solid"
                                            theme="red-white"
                                        >
                                            Talk to an expert
                                        </Button>
                                    </NextLink>
                                </div>
                            </div>
                            <div className="mt-50">
                                Download Memurai Developer Edition for free and
                                start using Memurai today.
                                <div className="row row--no-col">
                                    <div className="mt-30">
                                        <NextLink
                                            href={routes.GET_MEMURAI_PAGE.path}
                                            passHref
                                        >
                                            <Button
                                                as="a"
                                                type="solid"
                                                theme="red-white"
                                            >
                                                Download for free
                                            </Button>
                                        </NextLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="col-md-12">
                                <h3 className="block__description block__elem--lg text-weight-500">
                                    About Memurai Team
                                </h3>
                                <p>
                                    The Memurai team is a group of experienced
                                    developers and IT professionals with a long
                                    track record of delivering cutting edge
                                    solutions to software developers and
                                    enterprise customers.
                                </p>
                                <p className="mt-50">
                                    We combine our expertise in open source
                                    technologies with deep understanding of the
                                    needs and challenges that enterprise
                                    customers are facing in the new fast-moving
                                    world of cloud-native app and service
                                    development.
                                </p>
                                <p className="mt-50">
                                    Our journey with Memurai for Windows can be
                                    traced back to 2013, when we began leading
                                    the development of the Redis on Windows
                                    project by Microsoft Open Technologies
                                    (MSOpenTech).
                                </p>
                            </div>
                            <div className="mt-50">
                                <Social theme="transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
