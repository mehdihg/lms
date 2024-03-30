import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
describe("Button", () => {
  it("default button exists", () => {
    const btn = render(<Button>click on</Button>);
    expect(btn.getByText("click on")).toBeInTheDocument();
  });
  it("disabled button if isDisabled ture", () => {
    render(<Button isDisabled={true}>disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("applies correct css if variant set", () => {
    const { rerender } = render(<Button variant="primary">button</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
    rerender(<Button variant="info">button</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
  it("show button with all props", () => {
   render(<Button isDisabled={true} variant="neutral" isOutline>disabled</Button>);
   screen.debug()
 });
});
