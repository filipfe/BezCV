import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
    logged: boolean,
    isLoading: boolean,
    data: {
        id: number,
        is_staff: boolean,
        first_name: string,
        last_name: string,
        email: string,
        phone: string,
        desc: string,
        image: string,
        nip: string,
        company_name: string,
        points: number,
        abilities: string[]
        form: string[]
    },
    tokens: {
        access: string,
        refresh: string
    }
}

const initialState: LoginState = {
    logged: false,
    isLoading: true,
    data: {
        id: -1,
        is_staff: false,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        desc: '',
        image: '',
        nip: '',
        company_name: '',
        points: 0,
        abilities: [],
        form: ['', '', '']
    },
    tokens: {
        access: '',
        refresh: ''
    }
} 

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.logged = true
            state.data = action.payload.data
            state.tokens = action.payload.tokens
            state.isLoading = false
        },
        logout: state => {
            localStorage.removeItem('user')
            state.logged = false
            state.data = {
                ...initialState.data
            }
            state.tokens = {
                ...initialState.tokens
            }
            state.isLoading = false
        },
        addPoints: (state, action) => {
            state.data.points = state.data.points + action.payload
        },
        purchase: (state, action) => {
            state.data.points = state.data.points - (action.payload || 1)
        }
    }
})

export const { login, logout, purchase, addPoints } = loginSlice.actions

export default loginSlice.reducer