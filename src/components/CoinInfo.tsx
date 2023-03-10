import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Chart, PointElement } from "chart.js/auto";
import { chartDays } from "../config/data";
import Loading from "./Loading";

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
    return <Loading />;
  }
  Chart.register(PointElement);
  const labels = prices.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} AM`
        : `${date.getHours()}:${date.getMinutes()} PM`;

    const years = new Intl.DateTimeFormat("en-US").format(date);
    return days === 1 ? time : years;
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
      <div className="flex gap-6 justify-around mt-9 p-8">
        {chartDays.map((btn) => (
          <button
            className={`py-2 px-4 md:px-6 bg-[gray] rounded-md ${
              days == btn.value ? "bg-yellow-500" : "bg-[gray]"
            }`}
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
