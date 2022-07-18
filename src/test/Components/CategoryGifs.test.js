import { fireEvent, render, screen } from "@testing-library/react";
import ButtonCategory from "../../Components/Buttons/ButtonCategories/ButtonCategory";
import CategoryGifs from "../../Components/CategoryGifs";

describe("Category gifs(App)", () => {
  let inputValue1 = "Goku";
  let inputValue2 = "Vegeta";
  let input;
  let form;
  let btnCategoryDelete;
  let btnDeleteAll;

  beforeEach(() => {
    render(<CategoryGifs />);
    input = screen.getByRole("textbox");
    form = screen.getByRole("form");
    btnCategoryDelete =screen.getByText('Delete Category');
    btnDeleteAll = screen.getByText('clear categories');

    fireEvent.change(input, { target: { value: inputValue1 } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: inputValue2 } });
    fireEvent.submit(form);
  });

  test("chequear que el arreglo de categorias este vacio al iniciar la aplicacion", () => {
    const { getByTestId } = render(<CategoryGifs />);
    //si el test es algo como test-is-clear no lo reconoce
    expect(getByTestId("test-clear").innerHTML).toContain(
      "Search your first category :)"
    );
  });

  test("chequear que el arreglo de categorias cambie su estado", () => {
    const { queryByTestId } = screen; //screen es dinamico

    //screen.debug();
    //console.log(screen);
    expect(queryByTestId("test-clear")).toBe(null);
  });

  /*********************************************************************************************** */
  test("chequar si se elimina un elemento", () => {
    fireEvent.click(btnCategoryDelete);
    let categories = screen.getAllByRole("heading", { level: 2 });
    expect(categories.length).toBe(2);
  });

  test("chequar si la funcion de borrar todo funciona", () => {

    fireEvent.click(btnDeleteAll);

    const { queryByTestId } = screen; //screen es dinamico

    expect(queryByTestId("test-clear").innerHTML).toContain(
      "Search your first category :)"
    );
  });
});
