import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = Record<'id' | 'name' | 'idDepartment', string>;

type AuthContextType = {
  auth?: User;
  setAuth: (auth: User) => void;
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
      const authDataSerialized = await AsyncStorage.getItem('@auth');
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

  const signOut = async () => {
    setAuth(undefined);
    await AsyncStorage.removeItem('@auth');
  };

  return (
    <AuthContext.Provider value={{ auth, isLoading, setAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
