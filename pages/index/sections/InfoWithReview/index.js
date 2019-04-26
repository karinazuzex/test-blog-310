import React, { Fragment } from "react";

import { reviews } from "content";

import { Container, Row } from "components/grid";
import { Icon } from "components/ui";
import UserPromo from "components/User/Promo";

import IntegrationImage from "static/images/integration.svg";
import CompatibilityImage from "static/images/compatibility.png";
import PerformanceImage from "static/images/performance.png";
import SupportImage from "static/images/support.png";

const InfoWithReviewSection = () => {
    const containReview = !reviews && reviews.length;
    const renderBottomInfoBlocks = () => (
        <Fragment>
            <Row theme="no-col" className="info info--reversed">
                <div className="info__text info__block">
                    <h5 className="info__text-title">
                        Uncompromised performance
                    </h5>
                    <div className="info__text-description">
                        Memurai is built on top of Windows' native APIs and fine-tuned to offer uncompromised performance
                        and the reliability required to handle huge datasets and mission-critical workloads. 
                    </div>
                </div>
                <Icon type="big-circled" theme="performance" className="info__image info__block">
                    <img src={PerformanceImage} alt="Performance" />
                </Icon>
            </Row>
            <Row theme="no-col" className="info">
                <Icon type="big-circled" theme="support" className="info__image info__block">
                    <img src={SupportImage} alt="Support" />
                </Icon>
                <div className="info__text info__block">
                    <h5 className="info__text-title">
                        Enterprise Ready
                    </h5>
                    <div className="info__text-description">
                        Memurai is a fully supported platform that meets enterprise customers’ requirements in terms
                        of support, scale, performance and security.                    
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
                    <Row theme="no-col" className="info info--reversed">
                        <div className="info__text info__block">
                            <h5 className="info__text-title">
                                Fully compatible with Redis
                            </h5>
                            <div className="info__text-description">
                                The core of Memurai is based on Redis source code, ported to run natively on Windows.
                                Memurai reliably supports all the features that make Redis the most
                                popular NoSQL data store, including LRU eviction, persistence, replication, transactions, LUA
                                scripting, high-availability, cluster, pub/sub and streams. A lot of attention has been put into
                                ensuring full compatibility, including with the myriad of libraries and
                                tools already available for Redis. You can even replicate data between Memurai and Redis, or use
                                both within the same cluster!
                            </div>
                        </div>
                        <Icon type="big-circled" theme="compatibility" className="info__image info__block">
                            <img src={CompatibilityImage} alt="Compatibility" />
                        </Icon>
                    </Row>
                    <Row theme="no-col" className="info">
                        <Icon type="big-circled" theme="integration" className="info__image info__block">
                            <img src={IntegrationImage} alt="Integration" />
                        </Icon>
                        <div className="info__text info__block">
                            <h5 className="info__text-title">
                                Seamless integration with Windows infrastructure and workflows
                            </h5>
                            <div className="info__text-description">
                                Whether it&apos;s for use on development machines or production servers, Memurai for Windows
                                seamlessly integrates with Windows best practices, tools and workflows. Engineering teams with
                                an existing investment in Windows infrastructure and know-how will be up to speed with Memurai
                                in no time.
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
