import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import ApiController from "./controller.interface";

export default class TestController implements ApiController {
    main(event: APIGatewayProxyEvent): APIGatewayProxyResult {
        return {
            statusCode: 200,
            body: "Hello from TestController"
        }
    }
}
