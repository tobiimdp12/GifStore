import LikedGif from "../../Helpers/LikedGif";

describe("chequear si el helper de dar like funciona", () => {
  test("debe dar like",()=>
  {
    let gif={title:"Dragon Ball",url:"www.google.com"}

    let result=LikedGif(gif);

    expect(result).toBe(true);
  });
  
});

