import { Container, Row, Col } from "components/grid";
import { Pagination, BlogItem, EmailForm } from 'components/Blog';

const BlogPage = ({data, currentPage}) => {

    const blogs = data.allArticles;

    const category = Object.keys(blogs).reduce((result, key) => {
        const curr = blogs[key]
        if (!result.includes(curr.category)) result.push(curr.category)
    
        return result
    }, [])
    
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

                            <EmailForm/>
                            <div>
                                <p className="blog__subtitle blog__subtitle--bottom">categories</p>
                                <div className="blog-categories blog__text">
                                    {category.map((cat, index) => 
                                        <p className="link link--black" key={index}>{cat}</p>
                                    )}
                                </div>

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

