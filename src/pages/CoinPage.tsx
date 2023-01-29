import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCoin } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";

const CoinPage = () => {
  const { id } = useParams();

  const singleCoin = useAppSelector((state) => state.crypto.singleCoin);
  const dispatch = useAppDispatch();

  console.log(singleCoin);

  useEffect(() => {
    dispatch(fetchSingleCoin(id!));
  }, []);

  return <div>CoinPage</div>;
};
export default CoinPage;
