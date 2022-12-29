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
    const result: boolean | string = await this._add('NovelType', { typeName, typeValue, typeSex });
    return result == true;
  }
}
