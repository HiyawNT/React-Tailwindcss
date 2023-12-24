import HeroImg from "../assets/hero.jpg";
import ContentAndCounters from "./ContentAndCounters";
import SearchComponent from "./SearchComponent";
import "../hero.css";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-32 w-full h-full"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="container mx-auto mt-10 text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">
                Find a home that suits you
              </h1>
              <p className="text-xl mb-12">
                Want to find a home? We are ready to help you find that suits
                your lifestyle and needs.
              </p>
            </div>
          </div>
          <ContentAndCounters />
          <div className="mb-20"></div>
        </div>

        <SearchComponent />
      </section>
    </div>
  );
};

export default Hero;
