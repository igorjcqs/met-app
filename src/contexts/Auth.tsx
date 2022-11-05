import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
  isSigned: boolean;
  token: string | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      setLoading(true);
      const storagedToken = await AsyncStorage.getItem("@user_token");

      setToken(storagedToken);
      api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isSigned: !!token, token, setToken, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
