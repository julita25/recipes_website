import React from "react";
import { fireEvent, render } from "@testing-library/react";
import GlutenFreeToggleButton from "./GlutenFreeToggleButton";

const mockOnChange = jest.fn();

describe("Toggle button", () => {
  it("calls the onChange function when the user clicks the toggle", () => {
    const { getByText, getByTestId } = render(<GlutenFreeToggleButton onChange={mockOnChange} />);
    const toggleButton = getByTestId("toggle-btn");

    fireEvent.click(toggleButton);
    expect(mockOnChange).toHaveBeenCalled();
    expect(getByText("Only gluten free foods")).toBeVisible();
  });
});
