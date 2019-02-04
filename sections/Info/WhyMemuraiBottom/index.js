import React from "react";

import { Container, Row } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__info bg-white-grey separator-bt">
        <Container>
            <Row theme="no-col" className="info">
                <div className="info__text info__block">
                    <h4 className="info__text-title">
                        Uncompromised performance
                    </h4>
                    <div className="info__text-description">
                        Memurai for Windows provides the functionality of Redis on Windows without the need for
                        emulation or virtualization. Because it’s designed and optimized to use the native Windows APIs,
                        it uses RAM, CPU, disk and network resources in the most efficient way possible. It can handle
                        huge datasets and mission-critical production workloads.
                    </div>
                </div>
                <div className="info__image info__block"></div>
            </Row>
            <Row theme="no-col" className="info">
                <div className="info__image info__block"></div>
                <div className="info__text info__block">
                    <h4 className="info__text-title">
                        Enterprise-grade support
                    </h4>
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
