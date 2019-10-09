import { APIGatewayEvent, Handler, Callback } from "aws-lambda";
import { createTodo } from "./services/create-todo";
import { getAllTodos } from "./services/get-all-todos"
import { getTodo } from "./services/get-todo";

export const create: Handler = (
  event: APIGatewayEvent,
  _context,
  callback: Callback
) => {
  createTodo(event, (error, result) => {
    let response: any;
    if (!result) {
      response = {
        statusCode: 404,
        error: error.message
      };
      console.error(error.message);
      callback(null, response);
    } else {
      response = {
        statusCode: 201,
        body: JSON.stringify(result)
      };
      console.info(response);
      callback(null, response);
    }
  });
};

export const getAll: Handler = (
  event: APIGatewayEvent,
  _context,
  callback: Callback
): void => {
  getAllTodos(event, (_error, result) => {
    const response: any = {
      statusCode: 200,
      body: JSON.stringify(result)
    };
    console.info(response);
    callback(null, response);
  });
};

export const get: Handler = (
  event: APIGatewayEvent,
  _context,
  callback: Callback
): void => {
  getTodo(event, (error: Error, result) => {
    let response: any;
    if (!result) {
      response = {
        statusCode: 404,
        error: error.message
      };
      console.error(error.message);
      callback(null, response);
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify(result)
      };
      console.info(response);
      callback(null, response);
    }
  });
};
