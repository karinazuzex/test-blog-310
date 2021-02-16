import { Fragment } from "react";

import { reviews } from "content";

import { Container, Row } from "components/grid";
import { Icon } from "components/ui";
import UserPromo from "components/User/Promo";

import IntegrationImage from "static/images/integration.svg";
import CompatibilityImage from "static/images/compatibility.png";
import PerformanceImage from "static/images/performance.png";
import SupportImage from "static/images/support.png";
import Support247Image from "static/images/support_icon.png";

const InfoWithReviewSection = () => {
    const containReview = !reviews && reviews.length;
    const renderBottomInfoBlocks = () => (
        <Fragment>
            <Row theme="no-col" className="info info--reversed">
                <div className="info__text info__block">
                    <h2 className="info__text-title">
                        Maximum performance and reliability as a Redis cache for Windows alternative
                    </h2>
                    <div className="info__text-description">
                        Memurai runs natively on the Windows APIs, and is fine-tuned
                        to offer the performance and reliability required to handle huge datasets and 
                        mission-critical workloads. Memurai is the Redis cache Windows optimized alternative that brings
                        together the best of both worlds. Are you looking for sub-milisecond or even faster
                        response times? Stop searching for a moment and give Memurai a try. 
                        Let the facts speak.
                    </div>
                </div>
                <Icon type="big-circled" theme="performance" className="info__image info__block">
                    <img src={PerformanceImage} alt="Redis cache for Windows alternative" />
                </Icon>
            </Row>
            <Row theme="no-col" className="info">
                <Icon type="big-circled" theme="support" className="info__image info__block">
                    <img src={SupportImage} alt="Enterprise Ready Redis alternative for Windows" />
                </Icon>
                <div className="info__text info__block">
                    <h2 className="info__text-title">
                        Enterprise Ready Redis alternative for Windows
                    </h2>
                    <div className="info__text-description">
                        Memurai is a fully-supported platform that meets enterprise customers’ requirements in
                        terms of support, scale, performance, and security. Memurai offers outstanding feature 
                        parity as a Redis Windows alternative to tackle the most demanding enterprise needs. 
                        Multiple Fortune 500 companies, government agencies, universities, insurance, and fintech 
                        companies on 5 continents already use it for critical workloads.
                    </div>
                </div>
            </Row>
        </Fragment>
    );

    return (
        <Fragment>
            <section
                className={`section section__info bg-white-grey ${containReview ? "" : "separator-bt"}`}
                id="learn-more-anchor"
            >
                <Container>
                    <Row theme="no-col" className="info">
                        <Icon type="big-circled" theme="support" className="info__image info__block">
                            <img src={Support247Image} alt="Enterprise Support - 24/7 Worldwide" />
                        </Icon>
                        <div className="info__text info__block">
                            <h2 className="info__text-title">
                                Enterprise Support - 24/7 worldwide
                            </h2>
                            <div className="info__text-description">
							   Worldwide, in all timezones, Memurai provides 24/7 support.
							   Our skilled technical team will respond to your support requests and guide you through issue troubleshooting and resolution.
							   Memurai is the only Redis-compatible Windows-native datastore offering enterprise-grade 24/7 support.
                               Contact us for SLA details.
                            </div>
                        </div>
                    </Row>
                    <Row theme="no-col" className="info info--reversed">
                        <div className="info__text info__block">
                            <h2 className="info__text-title">
                                Fully Redis-compatible
                            </h2>
                            <div className="info__text-description">
                                The core of Memurai is based on the Redis source code, ported to run natively on Windows.
                                Memurai reliably supports all the features that make Redis the most
                                popular NoSQL data store, including LRU eviction, persistence, replication, transactions, LUA
                                scripting, high-availability, pub/sub, cluster, modules, and streams. A lot of attention has been put into
                                ensuring full compatibility, including with the myriad of libraries and tools already available for Redis.
                                You can even replicate data between Memurai and Redis, or use
                                both within the same cluster!
                            </div>
                        </div>
                        <Icon type="big-circled" theme="compatibility" className="info__image info__block">
                            <img src={CompatibilityImage} alt="Fully Redis compatible" />
                        </Icon>
                    </Row>
                    <Row theme="no-col" className="info">
                        <Icon type="big-circled" theme="integration" className="info__image info__block">
                            <img src={IntegrationImage} alt="Integration with Windows infrastructure and workflows" />
                        </Icon>
                        <div className="info__text info__block">
                            <h2 className="info__text-title">
                                Seamless integration with Windows infrastructure and workflows
                            </h2>
                            <div className="info__text-description">
                               Whether it's used for development or production, Memurai seamlessly integrates with Windows best practices, 
                               tools and workflows. Engineering teams with an existing investments in the Windows infrastructure will be 
                               up to speed in no time. Memurai is the Redis Windows alternative that will not only help you save time and money, 
                               but also take full advantage of everything that the Windows ecosystem has to offer.
                            </div>
                        </div>
                    </Row>
                    {!containReview && renderBottomInfoBlocks()}
                </Container>
            </section>
            {containReview
                ? (
                    <Fragment>
                        <section className="section section__review-short">
                            <Container>
                                <div className="block text-center">
                                    <h4 className="block__title block__elem text-light">
                                        &quot;With Memurai, we just love how it integrates with Windows which gives us a
                                        competitive advantage.&quot;
                                    </h4>
                                </div>
                                <UserPromo />
                            </Container>
                        </section>
                        <section className="section section__info bg-white-grey separator-bt">
                            <Container>
                                {renderBottomInfoBlocks()}
                            </Container>
                        </section>
                    </Fragment>
                )
                : null
            }
        </Fragment>
    );
};

export default InfoWithReviewSection;
