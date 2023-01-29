import { useState } from "react";

const CoinTable = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  console.log(search);

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
    </section>
  );
};
export default CoinTable;
