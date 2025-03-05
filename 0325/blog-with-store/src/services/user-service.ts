import { LoginResponse, User } from "../store/users/user-models/UserModels";
import axios_instance, { USER_LOGIN, USER_REGISTER } from "./http-config";

export interface UserService {
    registerUser(user: User): Promise<void>
    loginUser(user: User): Promise<LoginResponse>
}

export default class UserServiceImpl implements UserService {
    async registerUser(user: User): Promise<void> {
        await axios_instance.post(USER_REGISTER, user)
        return Promise.resolve()
    }

    async loginUser(user: User): Promise<LoginResponse> {
        var resp = await axios_instance.post(USER_LOGIN, user)
        console.log(resp.data)
        return resp.data
    }

}