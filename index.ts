import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import Router from './router/router'
import { NotFoundException } from "./exceptions";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let controller = Router.getController(event.path, event.httpMethod)
        return controller.main(event)
    } catch (error) {
        return handleError(error)
    }
}

function handleError(error: unknown): APIGatewayProxyResult {
    if (error instanceof NotFoundException) {
        return {
            statusCode: 404,
            body: error.message
        }
    }

    return {
        statusCode: 500,
        body: "Internal Server Error"
    }
}
