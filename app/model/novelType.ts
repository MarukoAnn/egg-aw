
const NovelType = (app) => {
  const { STRING, INTEGER } = app.Sequelize;
  const novelType = app.model.define('novel_type', {
    id: { type: INTEGER, primaryKey: true },
    typeName: STRING(255),
    typeValue: STRING(255),
    typeSex: INTEGER(11),
  }, {
    timestamp: false, // 自动创建时间
    tableName: 'novel_type', // 设置表名
  });
  return novelType;
};

export default NovelType;
