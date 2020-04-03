const sitemap = require('nextjs-sitemap-generator');  
const pathMap = {
    "/": { priority: '1.0' },
    "/about": { priority: '0.8' },
    "/faq": { priority: '0.8' },
    "/get-memurai": { priority: '0.8' },
    "/download": { priority: '0.8' },
    "/contact": { priority: '0.8' },
    "/newsletter": { priority: '0.8' },
    "/terms": { priority: '0.8' },
    "/privacy": { priority: '0.8' },
    "/cookie": { priority: '0.8' },
    "/blog": { priority: '0.8'},
};
sitemap({  
  baseUrl: "https://www.memurai.com",  
  ignoredPaths: ['admin'],  
  pagesDirectory: __dirname + "\/pages",  
  targetDirectory : 'static/',
  nextConfigPath: __dirname + "\/next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],
  pagesConfig: pathMap
});