import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeCurrency } from "../store/cryptoSlice/cryptoSlice";
import AuthModal from "./authentication/AuthModal";

const Header = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const currency = useAppSelector((state) => state.crypto.currency);

  return (
    <header className="px-10 py-4 flex justify-between md:justify-around shadow-xl items-center">
      <h1
        onClick={() => navigator("/")}
        className="text-[yellow] font-bold text-lg md:text-2xl cursor-pointer"
      >
        Crypto Tracker
      </h1>
      <div className="flex  justify-center  items-center gap-5">
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(changeCurrency(event.target.value))
          }
          name="currency"
          className="rounded text-white font-semibold focus:outline-none bg-[#14161a] flex justify-center items-center p-2 border-2 border-black"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
        <AuthModal />
      </div>
    </header>
  );
};
export default Header;
