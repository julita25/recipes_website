import React from "react";
import { render } from "@testing-library/react";
import NutritionList from "./NutritionList";

const mockDailyValue = [
  {
    label: "Calcium",
    total: "100.5",
    unit: "g"
  },
  {
    label: "Protein",
    total: "20.232",
    unit: "g"
  },
  {
    label: "Carbs",
    total: "150",
    unit: "g"
  }
];

describe("NutritionList", () => {
  it("renders the recipes nutrional values", () => {
    const { getByText } = render(<NutritionList dailyValue={mockDailyValue} />);

    mockDailyValue.forEach(({ label, total, unit }) => {
      expect(getByText(label)).toBeVisible();
      expect(getByText(`${Math.round(total)}${unit}`)).toBeVisible();
    });
  });
});
