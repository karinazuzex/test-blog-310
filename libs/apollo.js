import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const _token = "1284c271b7e7859fecb9b7f2c6d8fe";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${_token}`
    }
  }),
  cache: new InMemoryCache()
});

export default client;

