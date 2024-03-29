import { Link } from "react-router-dom";
import {
  CashIcon,
  PhoneIcon,
  ProfessionIcon,
} from "../../assets/candidate/icons/icons";
import { arrowRight } from "../../assets/general";
import { CandidateProps, roleToTextMap } from "../../constants/candidate";
import {
  initialColorScheme,
  professionColorMap,
  ProfessionColorScheme,
} from "../../constants/professionColorMap";
import HasJob from "./HasJob";
import FollowButton from "../candidate/FollowButton";
import { FollowedCandidateBonusProps } from "../../constants/profile";
import BadgeList from "./BadgeList";

const CandidateRef = ({
  id,
  first_name,
  last_name,
  is_followed,
  industries,
  availability,
  salary_expectation,
  profession,
  education,
  phone,
  location,
  driving_license,
  has_job,
  isFromFollowed = false,
  setFollowed,
}: CandidateProps & FollowedCandidateBonusProps) => {
  const colorScheme: ProfessionColorScheme = initialColorScheme;
  return (
    <Link
      to={"/oferty/" + id}
      className={`transition-colors px-[8vw] py-10 sm:px-8 flex flex-col gap-8 border-b-[1px] border-[#E6E7EA] last-of-type:border-b-0 last-of-type:border-none relative ${
        has_job ? "bg-[#FBF8F4]" : "bg-white"
      }`}
    >
      <div className="flex flex-col sm:items-center sm:flex-row sm:justify-between gap-4 sm:flex-wrap">
        <div className="flex items-center gap-6">
          <div
            className={`h-14 w-14 rounded-full border-[1px] border-[#F9FAFC] flex justify-center items-center ${
              has_job ? "bg-white" : "bg-[#F6F6F6]"
            }`}
          >
            <h4
              style={{
                backgroundImage: profession
                  ? professionColorMap[profession].gradient
                  : "none",
                color: profession ? "transparent" : colorScheme.color,
              }}
              className="font-semibold text-transparent bg-clip-text"
            >
              {first_name.charAt(0) + last_name.charAt(0)}
            </h4>
          </div>
          <div className="flex flex-col gap-1 w-max">
            <h4 className="text-[.8rem]">Kandydat</h4>
            <h3 className="text-sm font-medium">
              {first_name} {last_name}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`h-14 w-14 rounded-full border-[1px] border-[#F9FAFC] flex justify-center items-center ${
              has_job ? "bg-white" : "bg-[#F6F6F6]"
            }`}
          >
            <ProfessionIcon {...colorScheme} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[.8rem]">Szuka pracy w</h4>
            <h3
              style={{
                backgroundImage: profession
                  ? professionColorMap[profession].gradient
                  : "none",
                color: profession ? "transparent" : colorScheme.color,
              }}
              className="text-transparent text-sm bg-clip-text font-semibold"
            >
              {profession
                ? roleToTextMap[profession].profession
                : "Nie wypełnił"}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`h-14 w-14 rounded-full border-[1px] border-[#F9FAFC] flex justify-center items-center ${
              has_job ? "bg-white" : "bg-[#F6F6F6]"
            }`}
          >
            <PhoneIcon {...colorScheme} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm">Numer telefonu</h4>
            <h3 className="font-semibold text-sm">
              +48 {phone?.replace(/(\d{3})(?=\d)/g, "$1 ")}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`h-14 w-14 rounded-full border-[1px] border-[#F9FAFC] flex justify-center items-center ${
              has_job ? "bg-white" : "bg-[#F6F6F6]"
            }`}
          >
            <CashIcon {...colorScheme} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm">Oczekiwania finansowe</h4>
            <h3 className="font-semibold text-sm">{salary_expectation}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:grid grid-cols-[1fr_max-content]">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-x-8 2xl:gap-x-20 gap-y-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-[.8rem]">Dyspozycyjność</h4>
              <h3 className="text-sm font-semibold">{availability}</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[.8rem]">Chce pracować w</h4>
              <h3 className="text-sm font-semibold">
                {location?.postal_code
                  ? `${location.postal_code}${
                      location.town ? ", " + location.town : ""
                    }`
                  : location?.province || "Nie zdefiniowano"}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[.8rem]">Wykształcenie</h4>
              <h3 className="text-sm font-semibold">
                {education?.split("(")[0]}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[.8rem]">Prawo jazdy kat. B</h4>
              <h3 className="text-sm font-semibold">
                {driving_license ? "Tak" : "Nie"}
              </h3>
            </div>
          </div>
          <div>
            {industries && (
              <div className="flex flex-col gap-3 sm:flex-wrap sm:flex-row sm:items-center">
                {industries.length > 0 ? (
                  <BadgeList industries={industries} profession={profession} />
                ) : (
                  <span className="text-sm font-medium">
                    Nie znaleziono branż
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start xl:self-end xl:items-end gap-6 mt-8 xl:mt-0">
          <FollowButton
            setFollowed={setFollowed}
            isFromFollowed={isFromFollowed}
            id={id}
            is_followed={is_followed}
          />
          <button
            className="rounded-full w-max min-w-max text-white text-[.75rem] font-semibold flex items-center py-3 px-10 bg-primary"
            type="button"
          >
            Zobacz profil
            <img className="ml-2 max-h-[1.2em]" src={arrowRight} alt="" />
          </button>
        </div>
      </div>
      {has_job && <HasJob />}
    </Link>
  );
};

export default CandidateRef;
