import { Request, Response } from "express";
import { Controller } from "../controller/controller";

class Routes {
    private controller: Controller; constructor() {
        this.controller = new Controller();
    }

    public routes(app): void {
        app.route('/api/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successful."
                    });
            });
        app.route('/api/login')
            .post(this.controller.login);
        app.route('/api/logout')
            .post(this.controller.logout);
    }
} export { Routes };