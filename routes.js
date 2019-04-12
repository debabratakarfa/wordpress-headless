const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'about', '/about/')
  .add( 'posts' )
  .add( 'single', '/posts/:slug' );
