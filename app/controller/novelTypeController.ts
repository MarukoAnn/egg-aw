import BaseController from './base';

export default class NovelTypeController extends BaseController {
	// 分页查询小说类型数据
	public async queryPageNovelTypeList() {
		const { ctx } = this;
		const { count, page } = ctx.request.body;
		const novelTypeList = await ctx.service.novelTypeService.findPageAll(
			count,
			page
		);
		this.success(novelTypeList);
	}
	// 查询小说类型数据
	public async queryNovelTypeList() {
		const { ctx } = this;
		const novelTypeList = await ctx.service.novelTypeService.findAll();
		this.success(novelTypeList);
	}
	// 添加小说类型
	public async addNovelTypeInfo() {
		const { ctx } = this;
		const { typeName, typeValue, typeSex } = ctx.request.body;
		const isSuccess = await ctx.service.novelTypeService.addType(
			typeName,
			typeValue,
			typeSex
		);
		console.log('isSuccess', isSuccess);
		if (isSuccess) {
			this.success();
		} else {
			this.error('添加失败');
		}
	}
	// 更新小说类型数据
	public async updateNovelType() {
		const { ctx } = this;
		const { id, typeName, typeValue, typeSex } = ctx.request.body;
		const isSuccess = await ctx.service.novelTypeService.updateType(
			id,
			typeName,
			typeValue,
			typeSex
		);
		if (isSuccess) {
			this.success();
		} else {
			this.error('更新失败');
		}
	}

	// 更新小说类型数据
	public async deleteNovelType() {
		const { ctx } = this;
		const { id } = ctx.request.body;
		console.log('id:', id);
		const isSuccess = await ctx.service.novelTypeService.deleteType(id);
		if (isSuccess) {
			this.success();
		} else {
			this.error('删除失败');
		}
	}
}
