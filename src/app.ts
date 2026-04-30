import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./modules/auth/auth.routes.ts";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    Credentials: true,
}));

app.use("/auth", router);

export default app;