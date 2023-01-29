import { useEffect, useState } from "react";
import { fetchAllCoins } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CoinTable = () => {
  const [search, setSearch] = useState("");
  const allCoins = useAppSelector((state) => state.crypto.allCoins);
  const currency = useAppSelector((state) => state.crypto.currency);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCoins(currency));
  }, []);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
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
        <div className="flex justify-around bg-[#b19704] text-lg py-4 text-black font-bold mb-8">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>
        <div>
          {allCoins.map((coin) => {
            return (
              <div>
                <div className="flex flex-col items-start gap-3">
                  <img src={coin.image} alt={coin.name} className="h-16" />
                  <p>{coin.symbol}</p>
                  <p>{coin.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CoinTable;
