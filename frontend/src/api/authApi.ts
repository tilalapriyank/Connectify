import { RegisterData } from "../types/authTypes";
import ENDPOINTS from "./config";

export const registerUserAPI = async (userData: RegisterData) => {
    const response = await fetch(`${ENDPOINTS.REGISTER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error("Failed to register user");
    }

    return response.json();
};
