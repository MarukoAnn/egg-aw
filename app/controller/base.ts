import { Controller } from 'egg';
// import { responseBody } from '../../typings/app/controller/index';
export default class BaseController extends Controller {
    // // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    async success(data: any = null, message = '请求成功', code = 200) {
        const { ctx } = this;
        const responseBodyData = { data, message, code };
        ctx.body = responseBodyData;
    }
    async error(message = '请求失败', code = 401) {
        const { ctx } = this;
        ctx.body = {
            code,
            message,
        };
    }
}
