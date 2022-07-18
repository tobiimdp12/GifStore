import { getUser, saludo } from "./functions";

describe("test demo", () => {
  test("should first", () => {
    //expect(1===1).toBe(true);//true
  });

  test("test 2 mensaje igual", () => {
    //arrange
    const message1 = "hola";

    //act/acciones
    const message2 = message1.trim();

    //Assert//observar el comportamiento esperado
    expect(message1).toBe(message2);
  });

  test("test 3 get saludo", () => {
    //arrange
    const nombre = "tobias";

    //act/acciones
    const message = saludo(nombre);

    //Assert//observar el comportamiento esperado
    expect(message).toBe("hola " + nombre);
  });

  test("test 4 get user", () => {
    //arrange
    
    const user = 
    {
      id:'ANDS12',
    };

    //act/acciones
    const userFunction = getUser();

    //Assert//observar el comportamiento esperado
    expect(userFunction.id).toStrictEqual(user.id);//para comparar bien el valor de un objeto con otro
  });
});
