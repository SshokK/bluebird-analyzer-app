import type { ReactNode } from 'react';
import type { TOOLTIP_POSITION, TOOLTIP_TYPES } from './Tooltip.constants';

export type TooltipProps = {
  id?: string;
  type?: TOOLTIP_TYPES;
  title?: ReactNode;
  children?: ReactNode;
  placement?: TOOLTIP_POSITION;
  shouldShowArrow?: boolean;
  classNames?: {
    tooltip?: string;
    elementWrapper?: string;
  };
};
