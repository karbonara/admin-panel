import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
// Начальное состояние
const initialState: LoginSchema = {
  email: '',
  password: '',
  isLoading: false,
}

// Слайс - это часть хранилища, которая отвечает за одну сущность
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // reducers - это обработчики экшенов, которые создаются с помощью createAction
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    }
  },
  // extraReducers - это обработчики экшенов, которые создаются с помощью createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})

// Экспортируем actions и reducer
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice