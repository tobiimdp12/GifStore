import { render } from "@testing-library/react";
import GifItem from "../../Components/GifItem";

describe("Test en <GifItem/>", () => {
  
  const title = "Dragon Ball";
  const url = "https://dragon-ball.com/goku.jpg";
  const gif = { title: title, url: url };

  test("Debe coincidir con el snapshot", () => {
    console.log(gif);
    const { container } = render(<GifItem gif={gif} />);
    expect(container).toMatchSnapshot();

  });

  test('Debe mostrar URL y ALT', () => {
        
    render( <GifItem title={title} url={url} /> )
​
    // screen.debug();
       
    const {src, alt} = screen.getByRole( 'img' );
    expect( src ).toContain(url);
    expect( alt ).toContain('gif');
});
});
