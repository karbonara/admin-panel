import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/counterSchema'

// Начальное состояние счетчика
const initialState: CounterSchema = {
  value: 0
}

// Слайс - это часть хранилища, которая отвечает за одну сущность
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Экспортируем actions и reducer из слайса счетчика для использования в других частях приложения
export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
