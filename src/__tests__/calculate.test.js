import { render } from "@testing-library/react";
import Calculator from "../components/calculator/Calculator";
import calculate from "../logic/calculate";

//Operation
//Next

describe("Testing calculations methods", () => {
  const testMethod = calculate({ total: 5, next: 5, operation: "+" }, "=");
  test("Addition method", () => {
    expect(testMethod.total).toBe("10");
  });

  const output = calculate({ total: 20, next: 5, operation: "-" }, "=");
  test("subtraction", () => {
    expect(output.total).toBe("15");
  })

});
//Component test
describe("Testing component", () => {
  it("Renders correctly", () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});