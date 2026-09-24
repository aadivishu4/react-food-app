import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";


describe("Testing Contact Us Page", () => { 
    // describe is for the grouping the test cases

    // 'test' is also known as 'it' just alias

test("Should load contact us component", () => {
  render(<ContactUs />);

  const headings = screen.getAllByRole("heading");

  expect(headings.length).toBeGreaterThan(0);
});


it("Should load button in the conact compoenent", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
})