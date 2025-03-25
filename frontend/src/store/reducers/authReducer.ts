import { AuthState, AuthActionTypes, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../../types/authTypes";

const initialState: AuthState = {
    loading: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
