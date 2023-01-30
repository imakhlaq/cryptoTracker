import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Chart, PointElement } from "chart.js/auto";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.crypto.currency);
  const { prices } = useAppSelector((state) => state.crypto.history);
  const loading = useAppSelector((state) => state.crypto.loading);
  const [days, setDays] = useState<number>(365);

  useEffect(() => {
    dispatch(fetchCoinHistory({ id, currency, days }));
  }, [currency, days]);

  if (loading) {
    return <p>Loading</p>;
  }
  Chart.register(PointElement);
  const labels = prices.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12} : ${date.getMinutes()}`
        : `${date.getHours()}:${date.getMinutes()}`;

    return days === 1 ? time : date;
  });

  const chartjsData = prices.map((coin) => coin[1]);

  console.log(chartjsData);

  return (
    <Line
      data={{
        labels: labels,
        datasets: [{ data: chartjsData, label: "History" }],
      }}
    />
  );
};
export default CoinInfo;
