import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import withData from "libs/apollo";
import { Container, Row, Col } from "components/grid";
import Arrow from 'svg/Arrow';
import { withRouter } from 'next/router';
import { Link } from "components/ui";
import Pagination from '../pagination';

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
        

        const blockItem = blogs.map((item) => {

            const { _firstPublishedAt, title, autor, id, body } = item;

            const optionsCreate = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }

            const text = body.slice(0, 160).split(' ').slice(1,-1).join(' ').trim() + '...';

            const dateCreate = new Date(_firstPublishedAt).toLocaleString("en-US", optionsCreate);

            const time = Math.ceil(body.split(/\s/).length / 200);
                        

            return (
                <div className="block__blog block__elem--40" key={id}>
                    <h4 className="blog__title blog__text--bottom">{title}</h4>
                    <p className="blog__text blog__text--bottom">
                        <Link className="blog__text--underline link link--black">{autor}</Link>
                        <span> on </span>
                        <Link className="blog__text--underline link link--black">{item.category} </Link>
                        &bull; <span> {dateCreate} </span>&bull;
                        <span> {time} min read</span>
                    </p>
                    <p className="blog__text blog__text--bottom">{text}</p>
                    <Link className="button__arrow link link--red">
                        <span className="blog__text">Continue reading</span>
                        <Arrow />
                    </Link>
                    
                </div>
            )
        });

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
                                { blockItem }
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
                                        {category.map((cat, index) => 
                                            <p className="link link--black" key={index}>{cat}</p>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Pagination postsCount={data._allArticlesMeta.count} currentPage={currentPage} routePage={props.router.query.page}/>
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
