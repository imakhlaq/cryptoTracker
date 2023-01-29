import { GrFormNext, GrPrevious } from "react-icons/gr";
type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  length: number;
};
const Paggination = ({ page, setPage, length }: Props) => {
  const noSteps = Math.ceil(length / 10);
  return (
    <div className="flex justify-center items-center gap-5 mt-10 mb-10">
      <span>
        <GrPrevious />
      </span>
      {[...new Array(noSteps)].map((_, i) => (
        <span>{i + 1}</span>
      ))}
      <span>
        <GrFormNext />
      </span>
    </div>
  );
};
export default Paggination;
