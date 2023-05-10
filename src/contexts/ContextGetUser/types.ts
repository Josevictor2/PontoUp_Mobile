import { ReactNode } from 'react';

export type TypeGetUser = Record<
  'matricula' | 'name' | 'cargo' | 'email',
  string
>;

export type GetPointId = Record<'pointId', string>;
export type GetTypeTime = Record<
  'typeTime' | 'entry' | 'interval' | 'backbreak' | 'leavingwork',
  string
>;

export type GetUserContextType = {
  getuser: TypeGetUser | undefined;
  setGetUser: (getUser: TypeGetUser) => void;
  getPointId: GetPointId | undefined;
  setGetPointId: (getPointIdAndTime: GetPointId) => void;
  getTypeTime: GetTypeTime | undefined;
  setGetTypeTime: (getTypeTime: GetTypeTime) => void;
};

export type GetUserContextProviderProps = {
  children: ReactNode;
};
