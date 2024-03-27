import CarouselTemp from "../components/CarouselTemp";
import Categories from "./categories/Categories";
import Bestsellers from "./bestsellers/Bestsellers";
import Arrivals from "./arrivals/Arrivals";

function Home() {
  return (
    <div className="space-y-16">
      <CarouselTemp />
      <Categories />
      <Bestsellers />
      <Arrivals />
    </div>
  );
}

export default Home;
