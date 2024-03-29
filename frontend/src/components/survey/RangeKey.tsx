import { Dispatch, SetStateAction } from "react";
import { RangeNumberKey } from "../../constants/workForm";

export default function RangeKey({
  number,
  text,
  numericalAnswer,
  setNumericalAnswer,
}: RangeNumberKey & {
  numericalAnswer: number | null;
  setNumericalAnswer: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <button
      type="button"
      onClick={() => setNumericalAnswer(number)}
      className="flex sm:flex-col items-center gap-4"
    >
      <div
        className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 transition-colors flex items-center justify-center shadow-[0px_7px_37px_-2px_rgba(215,105,23,0.13)] ${
          number === numericalAnswer
            ? "bg-[#F9AE3D] text-white"
            : "bg-white text-font"
        }`}
      >
        <span className="sm:text-xl font-semibold">{number}</span>
      </div>
      <div className="flex flex-col items-start sm:items-center sm:text-center">
        <h5 className="font-medium text-sm">{number} oznacza</h5>
        <h4 className="font-bold text-sm">“{text}”</h4>
      </div>
    </button>
  );
}
