import { Container, Row, Col } from "components/grid";
import { Pagination, BlogItem, Category } from 'components/Blog';
import SubscribeForm from 'components/Form/Subscribe';

const BlogPage = ({data, currentPage}) => {
    
    return (
        <section className="blog section section__promo section__promo--home pb-0">
            <Container>
                <Row className="justify-center-xs">
                    <Col attributes="xs-10">
                        <div className="block text-center block__elem--xl">
                            <h3 className="block__title block__elem--xs">Blog</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="section section__faq bg-white-grey separator-bt">
                <Container>
                    <div className="blog-section">
                        <div className="blog-content">
                            <BlogItem data={data}/>
                        </div>
                        <div className="blog-category">
                            <SubscribeForm right/>
                            <div>
                                <p className="blog__subtitle blog__subtitle--bottom">categories</p>
                                <Category blogs={data.allArticles}/>
                            </div>
                        </div>
                    </div>
                    <Pagination postsCount={data._allArticlesMeta.count} currentPage={currentPage}/>
                </Container>
            </div>
        </section>
    )
}

export default BlogPage;

