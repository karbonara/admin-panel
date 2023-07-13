import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";

interface LoginByUsernameProps {
  email: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ email, password }, thunkAPI) => {
    try {

      const response = await axios.post(`http://localhost:5000/api/login`, { email, password })

      if (!response.data) {
        throw new Error('No data')
      }

      localStorage.setItem('token', JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
) 