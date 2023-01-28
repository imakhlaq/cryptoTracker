import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();

  return (
    <header className="px-10 py-4 flex justify-between md:justify-around shadow-xl">
      <h1
        onClick={() => navigator("/")}
        className="text-[yellow] font-bold text-lg md:text-2xl cursor-pointer"
      >
        Crypto Tracker
      </h1>
      <select
        name="currency"
        className="rounded text-white font-semibold focus:outline-none bg-[#14161a] flex justify-center items-center p-2 border-2 border-black"
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>
    </header>
  );
};
export default Header;
