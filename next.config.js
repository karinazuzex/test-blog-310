const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCSS(withSass({
    webpack (config, options) {
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

    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/why-memurai": { page: "/why-memurai" },
        "/get-memurai": { page: "/get-memurai" },
        "/contact": { page: "/contact" },
        "/terms": { page: "/terms" },
        "/privacy": { page: "/privacy" },
        "/cookie": { page: "/cookie" }
      }
    }
}));
