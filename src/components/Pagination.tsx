type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  length: number;
};
const Paggination = ({ page, setPage, length }: Props) => {
  return <div>Paggination</div>;
};
export default Paggination;
