import { APIGatewayEvent } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient();
import * as uuid from "uuid";

interface Todo {
  id?: string;
  updatedAt?: number;
  description: string;
}

export const createTodo = (event: APIGatewayEvent, callback) => {
  if (!event.body) {
    const error = new Error("Description can't be null");
    return callback(error);
  }
  
  let data: Todo;

  if (typeof event.body === "object") {
    console.warn(`Should only run in: DEV! Parsing request}`);
    data = event.body;
  } else {
    console.info(`Parsing request: ${event.body}`);
    data = JSON.parse(event.body);
  }

  data.id = uuid.v1();
  data.updatedAt = new Date().getTime();

  const params = {
    TableName: "todos-david",
    Item: data
  };
  console.info(`Created Todo: ${params.Item.description}`);

  return dynamoDb.put(params, (error: Error, _data) => {
    console.info(`Adding Todo to table`);
    if (error) {
      console.error(`Failed to add Todo to table`);
      callback(error);
    }
    console.info(`Successfully added Todo to table`);
    callback(error, params.Item);
  });
};
