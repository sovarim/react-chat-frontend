import { useState } from 'react';

const useBoolean = (bool: boolean) => {
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
