import BaseService from './base';

export default class NovelTypeService extends BaseService {
	// 查询列表
	public async findPageAll(count, page) {
		const novelTypeList = await this._findPageALl('NovelType', {
			count,
			page
		});
		if (novelTypeList !== null) {
			const { count, rows } = novelTypeList;
			return { totalCount: count, data: rows };
		}
		return [];
	}
	// 查询列表
	public async findAll() {
		const novelTypeList = await this._findAll('NovelType');
		if (novelTypeList !== null) {
			return novelTypeList;
		}
		return [];
	}
	// 新增数据
	public async addType(typeName: string, typeValue: string, typeSex: string) {
		const result: boolean | string = await this._add('NovelType', {
			typeName,
			typeValue,
			typeSex
		});
		return result === true;
	}
	// 更新数据
	public async updateType(
		id: number,
		typeName: string,
		typeValue: string,
		typeSex: string
	) {
		const result: boolean | string = await this._edit('NovelType', {
			id,
			typeName,
			typeValue,
			typeSex
		});
		return result === true;
	}
	// 删除数据
	public async deleteType(id: number) {
		const result: boolean | string = await this._delete('NovelType', id);
		return result === true;
	}
}
