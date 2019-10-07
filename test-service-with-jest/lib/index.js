"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
exports.handler = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World!",
            input: event
        }, null, 2)
    };
};
//# sourceMappingURL=index.js.map