import { GrFormNext, GrPrevious } from "react-icons/gr";
type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  length: number;
};
const Paggination = ({ page, setPage, length }: Props) => {
  const noSteps = Math.ceil(length / 10);

  const changePageHandler = (i: number) => {
    setPage(i + 1);
  };
  return (
    <div className="flex justify-center items-center gap-5 mt-10 mb-10">
      <span className=" cursor-pointer">
        <GrPrevious />
      </span>
      {[...Array(noSteps)].map((_, i) => (
        <span
          key={i}
          onClick={() => changePageHandler(i)}
          className=" cursor-pointer h-5 w-5 bg-black/80 text-center rounded-lg text-sm"
        >
          {i + 1}
        </span>
      ))}
      <span className=" cursor-pointer">
        <GrFormNext />
      </span>
    </div>
  );
};
export default Paggination;
