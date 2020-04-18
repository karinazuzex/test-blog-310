import { Container, Row, Col } from "components/grid";
import Pagination from 'components/Blog/Pagination';
import BlogItems from 'components/Blog/BlogItems';
import Category from 'components/Blog/Category';
import SubscribeForm from 'components/Form/Subscribe';
import NextLink from "next/link";
import { Link } from "components/ui";
import { consts, routes, analytics } from "config";
import { RSSLogo } from "svg";
const BlogPage = ({data, currentPage, router}) => {

    return (
        <section className="blog section section__promo section__promo--home pb-0">
            <Container>
                <Row className="justify-center-xs">
                    <Col attributes="xs-12">
                        <div className="block text-center block__elem--xl">
                            <h3 className="block__title block__elem--xs">Blog</h3>
                            <p className="blog-info">Technical articles and news about Memurai.<br />
                                <NextLink href={routes.NEWSLETTER_PAGE.path} passHref prefetch>
                                    <Link theme="red">
                                        Subscribe to our newsletter
                                    </Link>
                                </NextLink> to make sure you don't miss anything.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="blog-main section__faq bg-white-grey separator-bt">
                <Container>
                    <div className="blog-section">
                        <div className="blog-content">
                            <BlogItems
                                data={data}
                                router={router}
                            />
                        </div>
                        <div className="blog-category">
                            <div className="blog-subscribe__line"></div>
                            <div className="blog-subscribe">
                                <p className="blog__subtitle blog__subtitle--height">newsletter</p>
                                <p className="blog-subscribe__title">Receive updates about key news and special offers.</p>
                                <SubscribeForm/>
                            </div>

                            <div className="blog-category-block">
                                <p className="blog__subtitle blog__subtitle--bottom">categories</p>
                                <Category 
                                    blogs={data.categories}
                                />
                            </div>
                            <Link
                                href={consts.WEBSITE_DOMAIN + '/rss'}
                                target="_blank"
                                rel="alternate"
                                type="application/rss+xml"
                            >
                                <RSSLogo />
                            </Link>
                        </div>
                        <Pagination 
                            router={router}
                            categories={data.categories}
                            postsCount={data._allArticlesMeta.count} 
                            currentPage={currentPage}
                        />
                    </div>

                </Container>
                
            </div>

        </section>
    )
}

export default BlogPage;

