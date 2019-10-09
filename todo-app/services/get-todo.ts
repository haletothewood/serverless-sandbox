import { APIGatewayEvent, Callback } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();

export const getTodo = (event: APIGatewayEvent, callback: Callback) => {
  if (!event.pathParameters) {
    const error = new Error("Must include id in path");
    console.error("Error parsing query:", error);
    return callback(error);
  }

  console.info(`Received get request with id: ${event.pathParameters.id}`);

  const params = {
    TableName: "todos-david",
    Key: {
      id: event.pathParameters.id
    }
  };

  return dynamoDb.get(params, (error, data) => {
    console.info(`Getting todo from the database`);
    if (error) {
      console.error("Error getting todo from the database", error);
      callback(error);
    }
    console.info(`Successfully got Todo from the database`);
    callback(error, data.Item);
  });
};
