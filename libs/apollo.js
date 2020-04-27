import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch'
import { consts } from "config";

const _token = "1284c271b7e7859fecb9b7f2c6d8fe";

const client = new ApolloClient({
  link: createHttpLink({
    uri: consts.SHOW_DRAFTS ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${_token}`
    },
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

export default client;

