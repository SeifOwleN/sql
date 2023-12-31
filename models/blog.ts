import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/db";

class Blog extends Model {}
Blog.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		author: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		url: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		likes: {
			type: DataTypes.INTEGER,
		},
		year: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		timestamps: true,
		modelName: "blog",
	},
);

export default Blog;
