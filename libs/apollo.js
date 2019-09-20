import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const _token = "1284c271b7e7859fecb9b7f2c6d8fe";

const config = {
  link: new HttpLink({
    uri: "https://graphql.datocms.com/",
    opts: {
      credentials: "same-origin"
    },
    headers: {
      authorization: `Bearer ${_token}`
    }
  })
};

export default withData(config);


