import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCoins } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { numberWithCommas } from "../utils/priseWithCommas";
import Pagination from "./Pagination";

const CoinTable = () => {
  const [search, setSearch] = useState("");
  const allCoins = useAppSelector((state) => state.crypto.allCoins);
  const currency = useAppSelector((state) => state.crypto.currency);
  const symbol = useAppSelector((state) => state.crypto.symbol);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCoins(currency));
  }, []);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  //interesting (it will filter the array according to search and if their is no search then retun full array) becasue search initial state is a empty string and each coin name is sting so thats how it works
  const searchFilter = () => {
    return allCoins.filter(
      (coin) =>
        coin.name.toLocaleLowerCase().includes(search) ||
        coin.symbol.toLocaleLowerCase().includes(search)
    );
  };

  return (
    <>
      <section className="mt-10">
        <div className="flex flex-wrap justify-center items-center mx-3 space-y-7 flex-col">
          <h2 className=" text-3xl text-center">
            Cryptocurrency Prices by Market Cap
          </h2>
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Search For a Crypto Currency"
            className="w-full bg-[#14161a] px-3 py-4 rounded-md focus:outline-none text-white placeholder:text-[#494949] placeholder:text-xl placeholder:font-thin border border-[#494949] md:max-w-lg"
          />
        </div>
        <div className="mt-10 flex flex-col">
          <div className="grid grid-cols-4 gap-4 bg-[#b19704] text-lg py-4 text-black font-bold mb-8 place-items-center">
            <p>Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p>Market Cap</p>
          </div>
          <div className="flex flex-col gap-6">
            {/* //interesting 1st is for filter 2nd is for pagination third to display */}
            {searchFilter()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((coin) => {
                let profit = coin.price_change_24h >= 0;
                return (
                  <div
                    onClick={() => navigator(`/coins/${coin.id}`)}
                    className="grid grid-cols-4 gap-4 place-items-center cursor-pointer shadow-xl md:h-20 hover:bg-black/80 py-3 rounded-lg"
                  >
                    <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-2 md:justify-start">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="h-10 w-10"
                      />
                      <div className="flex justify-center items-center flex-col md:flex-row md:gap-3">
                        <p className="uppercase text-2xl">{coin.symbol}</p>
                        <p className="text-center text-xs">{coin.name}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg">
                        {numberWithCommas(coin.current_price + "")}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-sm md:text-lg ${
                          profit ? "text-green-500" : "text-red-600"
                        }`}
                      >
                        {profit ? "+" : ""}{" "}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm md:text-lg">
                        {symbol}{" "}
                        {numberWithCommas(
                          coin.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <Pagination page={page} setPage={setPage} length={allCoins.length} />
      </div>
    </>
  );
};
export default CoinTable;
