import React from 'react'
import NextLink from 'next/link'
import { routes } from 'config'
import { Container } from 'components/grid'
import { Button } from 'components/ui'
import MemuraiInmemoryCache from '/static/images/memurai-inmemory-cache.png'

const PromoSection = () => {
    return (
        <section className="section section__promo section__promo--solutions">
            <Container>
                <div className="block text-center block__elem--lg h-35">
                    <h1 className="block__title text-bold block__elem--xs ">
                        Redis-compatible in-memory cache for Windows
                    </h1>
                    <p className="block__description block__elem--lg text-weight-500">
                        Improve response time and reduce expensive database trips <br /> with an extremely fast
                        and scalable distributed cache
                    </p>
                    <div className="row justify-center-xs row--no-col">
                        <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
                            <Button as="a" type="solid" theme="red-white">
                                Download for free
                            </Button>
                        </NextLink>
                    </div>
                </div>
                <div className="block text-center">
                    <h2 className="block__title block__elem--lg">What is In-memory cache?</h2>
                    <p className="text-left block__elem--lg">
                        In business operations, speed is not an option, but a must. With Memurai distributed
                        in-memory cache your applications will perfom dramatically faster creating not only a
                        more efficient workflow but also reducing your cost with unnescesary database trips.
                        <br />
                        Beside an extremely low latency, Memurai highly available and resilient cache will
                        facilitate the scale of your applictions. In-memory caching solutions improve
                        response time by storing a copy of your most used data on very fast ephemeral storage
                        instead of slow spinning disks.
                        <br />
                        <span className="text-bold">
                            Memurai is a fully compatible Redis alternative for Windows that leverage the best
                            of both worlds.
                        </span>
                    </p>
                    <img className="img-w-9" src={MemuraiInmemoryCache} />
                </div>
            </Container>
        </section>
    )
}

export default PromoSection
