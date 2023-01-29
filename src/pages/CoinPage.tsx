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

  useEffect(() => {
    dispatch(fetchSingleCoin(id!));
  }, []);
  const singleCoin = useAppSelector((state) => state.crypto.singleCoin);
  const currency = useAppSelector((state) => state.crypto.currency);
  const symbol = useAppSelector((state) => state.crypto.symbol);

  console.log(singleCoin);

  if (!singleCoin.market_cap) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mt-10">
        <div className="flex justify-center items-center flex-col">
          <img
            src={singleCoin?.image?.large}
            alt={singleCoin.name}
            className=" h-64 mb-14"
          />
          <h2 className="text-6xl font-semibold">{singleCoin.name}</h2>
          <p className="text-center px-5"></p>
          {/* <p>{parse(singleCoin.description.en.split(". ")[0])}</p> */}
          <p className="text-center px-5 mt-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
            quibusdam eaque quas. Accusantium quisquam commodi officiis,
            architecto dolorem quia!
          </p>
        </div>
        <div className="text-left font-extrabold text-3xl flex flex-col gap-4 mt-10 ml-4">
          <p>
            Rank: <span>{singleCoin.coingecko_rank}</span>
          </p>
          <p>
            Current Price:{" "}
            <span>
              {symbol}{" "}
              {numberWithCommas(
                singleCoin.market_data.current_price[
                  currency.toLocaleLowerCase()
                ]
              )}
            </span>
          </p>
          <p>
            Market Cap:{" "}
            <span>
              {symbol}{" "}
              {numberWithCommas(singleCoin.market_cap.toString().slice(0, -6))}M
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
