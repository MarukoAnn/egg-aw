import BaseService from './base';


export default class NovelTypeService extends BaseService {

  public async findAll() {
    const novelTypeList = await this._findAll('NovelType');
    if (novelTypeList !== null) {
      return novelTypeList;
    }
    return [];
  }
  public async addType(typeName: string, typeValue: string, typeSex: string) {
    // const result: any = await this._add('NovelType', { type_name: typeName, type_value: typeValue, type_sex: typeSex });
    const result: any = await this.ctx.model.NovelType.create({ type_name: typeName, type_value: typeValue, type_sex: typeSex });
    return result.affectedRows === 1;
  }
}
