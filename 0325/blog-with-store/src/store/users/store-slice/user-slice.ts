import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../thunks/user-thunks";
import { LoginResponse } from "../user-models/UserModels";

interface UserState {
    username: string
    isLogged: boolean
    token: string | undefined
}

const initialState: UserState = {
    username: 'anonymous',
    isLogged: false,
    token: undefined
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state) => { state.isLogged = false, state.token = undefined })
            .addCase(registerUser.rejected, (state) => { state.isLogged = false, state.token = undefined })
            .addCase(loginUser.fulfilled, (state, a: PayloadAction<LoginResponse>) => { state.token = a.payload.token })
    }
})

export default userSlice.reducer