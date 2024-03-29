import { Dispatch, SetStateAction } from "react"
import { customerService, officeAdministration, selling } from "../assets/survey/survey"
import { QuestionProps } from "./findWork"

export const textInputStyles = 'px-8 py-4 text-[.8rem] sm:text-sm bg-white shadow-[0px_2px_43px_-2px_rgba(215,105,23,0.08)] rounded-2xl w-full font-semibold placeholder:font-medium placeholder:text-[#D3C5BB] min-w-0'

export type RangeNumberKey = {
    number: number,
    text: string,
}

export const rangeNumberKeys: RangeNumberKey[] = [
    {
        number: 1,
        text: 'Zdecydowanie nie'
    },
    {
        number: 2,
        text: 'Raczej nie'
    },
    {
        number: 3,
        text: 'Nie mam zdania'
    },
    {
        number: 4,
        text: 'Raczej tak'
    },
    {
        number: 5,
        text: 'Zdecydowanie tak'
    },
]

export type RoleType = 'office_administration' | 'sales' | 'customer_service'

export interface RoleProps {
    name: RoleType,
    title: string,
    genitive: string,
    image: string,
}

export const roles: RoleProps[] = [
    {
        name: 'office_administration',
        title: 'Administracja biurowa',
        genitive: 'administracji biurowej',
        image: officeAdministration,
    },
    {
        name: 'customer_service',
        title: 'Obsługa klienta',
        genitive: 'obsługi klienta',
        image: customerService,
    },
    {
        name: 'sales',
        title: 'Sprzedaż',
        genitive: 'sprzedaży',
        image: selling,
    },
]

export type CandidateAnswerType = {
    [K in QuestionProps['name']]: string | string[]
}

export type RoleAnswerType = [number, number]

export type SurveyContextType = {
    step: 'role' | 'candidate',
    setStep: Dispatch<SetStateAction<'role' | 'candidate'>>,
    role: RoleType | null,
    setRole: Dispatch<SetStateAction<RoleType | null>>,
    candidateAnswers: CandidateAnswerType,
    setCandidateAnswers: Dispatch<SetStateAction<CandidateAnswerType>>,
    roleAnswers: RoleAnswerType[],
    setRoleAnswers: Dispatch<SetStateAction<RoleAnswerType[]>>,
    filledSurveys: RoleType[],
    setFilledSurveys: Dispatch<SetStateAction<RoleType[]>>,
    activeQuestionIndex: number,
    setActiveQuestionIndex: Dispatch<SetStateAction<number>>,
    isIntroduced: boolean,
    setIsIntroduced: Dispatch<SetStateAction<boolean>>,
}

export type ControllerContextType = {
    activeQuestionIndex: number,
    setActiveQuestionIndex: Dispatch<SetStateAction<number>>,
    questionsLength: number
}

export type SurveyScreenProps = { 
    setIsHeaderVisible: Dispatch<SetStateAction<boolean>>
}

export type LoaderFactProps = {
    ability: string,
    desc: string | JSX.Element
}