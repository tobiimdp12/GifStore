import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategoryForm } from "../../Components";

describe("Test en <AddCategory />", () => {
  test("Debe cambiar el valor del input", () => {
    render(<AddCategoryForm addCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Goku" } });

    expect(input.value).toBe("Goku");
  });

  test("Debe llamar la funcion addCategory si el input tiene valor", () => {
    const inputValue = "Goku";

    const addCategory = jest.fn();

    render(<AddCategoryForm addCategory={addCategory} />);

    const input = screen.getByRole("textbox");

    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    screen.debug();

    expect(input.value).toBe("");

    expect(addCategory).toHaveBeenCalled();

    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No se debe llamar la funcion addCategory, si el input esta vacio", () => {
    const addCategory = jest.fn();
    render(<AddCategoryForm addCategory={addCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    console.log("-------------------------------------");
    screen.debug();
    expect(addCategory).not.toHaveBeenCalled();
  });
});
