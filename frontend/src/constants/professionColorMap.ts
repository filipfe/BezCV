import { RoleType } from "./workForm"

type GradientColor = {
    value: string,
    position: number
}

export type ProfessionColorScheme = {
    color: string,
    light: string,
    gradient: string,
    startColor: GradientColor,
    stopColor: GradientColor
}

export const professionColorMap: { [t in RoleType]: ProfessionColorScheme } = {
    sales: {
        color: '#1BDF69',
        light: "#1CE07440",
        gradient: 'linear-gradient(180deg, #1BDF8A 0%, #1BDF69 100%)',
        startColor: {
            value: '#1BDF8A',
            position: 0,

        },
        stopColor: {
            value: '#1BDF69',
            position: 1
        }
    },
    customer_service: {
        color: '#F9AE3D',
        light: "#FAAF3E40",
        gradient: 'linear-gradient(289.36deg, #F98D3D 9.9%, #F9AE3D 62.28%)',
        startColor: {
            value: '#F98D3D',
            position: 0.099,
            
        },
        stopColor: {
            value: '#F9AE3D',
            position: 0.6228
        }
    },
    office_administration: {
        color: '#2F66F4',
        light: "#3067F540",
        gradient: 'linear-gradient(90.04deg, #2F66F4 24.53%, #0D9AE9 82.58%)',
        startColor: {
            value: '#2F66F4',
            position: 0.2453,
            
        },
        stopColor: {
            value: '#0D9AE9',
            position: 0.8258
        }
    }
}

export const initialColorScheme: ProfessionColorScheme = {
    gradient: "#141B30",
    light: "#141B30",
    color: "#141B3040",
    stopColor: {
        value: "#141B30",
        position: 1
    },
    startColor: {
        value: "#141B30",
        position: 0
    },
  };