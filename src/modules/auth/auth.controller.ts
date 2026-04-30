import type { Request, Response } from "express";
import * as AuthService from "./auth.service.ts"

export const register = async (req: Request, res: Response) => {
    const user= await AuthService.register(req.body);
    res.status(201).json({user});
};

export const login = async (req: Request, res: Response) => {
    const {user, accessToken, refreshToken} = await AuthService.login(req.body.email, req.body.password);

    res
    .cookie("accessToken", accessToken, {
        httpOnly:true,
        secure: true,
        sameSite: "none",
    })
    .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })
    .json({user});
};