import { Sequelize, INTEGER, STRING } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
  dialect: "postgres",
});

export const User = sequelize.define("User", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

export default sequelize;
