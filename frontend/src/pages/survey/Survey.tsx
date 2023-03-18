import { Link } from "react-router-dom";
import RoleController from "./RoleController";
import CandidateController from "./CandidateController";
import { createContext, useMemo, useState } from "react";
import { surveyMan, triangle } from "../../assets/survey/survey";
import {
  CandidateAnswerType,
  initialFilledState,
  IsFilled,
  RoleAnswerType,
  SurveyContextType,
} from "../../constants/workForm";
import { defaultQuestions } from "../../constants/findWork";

export const SurveyContext = createContext<SurveyContextType>(null!);

export default function Survey() {
  const [step, setStep] = useState<"role" | "candidate">("candidate");
  const [isSurveyFilled, setIsSurveyFilled] =
    useState<IsFilled>(initialFilledState);
  const [roleAnswers, setRoleAnswers] = useState<RoleAnswerType[]>([]);
  const [candidateAnswers, setCandidateAnswers] = useState<CandidateAnswerType>(
    defaultQuestions.reduce((acc, { name, type, customInputs }) => {
      if (name === "preferred_professions") return { ...acc, [name]: [] };
      if (type === "custom") {
        let newObj = customInputs?.reduce(
          (acc, { name }) => ({ ...acc, [name]: "" }),
          {}
        );
        return { ...acc, ...newObj };
      }
      return { ...acc, [name]: "" };
    }, {} as CandidateAnswerType)
  );

  const contextValue = useMemo<SurveyContextType>(
    () => ({
      step,
      setStep,
      roleAnswers,
      setRoleAnswers,
      candidateAnswers,
      setCandidateAnswers,
      isSurveyFilled,
      setIsSurveyFilled,
    }),
    [
      step,
      setStep,
      roleAnswers,
      setRoleAnswers,
      candidateAnswers,
      setCandidateAnswers,
      isSurveyFilled,
      setIsSurveyFilled,
    ]
  );

  return (
    <section className="padding flex flex-col gap-12 justify-center pt-[.6in] pb-[1.4in] min-h-screen relative xl:grid grid-cols-[2fr_1fr]">
      <Link className="absolute left-[8vw] sm:left-16 top-8" to="/praca">
        Powrót
      </Link>
      <div className="flex flex-col items-center gap-6 w-full mt-16 sm:mt-0">
        <SurveyContext.Provider value={contextValue}>
          {step === "role" && <RoleController />}
          {step === "candidate" && <CandidateController />}
        </SurveyContext.Provider>
      </div>
      <div className="hidden xl:flex flex-col self-center justify-self-end justify-center items-center relative xl:absolute xl:w-[30vw] right-0 top-0 bottom-0 bg-secondary">
        <img className="max-w-[90%]" src={surveyMan} alt="" />
        <q></q>
      </div>
    </section>
  );
}
