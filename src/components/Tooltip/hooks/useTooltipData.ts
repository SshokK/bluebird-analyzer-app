import type { TooltipData } from './useTooltipData.types';
import type { TooltipProps } from '../Tooltip.types';

import { useMemo, useState } from 'react';

export const useTooltipData = (
  props: Pick<TooltipProps, 'isOpen' | 'isDisabled' | 'title'>
): TooltipData => {
  const [isOpen, setIsOpen] = useState(
    props.isDisabled || !props.title ? false : props.isOpen ?? false
  );

  const localState = {
    isOpen
  };

  const localActions = useMemo(
    () => ({
      setIsOpen
    }),
    []
  );

  return {
    localState,
    localActions
  };
};
