import { Application } from 'egg'

export default (app: Application) => {
	const { controller, router } = app
	router.get(
		'/queryPageTypeList',
		controller.novelTypeController.queryPageNovelTypeList
	)
	router.get(
		'/queryTypeList',
		controller.novelTypeController.queryNovelTypeList
	)
	router.post('/addTypeInfo', controller.novelTypeController.addNovelTypeInfo)
	router.post(
		'/updateTypeInfo',
		controller.novelTypeController.updateNovelType
	)
	router.post(
		'/deleteTypeInfo',
		controller.novelTypeController.deleteNovelType
	)
}
