import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.crypto.currency);
  const data = useAppSelector((state) => state.crypto.history);
  const [days, setDays] = useState<number>(365);

  useEffect(() => {
    dispatch(fetchCoinHistory({ id, currency, days }));
  }, [currency, days]);
  return <div>Sidebar</div>;
};
export default CoinInfo;
