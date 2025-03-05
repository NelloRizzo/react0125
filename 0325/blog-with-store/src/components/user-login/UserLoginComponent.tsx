import { ChangeEvent, FC, useState } from "react";
import { User } from "../../store/users/user-models/UserModels";
import { useApplicationDispatch } from "../../store/store";
import { loginUser } from "../../store/users/thunks/user-thunks";

const UserLogin: FC = () => {
    const [userModel, setUserModel] = useState<User>({ username: '', password: '' })
    const dispatch = useApplicationDispatch()
    const modelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserModel(u => ({ ...u, [e.target.name]: e.target.value }))
    }
    const performLogin = () => {
        console.log("perform login...")
        dispatch(loginUser(userModel))
        setUserModel({ username: '', password: '' })
    }
    return (
        <div className="user-login">
            <label htmlFor="username">Username</label>
            <input name="username" id="username" value={userModel.username} onChange={modelChange} />
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" value={userModel.password} onChange={modelChange} />
            <button disabled={!(userModel.password.length && userModel.username.length)}
                onClick={performLogin}>Login</button>
        </div>
    )
}

export default UserLogin