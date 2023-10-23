import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GamesData, GamesDataSchema } from '../types/games'
import { fetchGamesData } from '../service/fetchGamesData'

const initialState: GamesDataSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const gamesSlice = createSlice({
  name: 'gamesData',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchGamesData.fulfilled, (state, action: PayloadAction<GamesData>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchGamesData.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})

// Экспортируем actions и reducer
export const { actions: gameActions } = gamesSlice
export const { reducer: gamesReducer } = gamesSlice