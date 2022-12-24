/* eslint-disable @typescript-eslint/no-shadow */
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/service";

export type User = Record<"token" | "name" | "device", string>;

type AuthContextType = {
  auth?: User;
  signIn: (password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem("@auth");
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _auth: User = JSON.parse(authDataSerialized);
        setAuth(_auth);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  const signIn = async (password: string) => {
    try {
      const auth = await authService.signIn(password);
      setAuth(auth);
      AsyncStorage.setItem("@auth", JSON.stringify(auth));
    } catch (error) {
      Alert.alert("Erro", "wrong email or password");
    }
  };

  const signOut = async () => {
    setAuth(undefined);
    await AsyncStorage.removeItem("@auth");
  };

  return (
    <AuthContext.Provider value={{ auth, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
