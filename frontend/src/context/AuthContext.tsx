import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { loginRequest } from "../store/actions/authActions";

interface DecodedToken {
    id: string;
}

interface AuthContextType {
    token: string | null;
    user: { id: string } | null;
    login: (values: { email: string; password: string }) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
    const [user, setUser] = useState<{ id: string } | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode<DecodedToken>(token);
                setUser({ id: decoded.id });
            } catch (error) {
                console.error("Invalid token", error);
                logout();
            }
        }
    }, [token]);

    const login = async ({ email, password }: { email: string; password: string }) => {
        try {
            await dispatch(loginRequest({ email, password }));
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
