import React from "react";

import { Container, Row } from "components/grid/index";
import { Icon } from "components/ui";

import PerformanceImage from "static/images/performance.png";
import SupportImage from "static/images/support.png";

const PromoSection = () => (
    <section className="section section__info bg-white-grey separator-bt">
        <Container>
            <Row theme="no-col" className="info info--reversed">
                <div className="info__text info__block">
                    <h5 className="info__text-title">
                        Uncompromised performance
                    </h5>
                    <div className="info__text-description">
                        Memurai for Windows is built on top of Windows' native APIs, thus providing compatibility with
                        Redis without the need for emulation or virtualization. It is optimized to use hardware
                        resources in the most efficient way possible, and can handle huge datasets and mission-critical
                        production workloads.
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
                        Enterprise-grade support
                    </h5>
                    <div className="info__text-description">
                        Whether it&apos;s for use on development machines or production servers, Memurai for Windows
                        seamlessly integrates with Windows best practices, tools and workflows. Engineering teams with
                        an existing investment in Windows infrastructure and know-how will be up to speed with Memurai
                        in no time.
                    </div>
                </div>
            </Row>
        </Container>
    </section>
);

export default PromoSection;
