import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCoin } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import CoinInfo from "../components/CoinInfo";
import parse from "html-react-parser";
import { numberWithCommas } from "../utils/priseWithCommas";

const CoinPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const singleCoin = useAppSelector((state) => state.crypto.singleCoin);
  const currency = useAppSelector((state) => state.crypto.currency);
  const symbol = useAppSelector((state) => state.crypto.symbol);
  const loading = useAppSelector((state) => state.crypto.loading);

  useEffect(() => {
    console.log("code");
    dispatch(fetchSingleCoin(id!));
  }, []);

  console.log(loading);
  if (loading) {
    return;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mt-10 md:border-r-2 md:border-[gray] md:p-10 max-w-4xl">
        <div className="flex justify-center items-center flex-col">
          <img
            src={singleCoin?.image?.large}
            alt={singleCoin.name}
            className=" h-64 mb-14"
          />
          <h2 className="text-6xl font-semibold">{singleCoin.name}</h2>
          <p className="text-center px-5 max-w-md lg:max-w-lg mt-3 tracking-wide">
            {parse(singleCoin?.description?.en.split(".")[0])}
          </p>
        </div>
        <div className="text-left md:text-center md:items-start font-extrabold text-3xl flex flex-col gap-4 mt-10 ml-12">
          <p>
            Rank:{" "}
            <span className=" font-extralight">
              {singleCoin?.coingecko_rank}
            </span>
          </p>
          <p>
            Current Price:{" "}
            <span className=" font-extralight">
              {symbol}{" "}
              {numberWithCommas(
                singleCoin?.market_data?.current_price[
                  currency.toLocaleLowerCase()
                ]
              )}
            </span>
          </p>
          <p>
            Market Cap:{" "}
            <span className="font-extralight">
              {symbol}{" "}
              {numberWithCommas(
                singleCoin?.market_data?.market_cap[
                  currency.toLocaleLowerCase()
                ]
              )
                .toString()
                .slice(0, 6)}
              M{" "}
            </span>
          </p>
        </div>
      </div>
      <div>
        <CoinInfo />
      </div>
    </div>
  );
};
export default CoinPage;
