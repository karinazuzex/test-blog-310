const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(withSass({
    webpack (config) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    },

    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
    },

    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/frequently-asked-questions": { page: "/frequently-asked-questions" },
        "/get-memurai": { page: "/get-memurai" },
        "/download": { page: "/download" },
        "/contact": { page: "/contact" },
        "/newsletter": { page: "/newsletter" },
        "/terms": { page: "/terms" },
        "/privacy": { page: "/privacy" },
        "/cookie": { page: "/cookie" }
      }
    }
}));
