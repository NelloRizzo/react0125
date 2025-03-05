import { createAsyncThunk } from "@reduxjs/toolkit"
import UserService from "../../../services/user-service"
import { LoginResponse, User } from "../user-models/UserModels"

export const registerUser = createAsyncThunk<void, User>(
    "users/register",
    async (user: User) => {
        const service = new UserService()
        return await service.registerUser(user)
    }
)
export const loginUser = createAsyncThunk<LoginResponse, User>(
    "users/login",
    async (user: User) => {
        const service = new UserService()
        return await service.loginUser(user)
    }
)