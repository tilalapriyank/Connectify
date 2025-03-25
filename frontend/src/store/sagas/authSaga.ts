import { call, put, takeLatest } from "redux-saga/effects";
import { registerUserAPI } from "../../api/authApi";
import { REGISTER_REQUEST, RegisterRequestAction } from "../../types/authTypes";
import { registerSuccess, registerFailure } from "../actions/authActions";
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

// Watcher Saga
export default function* authSaga() {
    yield takeLatest(REGISTER_REQUEST, registerUserSaga);
}
