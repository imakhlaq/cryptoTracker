import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTrendingCoins } from "../../store/cryptoSlice/cryptoSlice";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const Carousel = () => {
  const dispatch = useAppDispatch();
  const trendingCoins = useAppSelector((state) => state.crypto.trendingCoins);
  const currency = useAppSelector((state) => state.crypto.currency);

  useEffect(() => {
    dispatch(fetchTrendingCoins(currency));
  }, [currency]);

  const items = trendingCoins.map((coin) => {
    return (
      <Link
        className="flex justify-center items-center gap-4 md:gap-7"
        to={`/coins/${coin.id}`}
      >
        <img src={coin.image} alt={coin.name} className="h-20" />
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="max-w-lg mt-10 md:max-w-2xl lg:max-w-4xl text-center">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};
export default Carousel;
