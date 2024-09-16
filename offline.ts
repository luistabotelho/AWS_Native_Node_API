import express, {Request, Response} from 'express'
import { handler } from "./index";
import { APIGatewayProxyEvent } from "aws-lambda";

const app = express()
const port = process.env.PORT || 3000

app.all("/**", async (req: Request, res: Response) => {
    let event = mapEvent(req)
    let result = await handler(event)
    res.status(result.statusCode).send(result.body)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

function mapEvent(req: Request): APIGatewayProxyEvent {
    return {
        headers: {},
        path: req.path,
        body: req.body,
        multiValueHeaders: {},
        httpMethod: req.method,
        isBase64Encoded: false,
        pathParameters: req.params,
        multiValueQueryStringParameters: null,
        queryStringParameters: null, 
        stageVariables: null, 
        requestContext: {
            accountId: "",
            apiId: "",
            authorizer: null,
            protocol: req.protocol,
            httpMethod: req.method,
            path: '',
            stage: '',
            requestId: '',
            requestTimeEpoch: 0,
            resourceId: '',
            resourcePath: '',
            identity: {
                accessKey: null,
                accountId: null,
                apiKey: null,
                apiKeyId: null,
                caller: null,
                clientCert: null,
                cognitoAuthenticationProvider: null,
                cognitoAuthenticationType: null,
                cognitoIdentityId: null,
                cognitoIdentityPoolId: null,
                principalOrgId: null,
                sourceIp: '',
                user: null,
                userAgent: null,
                userArn: null
            }
        }, 
        resource: "localhost"
    }
}
