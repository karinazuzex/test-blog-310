import { Container, Row, Col } from "components/grid";
import { Pagination, BlogItems, Category } from 'components/Blog';
import SubscribeForm from 'components/Form/Subscribe';

const BlogPage = ({data, currentPage, router}) => {

    return (
        <section className="blog section section__promo section__promo--home pb-0">
            <Container>
                <Row className="justify-center-xs">
                    <Col attributes="xs-12">
                        <div className="block text-center block__elem--xl">
                            <h3 className="block__title block__elem--xs">Blog</h3>
                            <p className="blog-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
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
                        </div>
                        <Pagination 
                            router={router} 
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

