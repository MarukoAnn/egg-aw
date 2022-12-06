import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670238507022_8358';

  // add your egg config in here
  config.middleware = [ 'auth' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 配置数据库
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'spring',
    },
    // 是否加载到app上，默认开启
    app: true,
    // 是否加载到agent上，默认关闭
    agent: false,
  };

  // 配置jwt
  config.jwt = {
    secret: '123456',
  };
  config.security = {
    csrf: {
      enabled: false,
      ignoreJSON: true,
      domainWhiteList: [ 'http://localhost:8080' ], // 允许访问的接口卡白名单
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,POST,OPTIONS',
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
