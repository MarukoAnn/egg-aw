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
          data: { token },
        };
      } else {
        ctx.body = {
          code: 200,
          message: '用户名或者密码错误',
          data: null,
        };
      }
    }
  }

  public async testToken() {
    const { ctx } = this;
    console.log(ctx.state, 'user');
    ctx.body = {
      code: 200,
      message: '测试成功',
      data: null,
    };
  }
}
