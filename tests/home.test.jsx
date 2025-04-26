import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/Home";

//? Setup And Refreshing Testing

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

// App.test.jsx

// describe("Home component", () => {
//   it("renders Home", () => {
//     const { container } = render(<Home />);
//     expect(container).toMatchSnapshot();
//   });
//   it("renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<Home />);
//     const button = screen.getByRole("button", { name: "Sign Up!" });

//     await user.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });
