import { APIGatewayEvent, Callback } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();

export const getAllTodos = (event: APIGatewayEvent, callback: Callback) => {
  console.info(`Received get all request`);

  const params = {
    TableName: "todos-david"
  };

  return dynamoDb.scan(params, (error, data) => {
    console.info(`Getting all todos from the database`);
    if (error) {
      console.error("Error getting all todos from the database", error);
      callback(error);
    }
    console.info(`Successfully got todos from the database`);
    callback(error, data.Items);
  });
};