import { fireEvent, render, screen } from "@testing-library/react";
import ButtonCategory from "../../components/Buttons/ButtonCategories/ButtonCategory";
import CategoryGifs from "../../Components/CategoryGifs";

describe("test button category", () => {
  test("chequar si se elimina un elemento", () => {
    let categories = ["dragon ball", "bakugan", "one pice"];


    render(<CategoryGifs />);
    screen.debug();
  });
  test("chequar si la funcion de borrar todo funciona", () => {
    let categories = ["dragon ball", "bakugan", "one pice"];

    render(
      <ButtonCategory
        text="delete all"
        handleUpdate={() => {
          categories = [];
        }}
      />
    );

    fireEvent.click(screen.getByText("delete all"));

    expect(categories.length).toBe(0);
  });
});
