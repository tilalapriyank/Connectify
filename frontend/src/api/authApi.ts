import { LoginData, RegisterData } from "../types/authTypes";
import ENDPOINTS from "./config";

export const registerUserAPI = async (userData: RegisterData) => {
    const response = await fetch(`${ENDPOINTS.REGISTER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    return response.json();
};

export const loginUserAPI = async (userData: LoginData) => {
    const response = await fetch(`${ENDPOINTS.LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    return response.json();
}