import { gql } from "apollo-boost";
import React from "react";
import client from "libs/apollo";
import { consts } from "config";

const GET_POSTS = gql`
  query allArticles($category: String!, $author: String!) {
    categories: allArticles {
      category
    }

    allArticles(
      filter: {
        category: { matches: { pattern: $category } }
        author: { matches: { pattern: $author } }
      }
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

const blogPostsRssXml = blogPosts => {
  let latestPostDate = "";
  let rssItemsXml = "";
  blogPosts.forEach(post => {
    console.log(post);
    const postDate = Date.parse(
      post.publishDateOverride || post._firstPublishedAt
    );

    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.publishDateOverride || post._firstPublishedAt;
    }

    rssItemsXml += `
        <item>
          <title>${post.title}</title>
          <link>
          ${`${consts.WEBSITE_DOMAIN}/blog/${post.slug}`}
          </link>

          <pubDate>${post.publishDateOverride ||
            post._firstPublishedAt}</pubDate>
          <description>
          ${post.description ? post.description.description : ""}
          </description>
          <author>${post.author}</author>
          <category>${post.category}</category>
      </item>`;
  });

  return {
    rssItemsXml,
    latestPostDate
  };
};

const getRssXml = blogPosts => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);
  return `<?xml version="1.0" ?>
    <rss version="2.0">
      <channel>
          <title>Memurai Blog</title>
          <link>https://www.memurai.com/</link>
          <language>en</language>
          <lastBuildDate>${latestPostDate}</lastBuildDate>
          ${rssItemsXml}
      </channel>
    </rss>`;
};

class Rss extends React.Component {
  static async getInitialProps({ res }) {
    let queryAuthor = "";
    let queryCategory = "";

    if (!res) {
      return;
    }

    res.setHeader("Content-Type", "text/xml");
    const response = await client.query({
      query: GET_POSTS,
      variables: {
        category: queryCategory,
        author: queryAuthor
      }
    });
    res.write(getRssXml(response.data.allArticles));
    res.end();
  }
}

export default Rss;
