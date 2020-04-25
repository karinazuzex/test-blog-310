const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const {getPosts} = require ('./get-posts');

module.exports = withCSS(withSass({
    webpack (config) {
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();
            if (entries['main.js']) {
                entries['main.js'].unshift('./polyfills.js');
            }
            return entries;
        };
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000
                }
            },
            
        });

        return config;
    },
      

    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
        GTM_TRACKING_ID: process.env.GTM_TRACKING_ID,
        WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
        MEMURAI_VERSION: process.env.MEMURAI_VERSION,
        DOWNLOAD_BUTTON_TEXT: process.env.DOWNLOAD_BUTTON_TEXT,
        REDIS_COMPAT_FULLVER: process.env.REDIS_COMPAT_FULLVER,
        SHOW_DRAFTS : process.env.SHOW_DRAFTS

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
            "/blog": { page: "/blog"},
        };

        let articles = await getPosts();

        articles = await getPosts();
            articles.map(post => {
                pathMap[`/blog/${post.link}`] = { page: `/blog/[slug]`, query: { slug: post.link } };
        });
        
        return pathMap;
    }
}));
