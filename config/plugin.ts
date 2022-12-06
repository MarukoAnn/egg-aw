import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 配置mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 配飾jwt
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // 配置跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
