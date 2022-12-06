import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/login', controller.home.login);
  router.get('/test', controller.home.testToken);
};
