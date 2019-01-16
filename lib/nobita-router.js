const Router = new require('koa-router')();

let router = {};
router.__proto__ = Router;

router.get = (uri, ...controllers) => {
  controllers = controllers.map((item) => {
    return async (ctx, next) => {
      await item.call(ctx, ctx, next);
    };
  })
  Router.get(uri, ...controllers);
}

router.post = (uri, ...controllers) => {
  controllers = controllers.map((item) => {
    return async (ctx, next) => {
      await item.call(ctx, ctx, next);
    };
  })
  Router.post(uri, ...controllers);
}

router.put = (uri, ...controllers) => {
  controllers = controllers.map((item) => {
    return async (ctx, next) => {
      await item.call(ctx, ctx, next);
    };
  })
  Router.put(uri, ...controllers);
}


router.del = (uri, ...controllers) => {
  controllers = controllers.map((item) => {
    return async (ctx, next) => {
      await item.call(ctx, ctx, next);
    };
  })
  Router.del(uri, ...controllers);
}

router.all = (uri, ...controllers) => {
  controllers = controllers.map((item) => {
    return async (ctx, next) => {
      await item.call(ctx, ctx, next);
    };
  })
  Router.all(uri, ...controllers);
}

module.exports = router;