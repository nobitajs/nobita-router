const Router = new require('koa-router')();
const isEmpty = require('lodash/isEmpty');
const fastJson = require('fast-json-stringify');

module.exports = (app) => {
  let router = {};
  router.__proto__ = Router;
  app.responseSchema = {};
  app.schema = {};
  const methods = Router.methods.concat('all');
  for (let method of methods) {
    method = method.toLocaleLowerCase();

    router[method] = (uri, ...controllers) => {
      const schema = controllers[0];
      if (Object.prototype.toString.call(schema) != '[object Function]') {
        if (!isEmpty(schema)) {
          app.schema[`${method}_${uri}`] = schema;
          !isEmpty(schema.response) && (app.responseSchema[`${method}_${uri}`] = fastJson(schema.response));
        }
        controllers.shift();
      }
      Router[method](uri, ...(controllers.map((controller) => {
        return controller;
      })));
    }
  }
  return router;
};