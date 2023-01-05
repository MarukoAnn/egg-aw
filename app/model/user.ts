import { Application } from 'egg';
export default (app: Application) => {
	const { STRING, INTEGER } = app.Sequelize;
	const User = app.model.define(
		'User',
		{
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			username: STRING(255),
			password: STRING(255)
		},
		{
			createdAt: false, // 表示不启用created_at
			updatedAt: false, // 表示不启用updated_at
			freezeTableName: true, // 使用自定义表名
			// 使用自定义表名之后上面写的users就直接就是你的表名，如果不加的话，你就可以写user，但是自己的表名为users，程序会自动将s加上
			tableName: 'user'
		}
	);
	return class extends User {};
};
