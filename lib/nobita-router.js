const Router = new require('koa-router')();

module.exports = (app) => {
  let router = {};
  router.__proto__ = Router;
  app.schema = {};
  const methods = Router.methods.concat('all');
  for (let method of methods) {
    method = method.toLocaleLowerCase();
    router[method] = (uri, ...controllers) => {
      if (Object.prototype.toString.call(controllers[0]) != '[object Function]') {
        Object.prototype.toString.call(controllers[0]) == '[object Object]' && (app.schema[`${method}_${uri}`] = controllers[0]);
        controllers.shift();
      }
      Router[method](uri, ...(controllers.map((controller) => {
        return controller;
      })));
    }
  }
  return router;
};