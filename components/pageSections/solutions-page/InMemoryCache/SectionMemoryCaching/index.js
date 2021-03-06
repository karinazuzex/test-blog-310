import React from 'react'
import { Container, Row } from 'components/grid'
import InMememoryUseCase from 'static/images/In-memory-caching-use-case-1.png'
import InMememoryCaseGraphic from 'static/images/In-memory-caching-use-case-2.png'
import MemoryCachingCase3 from 'static/images/memoryCachingCase3.png'

const SectionMemoryCaching = () => {
    return (
        <section className="section section__comparison section__solutions section__promo--memory-caching bg-white-grey ">
            <Container>
                <div className="text-center h-11">
                    <h2 className="block__title block__elem--lg">In-memory caching use cases</h2>
                </div>
                <Row theme="no-col" className="info">
                    <div className="image-block image-mr">
                        <img className="image " src={InMememoryUseCase} alt="" />
                    </div>
                    <div className="info__text info__block">
                        <h3 className="block__title block__elem--xs">
                            In-memory cache for trading companies
                        </h3>
                        <div className="info__text-description">
                            Changes in trading prices can be critical. Trading companies need to detect any sudden changes and react instantly.
                            This fast reaction is not possible using traditional disk-based systems. To meet the challenging requirements for analyzing large amounts of data and servicing requests within milliseconds, an in-memory cache is required. Memurai can manage data at a high rate (ultrafast write and read speeds).
                            Memurai is a high-performance cache that delivers submillisecond response time, high availability, and seamless integration with Windows.
                            Memurai is a fully supported enterprise platform that meets the most demanding production workloads.
                        </div>
                    </div>
                </Row>
                <Row theme="no-col" className="info info--reversed">
                    <div className="info__text info__block">
                        <h3 className="block__title block__elem--xs">
                            Caching for specific high-demand application usage
                        </h3>
                        <div className="info__text-description">
                            The scalability of in-memory caching makes it the perfect solution for
                            spikes of application usage. A common use case for this scenario is seasonal
                            periods like Black Friday, sports events, or any other high-traffic
                            demanding period when your business needs to be up to the challenge.
                            A high-throughput in-memory cache solves this problem, allowing you to
                            address this only when necessary without having to increase your cost 
                            year-round.
                        </div>
                    </div>
                    <div className="image-block image-ml">
                        <img className="image " src={InMememoryCaseGraphic} alt="" />
                    </div>
                </Row>
                <Row theme="no-col" className="info">
                    <div className="image-block image-mr">
                        <img className="image" src={MemoryCachingCase3} alt="" />
                    </div>
                    <div className="info__text info__block">
                        <h3 className="block__title block__elem--xs">
                            In-memory cache for user session data
                        </h3>
                        <div className="info__text-description">
                            Regarding user sessions, database scalability and reliability are critical
                            to delivering a great user experience. Caching the user data information speeds
                             up response time for the application user. Because of the complexity and because
                              the volume of data can be massive, a key-value database that delivers single-digit
                               millisecond performance at scale is needed. This translates into a faster and
                                better experience and reduces business expenses.
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default SectionMemoryCaching
