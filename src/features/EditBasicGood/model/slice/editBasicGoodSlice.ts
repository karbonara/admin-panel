import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EditBasic, EditBasicGoodSchema } from '../types/editBasicGood'
import { fetchEditBasicGoodData } from '../service/fetchEditBasicGoodData/fetchEditBasicGoodData'

const initialState: EditBasicGoodSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const editBasicSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEditBasicGoodData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchEditBasicGoodData.fulfilled, (state, action: PayloadAction<EditBasic>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchEditBasicGoodData.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})

// Экспортируем actions и reducer
export const { actions: editBasicActions } = editBasicSlice
export const { reducer: editBasicReducer } = editBasicSlice