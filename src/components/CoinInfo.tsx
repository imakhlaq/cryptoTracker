import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../store/cryptoSlice/cryptoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Sidebar = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const currency = useAppSelector((state) => state.crypto.currency);

  useEffect(() => {
    dispatch(fetchCoinHistory({ id, currency, days: 365 }));
  }, []);
  return <div>Sidebar</div>;
};
export default Sidebar;
