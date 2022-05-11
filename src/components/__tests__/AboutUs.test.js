import { render, screen } from "@testing-library/react";
import AboutUs from "../AboutUs/AboutUs";

describe("Test the Header Component", () => {
    test("render the login form submit button on the screen", () => {
      render(<AboutUs />);
      const text = screen.findAllByText("Welcome to watchCommerce");
      expect(text).toBeTruthy();
    });
})