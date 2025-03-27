export interface RegisterData {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    birthdate: string;
    mobileNumber: string;
    timezone: string;
}

export interface AuthState {
    loading: boolean;
    user: RegisterData | null | UserData;
    error: string | null;
}

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export interface RegisterRequestAction {
    type: typeof REGISTER_REQUEST;
    payload: RegisterData;
}

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: RegisterData;
}

export interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE;
    payload: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface UserData {
    userName: string;
    email: string;
    role: string;
    privacy: string;
}

export interface LoginResponse {
    message: string;
    type: string;
    token: string;
    user: UserData;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: LoginData;
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: LoginResponse;
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

export type AuthActionTypes = RegisterRequestAction
    | RegisterSuccessAction
    | RegisterFailureAction
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction;
