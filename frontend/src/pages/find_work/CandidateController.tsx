import { createContext, useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import { defaultQuestions } from "../../constants/findWork";
import { AnswerType, ControllerContextType } from "../../constants/workForm";
import Question from "./Question";

export const CandidateControllerContext = createContext<ControllerContextType>(null!)

export default function CandidateController() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<AnswerType>({
        
    })

    const contextValue = useMemo(() => ({
        activeQuestionIndex,
        setActiveQuestionIndex,
        answers,
        setAnswers,
        questionsLength: defaultQuestions.length
    }), [activeQuestionIndex, setActiveQuestionIndex, answers, setAnswers])

    useEffect(() => {
        console.log(answers)
    }, [answers])

    if(!defaultQuestions[activeQuestionIndex]) return <Loader />

    return (
        <CandidateControllerContext.Provider value={contextValue}>
            <Question {...defaultQuestions[activeQuestionIndex]} />
        </CandidateControllerContext.Provider>
    )
}