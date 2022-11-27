import {useEffect, useRef} from "react";

export const usePreviousValue = <T>(value: T): T => {
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};
