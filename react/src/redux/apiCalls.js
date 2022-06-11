import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        console.log(user)
        const res = await axios.post("http://localhost:4000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};