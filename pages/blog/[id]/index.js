import { useRouter } from 'next/router'
import Layout from "components/Layout"
import withData from "libs/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { BlogItemPage, Loader, ErrorMessage } from 'components/Blog';

const GET_POSTS = gql`
    query allArticles($id: ItemId) {
      allArticles(filter: {id: {eq: $id}}) {
        id
        title
        description {
          description
          title
          image {
            url
          }
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
    }
`;

const ItemPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { id: id },
    notifyOnNetworkStatusChange: true
  });

  if (data && data.allArticles) {
    return (
      <Layout theme="white">
        <BlogItemPage data={data}/>
      </Layout>
    )
  }
  if (error) {
    <ErrorMessage/>
  }
  return (
    <Layout theme="white">
    </Layout>
  )

}

export default withData(ItemPage)