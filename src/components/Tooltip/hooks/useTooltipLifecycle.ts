import type { TooltipHandlers } from './useTooltipHandlers.types';

import { useEffect } from 'react';

export const useTooltipLifecycle = ({
  onOpenStateChange
}: {
  onOpenStateChange: TooltipHandlers['handleOpenStateChange'];
}) => {
  useEffect(onOpenStateChange, [onOpenStateChange]);
};
