import { useRouter } from 'next/router'
import Layout from "components/Layout"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import BlogItemPage from 'components/Blog/BlogItemPage';
import ErrorMessage from 'components/Blog/ErrorMessage';

const GET_POSTS = gql`
  query allArticles($slug: String) {
    allArticles(filter: {slug: {eq: $slug}}) {
      id
      title
      description {
        description
        title
        image {
          url
        }
      }
      slug
      category
      body
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
  }
`;

const ItemPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { slug: slug },
    notifyOnNetworkStatusChange: true
  });

  if (data && data.allArticles) {
    return (
      <Layout theme="white">
        <BlogItemPage data={data}/>
      </Layout>
    )
  }
  if (loading) {
    <Layout theme="white">
    </Layout>
  }
  if (error) {
    <ErrorMessage/>
  }
  return (
    <Layout theme="white">
    </Layout>
  )

}

export default ItemPage;