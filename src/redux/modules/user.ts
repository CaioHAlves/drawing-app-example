import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  name: string,
  email: string,
  token: string
  type: string
}

const initialState: IUser = {
  token: '',
  email: '',
  name: '',
  type: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<IUser>) => action.payload
  }
})

export const {
  setUser
} = userSlice.actions

export default userSlice.reducer