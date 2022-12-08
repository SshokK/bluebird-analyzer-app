import type { ReactNode } from 'react';
import type { TOOLTIP_POSITION, TOOLTIP_TYPES } from './Tooltip.constants';

export type TooltipProps = {
  id?: string;
  type?: TOOLTIP_TYPES;
  title?: ReactNode;
  children?: ReactNode;
  placement?: TOOLTIP_POSITION;
  isDisabled?: boolean;
  leaveDelay?: number;
  isOpen?: boolean;
  shouldShowArrow?: boolean;
  shouldShowCloseButton?: boolean;
  shouldDisablePortal?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onCloseButtonClick?: () => void;
  anchorEl?: HTMLElement | null;
  classNames?: {
    tooltip?: string;
    elementWrapper?: string;
  };
};
