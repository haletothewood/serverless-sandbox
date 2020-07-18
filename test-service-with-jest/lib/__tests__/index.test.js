"use strict";
// tests for index
// Generated by serverless-jest-plugin
const mod = require("../index");
const jestPlugin = require("serverless-jest-plugin");
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: "handler" });
describe("index", () => {
    it("implement tests here", () => {
        return wrapped.run({}).then((response) => {
            console.log(response);
            expect(response.statusCode).toBe(200);
            expect(response.body).toContain("Hello World!");
        });
    });
});
//# sourceMappingURL=index.test.js.map