
import { Context } from 'egg';

export default () => {
    return async (ctx: Context, next: any) => {
        console.log(ctx.headers.authorization, 'user');
        let token = ctx.headers.authorization ? ctx.headers.authorization!.slice(7) : '';
        console.log(token, 'token');
        return await next();
    }
}