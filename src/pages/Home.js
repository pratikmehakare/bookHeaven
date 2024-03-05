import { data } from "../data";
import Products from "../components/Products";
import CarouselPage from "../components/CarouselPage";

const Home = () => {
  return (
    <div className="pb-5">
      <div>
        <CarouselPage />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
