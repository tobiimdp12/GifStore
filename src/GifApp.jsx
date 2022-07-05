import CategoryGifs from "./Components/CategoryGifs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./gifapp.css";
import LikedGif from "./Components/LikedGif";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CategoryGifs />} />
          <Route path="/favorites" element={<LikedGif />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
