import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale } from "chart.js";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.crypto.currency);
  const data = useAppSelector((state) => state.crypto.history);
  const loading = useAppSelector((state) => state.crypto.loading);
  const [days, setDays] = useState<number>(365);

  useEffect(() => {
    dispatch(fetchCoinHistory({ id, currency, days }));
  }, [currency, days]);

  Chart.register(CategoryScale, LinearScale);

  if (loading) {
    return <p>Loading</p>;
  }
  return <div></div>;
};
export default CoinInfo;
