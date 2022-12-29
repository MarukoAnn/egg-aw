import { Application } from 'egg';
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const NovelType = app.model.define('novelType', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    typeName: STRING(255),
    typeValue: STRING(255),
    typeSex: INTEGER(),
  }, {
    tableName: 'novel_type', // 设置表名
  });
  return class extends NovelType {};
};
