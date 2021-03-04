import React from "react";
import NextLink from "next/link";
import { Link } from "components/ui";
import { routes } from "config";
import { Container } from "components/grid";
import { Button } from "components/ui";
import MemuraiRedisP1 from "/static/images/memurai_vs_redis_p1.png";
import MemuraiRedisP16 from "/static/images/memurai_vs_redis_p16.png";

const FinancialEmpowerSection = () => {
    return (
        <section className="section section__promo section__promo--solutions pb-0">
            <Container>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h2 className="block__title text-bold block__elem--xs">
                            How Memurai Enterprise empower financial services
                        </h2>
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            Memurai Enterprise for fraud detection and
                            mitigation
                        </h3>
                    </div>
                    <div className="blog-item-content row row--no-col">
                        <div className="col-md-8">
                            <p>
                                The complexity of storing and executing multiple
                                risk models at the same time and the large
                                volume of transactions undertaken by today’s
                                financial industry lead to systems built on
                                traditional relational databases fall short when
                                it comes to the streaming of market data and
                                providing query answers in real time.
                            </p>
                            <h3 className="block__elem--xs text-red">
                                In-memory distributed cache provides a fast and
                                reliable solution that will end up in not only
                                better performance, but lower costs.
                            </h3>
                            <p>
                                In place checks and validation to fast in-memory
                                before transactions can help with fraud
                                detection and prevention.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src="https://www.datocms-assets.com/13391/1606133845-memurai-financial-services-1.jpg" />
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            A happy client is a long term client, strengthen
                            customer relationships
                        </h3>
                    </div>
                    <div className="blog row row--no-col reverse">
                        <div className="col-md-8">
                            <p className="block__elem--xs">
                                Today’s customers have higher expectations from
                                their financial institutions. Long gone are the
                                times when you went to a physical office for
                                everyone of your operations. These days most of
                                the operations are made on-line and mostly by
                                the bank app.
                            </p>
                            <p className="block__elem--xs">
                                Customers expect their banking apps to be
                                flawless.{" "}
                                <a
                                    className="blog__text--underline"
                                    target="_blank"
                                    href="https://www.citigroup.com/citi/news/2018/180426a.htm"
                                >
                                    Mobile banking apps are one of the most used
                                    mobile apps.
                                </a>{" "}
                                To meet customer expectations banks are changing
                                from the old relational databases that weren’t
                                designed for millions of transactions and
                                queries and customers constantly accessing their
                                accounts.
                            </p>
                            <p className="block__elem--xs">
                                Memurai is a responsible, low latency, scalable
                                and highly available in-memory cache and
                                datastore that will help your business reduce
                                complexity and costs while meeting your
                                customers’ ever-increasing demands.
                            </p>
                            <div className="row row--no-col">
                                <div>
                                    <NextLink
                                        href={routes.FAQ_PAGE.path}
                                        passHref
                                    >
                                        <Button
                                            as="a"
                                            type="solid"
                                            theme="red-white"
                                        >
                                            Learn more now
                                        </Button>
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://www.datocms-assets.com/13391/1614764899-cache-in-front-of-a-db50pc.png" />
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            Compatibility between Redis and Memurai
                        </h3>
                    </div>
                    <div className="blog">
                        <div className="col-md-12">
                            <p className="block__elem--xs">
                                Memurai is binary compatible with Redis. If
                                you’re already running Redis instances on Linux,
                                you can replicate data between Memurai and
                                Redis, or even use both Redis and Memurai within
                                the same cluster. If you have systems that are
                                relying on the now archived MSOpenTech Redis on
                                Windows that stopped evolving and got stuck at
                                version 3.x - Memurai is a rock-solid
                                alternative. The experience of transitioning
                                from MSOpenTech Redis to Memurai has been
                                smoothless for all customers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            How is the performance of Memurai on Windows
                            compared to Redis on Linux?
                        </h3>
                    </div>
                    <div className="blog">
                        <div className="col-md-12">
                            <p className="block__elem--xs">
                                Performance is crucial for developers using
                                in-memory caches. Memurai brings an
                                enterprise-grade cache and data store to Windows
                                and benefits from the considerable amount of
                                time we’ve poured into improving its
                                performance. The results above show Memurai
                                easily matches Redis for the majority of the
                                queries in the synthetic redis-benchmark
                                workload, and for some queries performs over 50%
                                better when pipelining is used, making Memurai a
                                competitive alternative to Redis for Windows
                                environments. You can read the full benchmark
                                comparison article{" "}
                                <NextLink
                                    href="/blog/[slug]"
                                    as={`/blog/memurai-vs-redis-benchmark-comparison`}
                                    // passHref
                                >
                                    <Link className="link">
                                        <span className="blog__text--underline">
                                            here.
                                        </span>
                                    </Link>
                                </NextLink>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            Memurai vs. Redis Benchmark Comparison
                        </h3>
                    </div>
                    <div className="blog">
                        <div className="row row--no-col">
                            <div className="col-md-6">
                                <img src={MemuraiRedisP1} />
                            </div>
                            <div className="col-md-6 blog-item-content">
                                <p className="mt-50">
                                    Fig 1.0 shows that performance of Redis and
                                    Memurai is comparable for most of the tests
                                    when using the -P1 option, with some
                                    marginal gains and losses that are within
                                    the noise. It’s a different story, however,
                                    for the LRANGE_* and MSET benchmark tests,
                                    and you can see a blatantly obvious
                                    improvement over the Redis scores. And when
                                    increasing the pipelining value to 16, the
                                    difference is even starker.
                                </p>
                            </div>
                        </div>
                        <div className="row row--no-col">
                            <div className="col-md-6">
                                <img src={MemuraiRedisP16} />
                            </div>
                            <div className="col-md-6 blog-item-content">
                                <p className="mt-50">
                                    Fig 2.0 demonstrates how pipelining helps
                                    recognize significant gains over Redis. The
                                    majority of the tests in fig 2.0 show more
                                    than a 5% improvement over Redis on Linux.
                                    But again it’s in the LRANGE_* results that
                                    Memurai shines. These benchmark results
                                    illustrate the dramatic improvement
                                    pipelining provides when working with
                                    Memurai, and each of the LRANGE_* tests
                                    shows over a 50% improvement when compared
                                    with Redis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            Are there known Redis Security vulnerabilities from
                            version 3.x addressed in Memurai?
                        </h3>
                    </div>
                    <div className="blog">
                        <div className="row row--no-col">
                            <div className="col-md-12">
                                <p className="block__elem--xs">
                                    Many customers, still using the archived MS
                                    Open Tech Redis on Windows build are exposed
                                    to a handful of publicly known security
                                    vulnerabilities. Those organizations are
                                    exposing themselves to unnecessary risks.
                                    Starting with Memurai 2.0.0 we already fixed
                                    and closed the known Redis 3.x, 4.x, and 5.x
                                    security vulnerabilities.
                                    <br /> Currently, not only we are free from
                                    security vulnerabilities, but we are
                                    committed to fix them as soon as they become
                                    known.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row--no-col block__elem--lg">
                    <div className="block">
                        <h3 className="block__description block__elem--lg text-weight-500 text-secondary">
                            How is Memurai different from other Redis for
                            Windows alternatives?
                        </h3>
                    </div>
                    <div className="blog">
                        <div className="row row--no-col">
                            <div className="col-md-12">
                                <p className="block__elem--xs">
                                    There is no official Redis support for
                                    Windows users. For testing and development
                                    purposes some developers recommend running
                                    Redis on Windows using Docker containers or
                                    running it under WSL (Windows Subsystem for
                                    Linux). Those alternatives are decent
                                    developer workarounds however those are not
                                    recommended for production workloads for
                                    performance, maintenance and security
                                    reasons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FinancialEmpowerSection;
