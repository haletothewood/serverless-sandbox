import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import "source-map-support/register";

export const hello: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  _context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World!",
        input: event
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
