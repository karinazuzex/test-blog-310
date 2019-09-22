import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import withData from "libs/apollo";
import { Container, Row, Col } from "components/grid";
import Arrow from 'svg/Arrow';
import { withRouter } from 'next/router';
import { Link } from "components/ui";
import Pagination from '../pagination';
import { Category, BlogItem } from 'components/category'

const GET_POSTS = gql`
    query allArticles($first: IntType, $skip: IntType) {
        allArticles(first: $first, skip: $skip) {
            id
            title
            description {
              description
              title
            }
            category
            body
            headerImage {
              url
            }
            footerImage {
              url
            }
            _firstPublishedAt
            autor
        }
        _allArticlesMeta {
            count
        }
    }
`;

const POSTS_PER_PAGE = 5;


const Blog = (props) => {
    let currentPage = 1;
    if (props.router && props.router.query.page) {
        const queryPage = Number (props.router.query.page);
        if (typeof queryPage === 'number' && queryPage >= 1) {
            currentPage = queryPage;
        }
    }
    const needToSkip = (currentPage - 1) * 5;

    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
        variables: { first: POSTS_PER_PAGE, skip: needToSkip },
        skip: false, 
        notifyOnNetworkStatusChange: true
    });
    
    if (loading) {
        return <div>loading...</div>
    }

    if (data) {

        const blogs = data.allArticles;

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
                                <BlogItem/>
                            </div>
                            <div className="blog-category">
                                <form className="blog-form">
                                    <p className="blog__subtitle blog__subtitle--bottom">newsletter</p>
                                    <p className="blog-form__text blog-form__text--bottom">Receive updates about key news and special offers.</p>
                                    <label className="blog-form__label blog-form__label--bottom blog__text--semibold" htmlFor="">EMAIL ADDRESS</label>
                                    <input type="text"/>
                                    <button className="button blog-category__button text-sm button__solid--red-white button--red-white">subscribe</button>
                                </form>

                                <div>
                                    <p className="blog__subtitle blog__subtitle--bottom">categories</p>
                                    <div className="blog-categories blog__text">
                                        <Category />
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

    return (
        <div>asdasd</div>
    )
    
}


export default withData(withRouter(Blog));
