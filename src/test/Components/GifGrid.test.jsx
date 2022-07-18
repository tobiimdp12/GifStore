import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import Loader from "../../components/Loader/Loader";
import useFetchGif from "../../Hooks/useFetchGif";


jest.mock("../../Hooks/useFetchGif");

describe("Test en <GifGrid />", () => {
  const category = "One Punch";

  test("Debe mostrar inicialmente el loading ", () => {
    useFetchGif.mockReturnValue({
      imagenes: [],
      loading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    const { container } = render(<Loader />);
    //expect( container).toBeInTheDocument();
    expect(screen.getByText(category).innerHTML, { hidden: true }).toBe(
      category
    );

    expect(screen.getByText(category, { hidden: true }));
  });

  test("Debe mostrar items, cuando se cargan las imagenes en useFetchGifs", () => {
    useFetchGif.mockReturnValue({
      imagenes: [
        { id: "ABC123", title: "Saitama", url: "https://onepunch/saitama.jpg" },
        { id: "ABC333", title: "Garou", url: "https://onepunch/garou.jpg" },
      ],
      loading: false,
    });

    render(<GifGrid category={"dragon ball"} />);

    expect(screen.getAllByRole("img", { hidden: true }).length).toBe(true);
  });
});
