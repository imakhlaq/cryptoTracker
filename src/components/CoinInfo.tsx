import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Chart, PointElement } from "chart.js/auto";
import { chartDays } from "../api/data";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.crypto.currency);
  const { prices } = useAppSelector((state) => state.crypto.history);
  const loading = useAppSelector((state) => state.crypto.loading);
  const [days, setDays] = useState<number>(1);

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
        ? `${date.getHours() - 12}:${date.getMinutes()} AM`
        : `${date.getHours()}:${date.getMinutes()} PM`;

    return days === 1 ? time : date;
  });
  const chartjsData = prices.map((coin) => coin[1]);
  return (
    <>
      <Line
        data={{
          labels: labels,
          datasets: [
            { data: chartjsData, label: "History", borderColor: "#EEBC1D" },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div className="flex gap-6 justify-around mt-9">
        {chartDays.map((btn) => (
          <button
            className="py-2 px-4 active:bg-yellow-500 md:px-6 bg-[gray] rounded-md"
            onClick={() => setDays(btn.value)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </>
  );
};
export default CoinInfo;
