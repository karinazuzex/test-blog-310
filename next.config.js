const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

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
    },
    

    exportPathMap: function () {
      return {
        "/blog/bloger": { page: "/blog/[slug]", query: { slug: "bloger" } },
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
        "/blog": { page: "/blog"}
      }
    }
}));
