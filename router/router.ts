import ApiController from "../controllers/controller.interface";
import TestController from "../controllers/test.controller";
import {NotFoundException} from "../exceptions";

export default class Router {
    static getController(path: string, method: string): ApiController {
        let address = `${method} ${path}`
        switch (address) {
            case "POST /test":
                return new TestController()
            default:
                throw new NotFoundException("Route not Found");
        }
    }
}
