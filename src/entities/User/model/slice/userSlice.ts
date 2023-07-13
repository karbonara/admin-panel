import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user'
// Начальное состояние
const initialState: UserSchema = {}

// Слайс - это часть хранилища, которая отвечает за одну сущность
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    initAuthData: (state) => {
      const user = localStorage.getItem('user')
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem('user')
    }
  },
})

// Экспортируем actions и reducer
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
