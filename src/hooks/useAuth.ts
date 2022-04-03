import { useMemo } from 'react';
import { useAppSelector } from 'store';

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);
  return useMemo(() => auth, [auth]);
};

export default useAuth;
