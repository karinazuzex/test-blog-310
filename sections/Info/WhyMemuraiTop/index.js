import React from "react";

import { Container, Row } from "components/grid/index";

const PromoSection = () => (
    <section className="section section__info bg-white-grey">
        <Container>
            <Row theme="no-col" className="info">
                <div className="info__text info__block">
                    <h4 className="info__text-title">
                        Fully compatible with Redis
                    </h4>
                    <div className="info__text-description">
                        The core of Memurai is based on the Redis source code, ported to run natively on Windows.
                        That&apos;s how Memurai for Windows reliably supports all the features that make Redis the most
                        popular NoSQL data store, including: LRU eviction, persistence, replication, transactions, LUA
                        scripting, high-availabilty, cluster, pub/sub and streams. Furthermore, this ensures
                        compatibility with the myriad of libraries and tools already available for Redis. You can even
                        replicate data between Memurai and Redis, or use a mix of both within the same cluster!
                    </div>
                </div>
                <div className="info__image info__block"></div>
            </Row>
            <Row theme="no-col" className="info">
                <div className="info__image info__block"></div>
                <div className="info__text info__block">
                    <h4 className="info__text-title">
                        Fully compatible with Redis
                    </h4>
                    <div className="info__text-description">
                        The core of Memurai is based on the Redis source code, ported to run natively on Windows.
                        That&apos;s how Memurai for Windows reliably supports all the features that make Redis the most
                        popular NoSQL data store, including: LRU eviction, persistence, replication, transactions, LUA
                        scripting, high-availabilty, cluster, pub/sub and streams. Furthermore, this ensures
                        compatibility with the myriad of libraries and tools already available for Redis. You can even
                        replicate data between Memurai and Redis, or use a mix of both within the same cluster!
                    </div>
                </div>
            </Row>
        </Container>
    </section>
);

export default PromoSection;
