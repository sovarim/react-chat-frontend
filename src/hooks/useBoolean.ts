import { useState } from 'react';

interface IReturnData {
  state: boolean;
  toogle: () => void;
  setFalse: () => void;
  setTrue: () => void;
}

type Type = (bool: boolean) => IReturnData;

const useBoolean: Type = (bool) => {
  const [state, setState] = useState<boolean>(bool);

  const setFalse = () => {
    setState(false);
  };
  const setTrue = () => {
    setState(true);
  };
  const toogle = () => {
    setState((prev) => !prev);
  };

  return { state, toogle, setFalse, setTrue };
};

export default useBoolean;
