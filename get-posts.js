require('babel-polyfill');

exports.getPosts = async () => { 
  const SiteClient = require('datocms-client').SiteClient;

  const client = new SiteClient('1284c271b7e7859fecb9b7f2c6d8fe');

  return client.items.all({}, { allPages: true })
    .then((records) => records.map((item) => ({
      link: item.slug
    })
  ));
}


