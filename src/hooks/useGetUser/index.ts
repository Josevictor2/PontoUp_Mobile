import { useContext } from 'react';

import { GetUserContext } from '../../contexts/ContextGetUser';

export function useGetUser() {
  const value = useContext(GetUserContext);
  return value;
}
