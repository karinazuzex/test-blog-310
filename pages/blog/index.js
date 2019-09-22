

import Layout from "components/Layout"
import { BlogPage } from "components/Blog";
import withData from "libs/apollo";
import { withRouter } from 'next/router';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

        <BlogPage 
            data={data} 
            currentPage={currentPage}
        />
    }
    return (
        <BlogPage 
            data={data} 
            currentPage={currentPage}
        />
    )
}

const TermsPage = () => (
    <Layout theme="white">
        <Blog/>
    </Layout>
);

export default withData(withRouter(TermsPage));