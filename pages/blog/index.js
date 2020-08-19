import Layout from "components/Layout";
import BlogPage from "components/Blog/BlogPage";
import { withRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ErrorMessage from "components/Blog/ErrorMessage";
import SocialSection from "pages/contact/sections/Social";

const GET_POSTS = gql`
  query allArticles(
    $category: String!
    $author: String!
    $first: IntType
    $skip: IntType
  ) {
    categories: allArticles {
      category
    }

    allArticles(
      filter: {
        category: { matches: { pattern: $category } }
        author: { matches: { pattern: $author } }
      }
      first: $first
      skip: $skip
      orderBy: [publishDateOverride_DESC, _firstPublishedAt_DESC]
    ) {
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
      publishDateOverride
      author
    }
    _allArticlesMeta(
      filter: {
        category: { matches: { pattern: $category } }
        author: { matches: { pattern: $author } }
      }
    ) {
      count
    }
  }
`;

const POSTS_PER_PAGE = 5;

const Blog = (props) => {
  let currentPage = 1;
  const {
    router,
    router: {
      query: { page, category, author },
    },
  } = props;
  let queryAuthor = "";
  let queryCategory = "";

  if (router) {
    if (author) {
      queryAuthor = author;
    }
    if (category) {
      queryCategory = category;
    }
    if (page) {
      const queryPage = Number(page);

      if (typeof queryPage === "number" && queryPage >= 1) {
        currentPage = queryPage;
      }
    }
  }

  const needToSkip = (currentPage - 1) * 5;

  // Requesting the posts data.
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: POSTS_PER_PAGE,
      skip: needToSkip,
      category: queryCategory,
      author: queryAuthor,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <ErrorMessage />;
  }

  if (data) {
    if (
      (!data.categories.some((cat) => cat.category === category) && category) ||
      (!data.allArticles.some((item) => item.author === author) && author)
    ) {
      return <ErrorMessage category={category} author={author} />;
    }

    return (
      <Layout theme="white">
        <BlogPage router={props.router} data={data} currentPage={currentPage} />
        <SocialSection />
      </Layout>
    );
  }

  return <Layout theme="white"></Layout>;
};

export default withRouter(Blog);

// return (
//     <Query
//         query={GET_POSTS}
//         variables={{
//             first: POSTS_PER_PAGE,
//             skip: needToSkip,
//             category: queryCategory,
//             author: queryAuthor
//         }}
//         notifyOnNetworkStatusChange
//     >
//         {({ loading, error, data, fetchMore }) => {
//             if (loading) {

//                 <Layout theme="white">
//                 </Layout>
//             }

//             if (error) {

//                 return (
//                     <ErrorMessage/>
//                 )
//             }

//             if (!data.categories.some(cat => cat.category === category) && category ||
//                 !data.allArticles.some(item => item.author === author) && author) {

//                 return (
//                     <ErrorMessage
//                         category={category}
//                         author={author}
//                     />
//                 )
//             }

//             return (
//                 <Layout theme="white">
//                     <BlogPage
//                         router={props.router}
//                         data={data}
//                         currentPage={currentPage}
//                     />
//                 </Layout>
//             )

//         }}
//     </Query>
// )
