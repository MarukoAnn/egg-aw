import BaseController from "./base";

export default class NovelTypeController extends BaseController {

  public async queryNovelTypeList() {
    const { ctx } = this;
    const novelTypeList = await ctx.service.novelTypeService.findAll();
    this.success(novelTypeList);
  }
  public async addNovelTypeInfo() {
    const { ctx } = this;
    const { typeName, typeValue, typeSex } = ctx.request.body;
    const isSuccess = await ctx.service.novelTypeService.addType(typeName, typeValue, typeSex);
    console.log('isSuccess', isSuccess);
    if (isSuccess) {
      this.success();
    } else {
      this.error('添加失败');
    }
  }
}