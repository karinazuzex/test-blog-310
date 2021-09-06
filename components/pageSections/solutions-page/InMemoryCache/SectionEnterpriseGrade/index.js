import React from 'react'
import { Container } from 'components/grid'
import speed from 'static/images/speed.png'
import database from 'static/images/database.png'
import resilience from 'static/images/resilience.png'
import flexibity from 'static/images/flexibity.png'

const SectionEnterprise = () => {
    return (
        <section className="section section__comparison section__enterprise  section__promo--enterprise-grade">
            <Container>
                <div className="text-center h-17">
                    <h2 className="block__title block__elem--lg">
                        Enterprise grade caching performance delivered to the <br />
                        world’s most demanding distributed applications
                    </h2>
                </div>
                <div className="section__enterprise__info">
                    <h3 className="block__title block__elem--xs">Speed and Scalability</h3>
                    <div className="section__enterprise__block block__elem--lg">
                        <img className="grade-img" src={speed} alt="" />
                        <p className="info__text-description">
                        Memurai is a Redis compatible, Windows native, key-value database that delivers 
                        single-digit millisecond performance at scale. Because memory is faster than disk,
                         in-memory cache has submillisecond speed. The faster data access improves the 
                         overall application performance. Memurai is also designed to scale quickly and
                          smoothly. This helps address one of the most common challenges in modern
                           applications, dealing with usage spikes. By utilizing a fast and scalable
                            in-memory cache, this issue can be mitigated.{' '}
                        </p>
                    </div>
                </div>

                <div className="section__enterprise__info">
                    <h3 className="block__title block__elem--xs">Flexibility</h3>
                    <div className="section__enterprise__block block__elem--lg">
                        <img className="grade-img" src={flexibity} alt="" />
                        <p className="info__text-description">
                            Memurai is fully compatible with Redis, and this translates into a datastore
                             that supports 50+ programming languages, 150+ client libraries, and a wide 
                             amount of information, and available resources that make it easy for developers 
                             to implement and maintain.
                        </p>
                    </div>
                </div>
                <div className="section__enterprise__info">
                    <h3 className="block__title block__elem--xs">
                        High availability, resilience, and durability
                    </h3>
                    <div className="section__enterprise__block block__elem--lg">
                        <img className="grade-img" src={resilience} alt="" />
                        <p className="info__text-description">
                            High availability is one of the utmost requirements in today’s systems, and even
                            a second of downtime can be catastrophic. A cache layer must be available
                            at all times because application performance depends on it. Memurai Enterprise instant
                            failure detection, automatic backups, data persistence, and fast recovery are key
                            factors for a successful user experience.
                        </p>
                    </div>
                </div>
                <div className="section__enterprise__info">
                    <h3 className="block__title block__elem--xs">Persistence</h3>
                    <div className="section__enterprise__block block__elem--lg">
                        <img className="grade-img" src={database} alt="" />
                        <p className="info__text-description">
                            Memurai can also be used as a data store with disk persistence. Memurai can persist
                            data to disk synchronously or asynchronously. Memurai also supports other well-known
                            Redis features like replication, transactions, LUA scripting, high availability, pub/sub,
                            cluster, modules, streams, LRU eviction, and all the Redis API 5 eviction policies.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionEnterprise
