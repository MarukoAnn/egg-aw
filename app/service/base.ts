import { Service } from 'egg'

export default class BaseService extends Service {
	async _findPageALl(modelName, json) {
		const { ctx } = this
		const offset = (json.page - 1) * json.count
		try {
			return await ctx.model[modelName].findAndCountAll({
				limit: parseInt(json.count),
				offset
			})
		} catch (err) {
			return 'Server error'
		}
	}

	// 查询所有数据
	async _findAll(modelName) {
		const { ctx } = this
		try {
			return await ctx.model[modelName].findAll()
		} catch (error) {
			return 'Server error'
		}
	}
	// 查询数据总数
	async _count(modelName) {
		const { ctx } = this
		try {
			return await ctx.model[modelName].count()
		} catch (error) {
			return 'Server error'
		}
	}

	// 根据ID查询数据
	async _findById(modelName, id) {
		const { ctx } = this
		try {
			const result = await ctx.model[modelName].findByPk(id)
			return result
		} catch (error) {
			return 'Server error'
		}
	}

	// 新增数据
	async _add(modelName, json) {
		const { ctx } = this
		try {
			console.log(ctx.model, 'modelName')
			await ctx.model[modelName].create(json)
			return true
		} catch (error) {
			return 'Server error'
		}
	}

	// 编辑数据
	async _edit(modelName, json) {
		const { ctx } = this
		try {
			const result = await ctx.model[modelName].findByPk(json.id)
			console.log(json, 'result')
			if (!result) return false
			await result.update({ ...json })
			return true
		} catch (error) {
			return 'Server error'
		}
	}

	// 删除数据
	async _delete(modelName, key) {
		const { ctx } = this
		try {
			const result = await ctx.model[modelName].findByPk(key)
			if (!result) return false
			await result.destroy()
			return true
		} catch (error) {
			return 'Server error'
		}
	}
}
