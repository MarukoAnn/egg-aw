import { Context } from 'egg'
import { ignoreRoutersList } from '../config/ignoreList'
export default () => {
	return async (ctx: Context, next: any) => {
		// 忽视的路由不效验token
		if (ignoreRoutersList.includes(ctx.request.url)) {
			await next()
			return
		}
		const token = ctx.headers.authorization
			? ctx.headers.authorization!.slice(7)
			: ''
		if (token) {
			try {
				const decodeCode = ctx.app.jwt.verify(
					token,
					ctx.app.config.jwt.secret,
					(err, decode) => {
						// if(err.name)
						console.log(err?.name, 'err')
						if (err?.name === 'TokenExpiredError') {
							const str = {
								status: 402,
								message: 'token已过期 请重新登陆'
							}
							return str
						}
						return decode
					}
				)
				console.log(
					decodeCode,
					new Date().getTime() / 1000,
					'decodeCode'
				)
				if (new Date().getTime() / 1000 < decodeCode.exp) {
					await next()
				} else {
					ctx.body = {
						status: 402,
						message: 'token已过期 请重新登陆'
					}
				}
			} catch (err: any) {
				ctx.status = 401
				ctx.body = { message: err.message }
			}
		} else {
			ctx.body = {
				status: 401,
				message: 'token不能为null'
			}
		}
	}
}
