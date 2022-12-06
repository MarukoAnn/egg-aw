import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware, jwt } = app;
  const jwtErr = middleware.jwtErr(jwt);
  router.post('/login', controller.home.login);
  router.get('/test', jwtErr, controller.home.testToken);
};
