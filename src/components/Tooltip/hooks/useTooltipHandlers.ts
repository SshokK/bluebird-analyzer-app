import type { TooltipProps } from '../Tooltip.types';
import type { TooltipData } from './useTooltipData.types';
import type { TooltipHandlers } from './useTooltipHandlers.types';

import { useCallback } from 'react';

export const useTooltipHandlers = ({
  props,
  localActions
}: {
  props: Pick<TooltipProps, 'title' | 'isDisabled' | 'onClose' | 'onOpen' | 'isOpen'>;
  localActions: TooltipData['localActions'];
}): TooltipHandlers => {
  const handleTooltipOpen: TooltipHandlers['handleTooltipOpen'] = () => {
    if (!props.isDisabled && props.title) {
      localActions.setIsOpen(props.isOpen ?? true);
      props.onOpen?.();
    }
  };

  const handleTooltipClose: TooltipHandlers['handleTooltipClose'] = () => {
    if (!props.isDisabled && props.title) {
      localActions.setIsOpen(props.isOpen ?? false);
      props.onClose?.();
    }
  };

  const handleOpenStateChange: TooltipHandlers['handleOpenStateChange'] = useCallback(() => {
    localActions.setIsOpen(Boolean(!props.isDisabled && props.title && props.isOpen));
  }, [localActions, props.isDisabled, props.isOpen, props.title]);

  return {
    handleTooltipOpen,
    handleTooltipClose,
    handleOpenStateChange
  };
};
