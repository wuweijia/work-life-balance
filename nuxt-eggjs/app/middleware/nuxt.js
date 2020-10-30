'use strict';
const { Nuxt, Builder } = require('nuxt');
const config = require('../../nuxt.config');
module.exports = (options, app) => {
  const nuxtRender = new Nuxt(config);
  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    new Builder(nuxtRender).build();
  }
  return async function(ctx, next) {
    let flag = false;
    let routerArr = [];
    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }

    if (routerArr.some(el => el === ctx.path)) {
      console.log('接口请求', ctx.path);
      return await next();
    }
    ctx.status = 200;
    const { res, req } = ctx;
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxtRender.render(req, res, promise => {
        promise.then(resolve).catch(reject);
      });
    });
  };
};

