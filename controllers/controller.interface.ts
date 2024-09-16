import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export default interface ApiController {
    main(event: APIGatewayProxyEvent): APIGatewayProxyResult
}
