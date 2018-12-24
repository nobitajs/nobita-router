const Router = new require('koa-router')();

let router = {};
router.__proto__ = Router;

router.get = async (uri, controllers) => {
  Router.get(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.post = async (uri, controllers) => {
  Router.post(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.put = async (uri, controllers) => {
  Router.put(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}
router.del = async (uri, controllers) => {
  Router.del(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}

router.all = async (uri, controllers) => {
  Router.all(uri, async (ctx, next) => {
    await controllers.call(ctx, ctx, next);
  })
}

module.exports = router;