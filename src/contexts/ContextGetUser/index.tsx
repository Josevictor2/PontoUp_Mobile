import { createContext, useState } from 'react';

import {
  TypeGetUser,
  GetUserContextProviderProps,
  GetUserContextType,
  GetPointId,
  GetTypeTime,
} from './types';

export const GetUserContext = createContext({} as GetUserContextType);

export function GetUserContextProvider(props: GetUserContextProviderProps) {
  const [getuser, setGetUser] = useState<TypeGetUser>();
  const [getPointId, setGetPointId] = useState<GetPointId>();
  const [getTypeTime, setGetTypeTime] = useState<GetTypeTime>();

  return (
    <GetUserContext.Provider
      value={{
        getuser,
        setGetUser,
        getPointId,
        setGetPointId,
        getTypeTime,
        setGetTypeTime,
      }}
    >
      {props.children}
    </GetUserContext.Provider>
  );
}
