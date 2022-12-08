import type { ReactNode } from 'react';
import type { PopoverProps } from '@mui/material';

export type DropdownProps = {
  /**
   * Opens/closes the dropdown.
   * Note that if this prop is undefined, the open/close logic will be handled internally
   */
  isOpen?: boolean;
  /**
   * Close event handler
   */
  onClose?: () => void;
  /**
   * Content that will trigger the dropdown to open
   */
  trigger?: ReactNode;
  /**
   * Dropdown content
   */
  children?: ReactNode;
  /**
   * Custom classnames
   */
  classNames?: {
    triggerContainer?: string;
    dropdown?: string;
  };
  /**
   * Dropdown anchor origin. See https://mui.com/api/popover/
   */
  anchorOrigin?: PopoverProps['anchorOrigin'];
  /**
   * Dropdown origin. See https://mui.com/api/popover/
   */
  transformOrigin?: PopoverProps['transformOrigin'];
  /**
   * Disables portal
   */
  shouldDisablePortal?: boolean;
  /**
   * Shows shadow for backdrop
   */
  shouldShowBackdropShadow?: boolean;
};
