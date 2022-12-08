import type {DropdownData} from "./useDropdownData.types";

import {useMemo, useRef, useState} from 'react';

export const useDropdownData = (): DropdownData => {
  const anchorElementRef = useRef<HTMLDivElement | null>(null);

  const refs: DropdownData['refs'] = {
    anchorElementRef
  }

  const [isOpen, setOpenState] = useState<DropdownData['localState']['isOpen']>(false);

  const localState: DropdownData['localState'] = {
    isOpen
  }

  const localActions: DropdownData['localActions'] = useMemo(() => ({
    setOpenState
  }), [])

  return {
    refs,
    localState,
    localActions
  };
};
