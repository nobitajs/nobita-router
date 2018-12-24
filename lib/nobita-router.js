const Router = require('koa-router');
const router = new Router();

let router = {};
router.__proto__ = router;

router.get = (uri, controllers) => {
  router.get(uri, async (ctx, next) => {
    controllers = controllers.bind(ctx);
    await controllers(ctx, next);
  })
}
router.post = (uri, controllers) => {
  router.post(uri, async (ctx, next) => {
    controllers = controllers.bind(ctx);
    await controllers(ctx, next);
  })
}
router.put = (uri, controllers) => {
  router.put(uri, async (ctx, next) => {
    controllers = controllers.bind(ctx);
    await controllers(ctx, next);
  })
}
router.del = (uri, controllers) => {
  router.del(uri, async (ctx, next) => {
    controllers = controllers.bind(ctx);
    await controllers(ctx, next);
  })
}

router.all = (uri, controllers) => {
  router.all(uri, async (ctx, next) => {
    controllers = controllers.bind(ctx);
    await controllers(ctx, next);
  })
}

module.exports = router;