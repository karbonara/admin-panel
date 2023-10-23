import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEditBasicGoodData = createAsyncThunk(
  'data/dataGoods',
  async ({ }, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/games`,)

      if (!response.data) {
        throw new Error('No data')
      }

      return response.data

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
) 
