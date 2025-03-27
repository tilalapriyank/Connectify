import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, RegisterData, RegisterRequestAction, RegisterSuccessAction, RegisterFailureAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LoginData, LoginRequestAction, LoginSuccessAction, LoginFailureAction, LoginResponse
} from "../../types/authTypes";

export const registerRequest = (userData: RegisterData): RegisterRequestAction => ({
    type: REGISTER_REQUEST,
    payload: userData,
});

export const registerSuccess = (userData: RegisterData): RegisterSuccessAction => ({
    type: REGISTER_SUCCESS,
    payload: userData,
});

export const registerFailure = (error: string): RegisterFailureAction => ({
    type: REGISTER_FAILURE,
    payload: error,
});

export const loginRequest = (loginData: LoginData): LoginRequestAction => ({
    type: LOGIN_REQUEST,
    payload: loginData,
});

export const loginSuccess = (loginResponse: LoginResponse): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    payload: loginResponse,
});

export const loginFailure = (error: string): LoginFailureAction => ({
    type: LOGIN_FAILURE,
    payload: error,
});