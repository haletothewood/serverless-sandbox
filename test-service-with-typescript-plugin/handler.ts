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
};
