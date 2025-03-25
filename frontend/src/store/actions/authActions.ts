import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, RegisterData, RegisterRequestAction, RegisterSuccessAction, RegisterFailureAction } from "../../types/authTypes";

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
