import { render } from "@testing-library/react";
import ButtonDownload from "../../Components/Buttons/ButtonDownload/ButtonDownload";

describe("testeo componente boton descargas", () => {
  test("chequear de que si no le llega un gif vaya al catch", () => {
    
    const {unmount}=render(<ButtonDownload gif={{}}/>)
    expect(unmount()).toBe(undefined);
  });
});
