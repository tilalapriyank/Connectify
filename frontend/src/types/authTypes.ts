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
    user: RegisterData | null;
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

export type AuthActionTypes = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction;
