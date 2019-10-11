const Router = new require('koa-router')();

let router = {};
router.__proto__ = Router;

for(let method of Router.methods){
  method = method.toLocaleLowerCase()
  router[method] = (uri, ...controllers) => {
    Router[method](uri, ...controllers.map((controller) => {
      if (!controller) {
        throw new Error(`router.${method} ${uri} is undefined`);
      }
      return async (ctx, next) => {
        await controller.call(ctx, ctx, next);
      };
    }));
  }
}

module.exports = router;