import { ChangeEvent } from "react";
import {
  initialColorScheme,
  professionColorMap,
} from "../../constants/professionColorMap";
import { RoleType } from "../../constants/workForm";
import { Industry } from "../../types/candidate";
import CheckMarkIcon from "../../assets/survey/icons/CheckMarkIcon";

type Props = {
  industry: Industry;
  profession?: RoleType;
  isChecked?: boolean;
  size?: "small" | "big";
  handleChange?: (industry: Industry) => void;
};

export default function Badge({
  industry,
  profession,
  isChecked,
  size = "big",
  handleChange,
}: Props) {
  const { id, name } = industry;
  const { color, light, gradient } = profession
    ? professionColorMap[profession]
    : initialColorScheme;

  return handleChange ? (
    <label
      style={{
        backgroundColor: isChecked ? light : "#FFF",
        borderColor: isChecked ? color : "#ECECEC",
      }}
      className={`border-[1px] cursor-pointer transition-colors rounded-full flex items-center gap-2 py-2.5 px-6`}
      htmlFor={name + id}
    >
      {isChecked && <CheckMarkIcon color={color} />}
      <span
        style={{ color: isChecked ? color : "#141B30" }}
        className="bg-clip-text text-transparent font-semibold text-[.75rem] transition-colors"
      >
        {name}
      </span>
      <input
        className="absolute -z-50 opacity-0"
        type="checkbox"
        id={name + id}
        checked={isChecked}
        onChange={() => handleChange(industry)}
        name="tasks"
      />
    </label>
  ) : (
    <div
      style={{ backgroundColor: light, borderColor: light }}
      className={`border-[2px] rounded-full ${
        size === "big" ? "py-2.5 px-6" : "py-1 px-4"
      }`}
    >
      <span
        style={{ backgroundImage: gradient }}
        className="bg-clip-text text-transparent font-semibold text-[.75rem] select-none"
      >
        {name}
      </span>
    </div>
  );
}