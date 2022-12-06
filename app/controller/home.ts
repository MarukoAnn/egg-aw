import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx, app } = this;
    // 获取到客户端传过来的参数
    const { username = '', password = '' } = ctx.request.body;
    if (username !== '' && password !== '') {
      const data = await app.mysql.get('user', { username, password });
      if (data) {
        const token = app.jwt.sign({
          username,
          password,
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 有效期 24小时
        }, app.config.jwt.secret);
        ctx.body = {
          code: 200,
          message: '登陆成功',
          data: { token }
        };
      }

    }
  }

  public async testToken() {
    const { ctx } = this;
    if (ctx.state.user && new Date().getTime() / 1000 > ctx.state.user.iat) {
    }
  }
}
