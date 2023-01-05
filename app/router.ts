import { Application } from 'egg';
import novelTypeRouter from './router/novelTypeRoute';

export default (app: Application) => {
	const { controller, router } = app;
	router.post('/login', controller.home.login);
	//  小说类型
	novelTypeRouter(app);
};
