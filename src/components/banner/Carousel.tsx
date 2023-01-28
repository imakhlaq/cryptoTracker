import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTrendingCoins } from "../../store/cryptoSlice/cryptoSlice";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const Carousel = () => {
  const dispatch = useAppDispatch();
  const trendingCoins = useAppSelector((state) => state.crypto.trendingCoins);
  const currency = useAppSelector((state) => state.crypto.currency);
  const symbol = useAppSelector((state) => state.crypto.symbol);

  useEffect(() => {
    dispatch(fetchTrendingCoins(currency));
  }, [currency]);

  const items = trendingCoins.map((coin) => {
    let profit = coin.price_change_24h >= 0;
    return (
      <Link
        className="flex justify-center items-center gap-8 md:gap-7"
        to={`/coins/${coin.id}`}
      >
        <div className="flex flex-col gap-3 justify-center items-center">
          <img src={coin.image} alt={coin.name} className="h-20" />
          <div className="flex justify-center items-center gap-3">
            <span className="text-[gold]">{coin.symbol}</span>
            <span className={`${profit ? "text-green-500" : "text-red-600"}`}>
              {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xl font-bold lg:text-2xl">
            <span>{symbol}</span>
            <span>{coin.current_price.toFixed(2)}</span>
          </div>
        </div>
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
    <div className="max-w-sm mt-20 md:max-w-2xl lg:max-w-4xl text-center ">
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
