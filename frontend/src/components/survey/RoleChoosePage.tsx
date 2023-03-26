import { Dispatch, SetStateAction, useContext, useState } from "react";
import { buttonArrow } from "../../assets/account/account";
import { roles, RoleType } from "../../constants/workForm";
import { SurveyContext } from "../../pages/survey/Survey";

export default function RoleChoosePage({
  setRole,
}: {
  setRole: Dispatch<SetStateAction<RoleType | null>>;
}) {
  const { isSurveyFilled } = useContext(SurveyContext);
  const [chosen, setChosen] = useState<RoleType | null>(null);
  return (
    <>
      <form
        className="flex flex-col flex-1 max-h-[80%] my-auto xl:justify-between gap-8 w-full"
        onSubmit={() => setRole(chosen)}
      >
        <div className="flex flex-col gap-8 self-stretch w-full">
          <h2 className="text-3xl font-bold text-center w-full max-w-[8in] mx-auto">
            Wybierz zawód
          </h2>
          <div className="flex flex-col w-full gap-4 xl:gap-8 sm:grid grid-cols-3">
            {roles
              .filter((role) => !isSurveyFilled[role.name])
              .map((role) => (
                <label
                  className={`py-6 px-12 sm:p-12 w-full text-center flex flex-col cursor-pointer font-semibold gap-8 sm:max-w-[4in] mx-auto relative bg-white rounded-3xl shadow-secondaryBig items-center ${
                    chosen === role.name &&
                    "outline-[2px] outline-[#F98D3D] text-secondary"
                  }`}
                  htmlFor={role.name}
                  key={"label:" + role.name}
                >
                  <input
                    className="-z-50 absolute opacity-0"
                    value={role.name}
                    type="radio"
                    key={role.name}
                    id={role.name}
                    onChange={(e) => e.target.checked && setChosen(role.name)}
                    name="role"
                  />
                  <img
                    className="hidden sm:block max-w-[1.6in] max-h-[1.2in]"
                    src={role.image}
                    alt=""
                  />
                  {role.title}
                </label>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full text-[.8rem] text-white ml-auto self-end font-bold py-4 px-8 bg-secondary flex items-center mt-8 xl:mt-0"
        >
          Rozpocznij ankietę{" "}
          <img className="ml-2 max-h-[.9em]" src={buttonArrow} alt="" />
        </button>
      </form>
    </>
  );
}
