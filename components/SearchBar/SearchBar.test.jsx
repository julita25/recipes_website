import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

const mockOnChange = jest.fn();

describe("Searchbar", () => {
  it("calls the onChange function when the search btn is clicked", () => {
    const { container, queryByPlaceholderText } = render(
      <SearchBar onChange={mockOnChange} />
    );

    const searchBar = queryByPlaceholderText("Search");
    fireEvent.change(searchBar, {
      target: {
        value: "pizza"
      }
    });
    const searchBtn = container.querySelector(".rs-input-group-btn");
    fireEvent.click(searchBtn);

    expect(mockOnChange).toHaveBeenCalledWith("pizza");
  });
});
