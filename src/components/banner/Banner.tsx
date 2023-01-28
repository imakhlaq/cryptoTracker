import Carousel from "./Carousel";

const Banner = () => {
  return (
    <section className="bg-hero flex flex-col justify-center items-center bg-cover">
      <h2 className="text-2xl md:6xl font-bold mt-44">Crypto Tracker</h2>
      <p className="text-[gray] mt-7 container mx-auto text-md text-center">
        Get All Info Regarding Your Favorite Crypto Currency
      </p>
      <Carousel />
    </section>
  );
};
export default Banner;
