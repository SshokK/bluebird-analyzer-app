import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useDidUpdate = (callback: EffectCallback, dependencies: DependencyList = []): void => {
  const isInitialMount = useRef<boolean>(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

/**
 * Backwards compatibility
 */
export const useUpdateEffect = useDidUpdate;
