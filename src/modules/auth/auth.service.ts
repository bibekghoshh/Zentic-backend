import { User } from "../../models/user.model.ts";
import { hashPassword, comparePassword } from "../../utils/hash.ts";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.ts";

export const register = async (data: {name: string, email: string, password: string}) => {
    const hashedPassword = await hashPassword(data.password);

    const user = await User.create({
        ...data,
        password: hashedPassword,
    })
    return user;
}

export const login = async (email:string, password: string) => {
    const user = await User.findOne({where: {email}});
    if(!user) throw new Error('User not found');

    const isMatch = await comparePassword(password, user.getDataValue("password"));
    if(!isMatch) throw new Error ('Invalid credentials');

    const payload = { id: user.getDataValue("id)")};
    
    return {
        user,
        accessToken: generateAccessToken(payload),
        refreshToken: generateRefreshToken(payload),
    }
}