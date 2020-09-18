const withImages = require('next-images');

const { getPosts } = require("./get-posts");

module.exports = withImages({
  inlineImageLimit: 5000,

  webpack(config, { defaultLoaders }) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"]) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };

    return config;
  },

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    GTM_TRACKING_ID: process.env.GTM_TRACKING_ID,
    WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
    MEMURAI_VERSION: process.env.MEMURAI_VERSION,
    MEMURAI_VERSION_SHORT: process.env.MEMURAI_VERSION_SHORT,
    DOWNLOAD_BUTTON_TEXT: process.env.DOWNLOAD_BUTTON_TEXT,
    REDIS_COMPAT_FULLVER: process.env.REDIS_COMPAT_FULLVER,
    SHOW_DRAFTS : process.env.SHOW_DRAFTS,
    DISABLE_COVID19 : process.env.DISABLE_COVID19
  },

  async exportPathMap() {
    const pathMap = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/faq": { page: "/faq" },
      "/get-memurai": { page: "/get-memurai" },
      "/download": { page: "/download" },
      "/contact": { page: "/contact" },
      "/newsletter": { page: "/newsletter" },
      "/terms": { page: "/terms" },
      "/privacy": { page: "/privacy" },
      "/cookie": { page: "/cookie" },
      "/blog": { page: "/blog" },
    };

    (await getPosts()).map(post => {
      const blogPostModelID = 107238; // Model ID for article model in DatoCMS

      if (Number(post.modelID) === blogPostModelID) {
        pathMap[`/blog/${post.link}`] = {
          page: `/blog/[slug]`,
          query: { slug: post.link },
        };
      } else {
        // Here pathMap for landing pages
        pathMap[`/${post.link}`] = {
          page: '/[landing_page_slug]',
          query: { landing_page_slug: post.link },
        };
      }
    });

    return pathMap;
  },
});
