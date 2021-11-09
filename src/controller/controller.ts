import { Request, Response } from "express";
const { delay, checkUser } = require("../utils/utils");

class Controller {
    constructor() { }
    public async login(req: Request, res: Response) {
        try {
            await delay();

            var filterResult = checkUser(req.body.userName);
            
            if (filterResult === undefined) {
                res.json({ success: false, errorMessage: "username or password is incorrect" });
            } else {
                if (filterResult[0]?.password === req.body.password) {
                    res.json({ success: true, errorMessage: null });
                }
                else {
                    res.json({ success: false, errorMessage: "username or password is incorrect" });
                }
            }
        } catch (error) {
            console.error("Error ", error);
            res.json({ success: false, error: error.message });
        }
    }
    public async logout(req: Request, res: Response) {
        try {
            await delay();
            res.json({ success: true, errorMessage: null });
        } catch (error) {
            console.error("Error ", error);
            res.json({ success: false, error: error.message });
        }
    }
} export { Controller }