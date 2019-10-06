// handler.spec.ts
import { expect } from "chai";
import { hello } from "../handler";

describe("handler", () => {
  describe("hello", () => {
    it("should return Hello World", async () => {
      const response = await hello(null, null, () => {});
      if (response) {
        expect(response.statusCode).to.eq(200);
        expect(response.body).to.equal(
          '{\n  "message": "Hello World!",\n  "input": null\n}'
        );
      }
    });
  });
});


