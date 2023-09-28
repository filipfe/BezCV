import { ChangeEvent } from "react";
import {
  initialColorScheme,
  professionColorMap,
} from "../../constants/professionColorMap";
import { RoleType } from "../../constants/workForm";
import { Industry } from "../../types/candidate";

type Props = {
  industry: Industry;
  profession?: RoleType;
  isChecked?: boolean;
  size?: "small" | "big";
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Badge({
  industry,
  profession,
  isChecked,
  size = "big",
  handleChange,
}: Props) {
  const { id, title } = industry;
  const { color, light, gradient } = profession
    ? professionColorMap[profession]
    : initialColorScheme;

  return handleChange ? (
    <div className="relative">
      <label
        style={{ backgroundColor: light, borderColor: color }}
        className={`border-[1px] rounded-full ${
          size === "big" ? "py-2.5 px-6" : "py-1 px-4"
        }`}
        htmlFor={title + id}
      >
        <span
          style={{ backgroundImage: gradient }}
          className="bg-clip-text text-transparent font-semibold text-[.75rem]"
        >
          {title}
        </span>
      </label>
      <input
        className="absolute -z-50 opacity-0"
        type="checkbox"
        id={title + id}
        checked={isChecked}
        onChange={handleChange}
        name="tasks"
      />
    </div>
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
        {title}
      </span>
    </div>
  );
}
