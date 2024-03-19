// app.tsx
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./navigation/Header";
import Navigation from "./navigation/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Banners from "./pages/Banners";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackground =
    scrollPosition > window.innerHeight ? "#0C233C" : "#2A1212";
  return (
    <>
      <BrowserRouter>
        <Banners />
        {/* Route for the home page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header background={navBackground} />
                <Home />
              </>
            }
          />
          {/* Route for other pages */}
          <Route
            path="/*"
            element={
              <>
                <Navigation /> {/* Use the other header component */}
                <Routes>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products" element={<Products />} />
                  {/* Add more routes for other pages if needed */}
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
