import calculate from "../logic/calculate";

//Operation
//Next

describe("Testing calculations methods", () => {
  const testMethod = calculate({ total: 5, next: 5, operation: "+" }, "=");
  test("Addition method", () => {
    expect(testMethod.total).toBe("10");
  });
});
