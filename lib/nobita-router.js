const Router = new require('koa-router')();

let router = {};
router.__proto__ = Router;

router.get = (uri, controllers) => {
  Router.get(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.post = (uri, controllers) => {
  Router.post(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.put = (uri, controllers) => {
  Router.put(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.del = (uri, controllers) => {
  Router.del(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}

router.all = (uri, controllers) => {
  Router.all(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}

module.exports = router;