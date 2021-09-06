import React from "react";
import { Container } from "components/grid";

const PromoSection = () => {
    return (
        <section className="section section__promo section__promo--solutions pb-0">
            <Container>
                <div className="row row--no-col block block__elem--lg">
                    <div className="col-md-4 bg-black text-white text-fs-48 text-lh-75">
                        “A high performance database that delivers
                        sub-milliseconds response time can be vital.”
                    </div>
                    <div className="col-md-8 text-fs-20">
                        <p>
                            The financial industry is undergoing massive
                            changes. While consumer expectations have increased
                            in the last few years, the market has become more
                            and more competitive. On top of this, the global
                            pandemic and low interest rates; financial
                            institutions are facing the{" "}
                            <a
                                className="blog__text--underline text-black"
                                target="_blank"
                                href="https://www.cnbc.com/video/2020/10/20/this-is-an-income-statement-recession-not-a-balance-sheet-recession-1-bank-analyst.html"
                            >
                                worst bank stock performance in history.
                            </a>
                        </p>
                        <p>
                            Financial institutions are responding by looking to
                            improve profitability by making business decisions
                            faster, for example by approving loans and credit
                            applications more quickly. A high-performance
                            database that delivers sub-millisecond response
                            times can be vital. Memurai Enterprise high
                            availability and seamless integration with Windows
                            make it the perfect tool to help financial
                            institutions be more competitive.
                        </p>
                        <p>
                            Memurai is a fully-supported platform that meets
                            enterprise customers’ requirements in terms of
                            support, scalability, and performance. Memurai
                            offers outstanding feature parity as a
                            Redis-compatible Windows alternative to tackle the
                            most demanding enterprise needs. Multiple Fortune
                            500 companies, government agencies, universities,
                            insurance, and fintech companies on 7 continents
                            already use it for critical workloads.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromoSection;
