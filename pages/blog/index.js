

import Layout from "components/Layout"
import BlogPage from "components/Blog/BlogPage";
import { withRouter } from 'next/router';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ErrorMessage from 'components/Blog/ErrorMessage';

const GET_POSTS = gql`

    query allArticles($category: String!, $autor: String!, $first: IntType, $skip: IntType) {

        categories: allArticles {
            category
        }

        allArticles(filter: { category: { matches: { pattern: $category } }, autor: {matches: { pattern: $autor } } }, first: $first, skip: $skip) {
            id
            title
            description {
              description
              title
            }
            category
            body
            slug
            headerImage {
              url
            }
            footerImage {
              url
            }
            _firstPublishedAt
            autor
        }
        _allArticlesMeta(filter: { category: { matches: { pattern: $category } }, autor: {matches: { pattern: $autor } } }) {
            count
        }
    }
`;

const POSTS_PER_PAGE = 5;

const Blog = (props) => {

    let currentPage = 1;

    const { router, router: { query: { page, category, autor} } } = props;

    let queryAutor = '';
    let queryCategory = '';
    
    if (router) {
        if (autor) {
            queryAutor = autor;
        }
        if (category) {
            queryCategory = category;
        }
        if (page) {
            const queryPage = Number (page);
            
            if (typeof queryPage === 'number' && queryPage >= 1) {
                currentPage = queryPage;
            }
        }
    }

    const needToSkip = (currentPage - 1) * 5;

    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
        variables: { 
            first: POSTS_PER_PAGE, 
            skip: needToSkip,
            category: queryCategory,
            autor: queryAutor
        },
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        <Layout theme="white">
        </Layout>
    }

    if (error) {
        <ErrorMessage/>
    }
    
    if (data) {        
        return (
            <Layout theme="white">
                <BlogPage
                    router={props.router}
                    data={data} 
                    currentPage={currentPage}
                />
            </Layout>
        )
    }

    return (
        <Layout theme="white">
        </Layout>
    )
}

export default withRouter(Blog);