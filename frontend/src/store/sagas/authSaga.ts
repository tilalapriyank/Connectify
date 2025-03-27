import { call, put, takeLatest } from "redux-saga/effects";
import { loginUserAPI, registerUserAPI } from "../../api/authApi";
import { LOGIN_REQUEST, LoginRequestAction, REGISTER_REQUEST, RegisterRequestAction } from "../../types/authTypes";
import { registerSuccess, registerFailure, loginSuccess, loginFailure } from "../actions/authActions";
import { message } from "antd";

function* registerUserSaga(action: RegisterRequestAction): Generator<any, void, any> {
    try {
        const response = yield call(registerUserAPI, action.payload);
        yield put(registerSuccess(response.user));
        if (response.type == "success") {
            message.success("Registration successful! You can now log in.");
        } else {
            message.error("Registration failed!");
        }
    } catch (error: any) {
        yield put(registerFailure(error.message || "Registration failed"));
    }
}

function* loginUserSaga(action: LoginRequestAction): Generator<any, void, any> {
    try {
        const response = yield call(loginUserAPI, action.payload);
        yield put(loginSuccess(response.user));
        if (response.type == "success") {
            message.success("Login successful!");
            localStorage.setItem("authToken", response.token);   
        } else {
            message.error("Login failed!");
        }
    } catch (error: any) {
        yield put(loginFailure(error.message || "Login failed."))
    }
}

// Watcher Saga
export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, registerUserSaga);
    yield takeLatest(LOGIN_REQUEST, loginUserSaga);
}
