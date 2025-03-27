import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
    token: string | null;
    user: { id: string } | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}


interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = () => {

    const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
    const [user, setUser] = useState<{ id: string } | null>(null);

    return '';
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};