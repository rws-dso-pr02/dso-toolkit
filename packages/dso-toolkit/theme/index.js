'use strict';

const Path = require('path');
const _ = require('lodash');
const Theme = require('@frctl/fractal').WebTheme;

module.exports = function (options) {

  const config = _.defaultsDeep(_.clone(options || {}), {
    skin: 'default',
    rtl: false,
    lang: 'en',
    styles: 'default',
    scripts: 'default',
    format: 'json',
    static: {
      mount: 'theme',
    },
    favicon: null
  });

  config.panels = config.panels || ['html', 'view', 'context', 'resources', 'info', 'notes'];
  config.nav = config.nav || ['components', 'docs'];
  config.styles = [].concat(config.styles).concat(config.stylesheet).filter(url => url).map(url => (url === 'default' ? `/${config.static.mount}/css/${config.skin}.css` : url));
  config.scripts = [].concat(config.scripts).filter(url => url).map(url => (url === 'default' ? `/${config.static.mount}/theme.js` : url));
  config.favicon = config.favicon || `/${config.static.mount}/favicon.ico`;

  const theme = new Theme(Path.join(__dirname, 'views'), config);

  theme.setErrorView('pages/error.nunj');

  theme.addStatic(Path.join(__dirname, 'dist'), `/${config.static.mount}`);

  theme.addRoute('/', {
    handle: 'overview',
    view: 'pages/doc.nunj',
  });

  theme.addRoute('/docs', {
    redirect: '/'
  });

  theme.addRoute('/components', {
    redirect: '/'
  });

  theme.addRoute('/components/preview/:handle', {
    handle: 'preview',
    view: 'pages/components/preview.nunj'
  }, getHandles);

  theme.addRoute('/components/render/:handle', {
    handle: 'render',
    view: 'pages/components/render.nunj'
  }, getHandles);

  theme.addRoute('/components/detail/:handle', {
    handle: 'component',
    view: 'pages/components/detail.nunj'
  }, getHandles);

  theme.addRoute('/docs/:path([^\?]+?)', {
    handle: 'page',
    view: 'pages/doc.nunj'
  }, function (app) {
    return app.docs.filter(d => (!d.isHidden && d.path !== '')).flatten().map(page => ({ path: page.path }));
  });

  theme.on('init', function (env, app) {
    require('./filters')(theme, env, app);
  });

  let handles = null;

  function getHandles(app) {
    app.components.on('updated', () => (handles = null));
    if (handles) {
      return handles;
    }
    handles = [];
    app.components.flatten().each(comp => {
      handles.push(comp.handle);
      if (comp.variants().size > 1) {
        comp.variants().each(variant => handles.push(variant.handle));
      }
    });
    handles = handles.map(h => ({ handle: h }));
    return handles;
  }

  return theme;
};
