import React from 'react'
import NextLink from "next/link";
import { Container, Row } from 'components/grid'
import { Button } from 'components/ui'
import cachingdata from 'static/images/cachingdata.png'
import writethroug from 'static/images/writethroug.png'
import writebehind from 'static/images/writebehind.png'
import { routes } from 'config'

const SectionCachingData = () => {
    return (
        <section className="section section__comparison section__solutions  section__promo--caching-data bg-white-grey">
            <Container>
                <div className="text-center h-11">
                    <h2 className="block__title block__elem--lg">Caching Data Access Strategies</h2>
                </div>
                <Row theme="no-col" className="info">
                    <div className="image-block image-mr">
                        <img className="image " src={cachingdata} alt="" />
                    </div>
                    <div className="info__text info__block">
                        <h3 className="block__title block__elem--xs">Cache-aside (Lazy-loading)</h3>
                        <div className="info__text-description">
                            A cache-aside is the most common way to use Memurai as in-memory cache. The data are only loaded when necessary. In this strategy, when an application needs to read data from the database, it first checks the cache to determine if the data are available. If it returns a cache hit (data is available), the response is issued to the caller. If it returns a cache miss (data not available), the database is queried for the data. Lazy-loading cache is straightforward, keeps the cache size cost-effective, and can produce immediate performance benefits.
                        </div>
                    </div>
                </Row>
                <Row theme="no-col" className="info info--reversed">
                    <div className="info__text info__block">
                        <h3 className="block__title block__elem--xs">Write-Through</h3>
                        <div className="info__text-description">
                        The write-through cache strategy favors data consistency between the cache and the datastore because the cache is proactively updating immediately when the database is updated or data are added. Consequently, the data in the cache are constantly changing. The disadvantage of this strategy is that infrequently requested data are also written to the cache, resulting in a larger and more expensive cache. As a result, this strategy is usually implemented along with the lazy-load cache.
                        </div>
                    </div>
                    <div className="image-block image-ml">
                        <img className="image" src={writethroug} alt="" />
                    </div>
                </Row>
                <Row theme="no-col" className="info">
                    <div className="image-block image-mr">
                        <img className="image" src={writebehind} alt="" />
                    </div>
                    <div className="info__text info__block block__elem--lg">
                        <h3 className="block__title block__elem--xs">Write Behind Caching</h3>
                        <div className="info__text-description">
                            The write-behind strategy is suitable for high read- and write-throughput systems because the developer writes only to one place, thus improving write performance. The data in this strategy are first written to the cache and asynchronously synced to the datastore. For this strategy, some rollback processes are suggested to be in-place to maintain consistency over a time window.
                        </div>
                    </div>
                </Row>
                <div className="row justify-center-xs row--no-col h-11">
                    <NextLink href={routes.CONTACT_PAGE.path} passHref>
                        <Button as="a" type="solid" theme="red-white">
                            TALK TO AN EXPERT
                        </Button>
                    </NextLink>
                </div>
            </Container>
        </section>
    )
}

export default SectionCachingData
