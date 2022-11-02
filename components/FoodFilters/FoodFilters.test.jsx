import React from "react";
import { fireEvent, render } from "@testing-library/react";
import FoodFilters from "./FoodFilters";

const dietLabels = ["All", "Balanced", "Low-Sodium", "High-Fiber", "Low-Fat"];
const mockOnChange = jest.fn();

describe("FoodFilters", () => {
  it("calls the onChangeFunction when a filter is selected", () => {
    const { getByText } = render(<FoodFilters onChange={mockOnChange} />);

    dietLabels.forEach((label) => expect(getByText(label)).toBeVisible());

    fireEvent.click(getByText(dietLabels[2]));
    expect(mockOnChange).toHaveBeenCalledWith(dietLabels[2]);
  });
});
