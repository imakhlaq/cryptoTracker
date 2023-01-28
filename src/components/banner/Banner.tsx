import Carousel from "./Carousel";

const Banner = () => {
  return (
    <section className="bg-hero flex flex-col justify-center items-center bg-cover">
      <h2 className="text-6xl font-bold mt-44">Crypto Tracker</h2>
      <p className="text-[gray] mt-7">
        Get All Info Regarding Your Favorite Crypto Currency
      </p>
      <Carousel />
    </section>
  );
};
export default Banner;
