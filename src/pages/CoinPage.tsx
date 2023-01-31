import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import CoinInfo from "../components/CoinInfo";
import parse from "html-react-parser";
import { numberWithCommas } from "../utils/priseWithCommas";
import axios from "axios";
import { SingleCoin } from "../config/configs";
import Loading from "../components/Loading";

const CoinPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.crypto.currency);
  const symbol = useAppSelector((state) => state.crypto.symbol);
  const [load, setLoad] = useState(true);

  const [singleCoin, setSingleCoin] = useState<any>();

  const fetchSingleCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id!));
      setSingleCoin(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchSingleCoin();
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="mt-10 lg:border-r-2 lg:border-[gray] md:p-5 mr-20 lg:w-[30%]">
        <div className="flex flex-col justify-center items-center">
          <img
            src={singleCoin.image.large}
            alt={singleCoin.name}
            className=" h-64 mb-14"
          />
          <h2 className="text-6xl font-semibold">{singleCoin.name}</h2>
          <p className="min-w-full lg:max-w-lg mt-3 ml-6 tracking-wide p-2">
            {parse(singleCoin.description.en.split(".")[0])}
          </p>
        </div>
        <div className="text-left items-start font-extrabold text-3xl flex flex-col gap-4 mt-10 ml-4">
          <p>
            Rank:{" "}
            <span className=" font-extralight">
              {singleCoin.coingecko_rank}
            </span>
          </p>
          <p>
            Current Price:{" "}
            <span className=" font-extralight">
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
            <span className="font-extralight">
              {symbol}{" "}
              {numberWithCommas(
                singleCoin.market_data.market_cap[currency.toLocaleLowerCase()]
              )
                .toString()
                .slice(0, 6)}
              M{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-20 lg:mt-0 flex-1 lg:pt-[15rem] lg:-ml-10">
        <CoinInfo />
      </div>
    </div>
  );
};
export default CoinPage;
