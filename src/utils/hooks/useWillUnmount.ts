import { useEffect } from 'react';

export const useWillUnmount = (callback: () => void | undefined): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callback, []);
};
