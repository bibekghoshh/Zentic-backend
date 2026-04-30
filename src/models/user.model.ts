import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.ts";

export const User = sequelize.define("User", {
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: DataTypes.STRING,
});