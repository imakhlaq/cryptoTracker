import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTrendingCoins } from "../../store/cryptoSlice/cryptoSlice";
const Carousel = () => {
  const dispatch = useAppDispatch();
  const trendingMovies = useAppSelector((state) => state.crypto.trendingCoins);
  const currency = useAppSelector((state) => state.crypto.currency);

  useEffect(() => {
    dispatch(fetchTrendingCoins(currency));
  }, [currency]);

  console.log(trendingMovies);

  return <div>Carousel</div>;
};
export default Carousel;
