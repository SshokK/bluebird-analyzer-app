import type { DropdownProps } from './Dropdown.types';
import type {FC} from 'react';

import React from 'react';
import classnames from 'classnames';
import * as MUI from '@mui/material';
import { useDropdownData, useDropdownHandlers } from './hooks';
import './dropdown.scss';

export const Dropdown: FC<DropdownProps> = ({
  isOpen,
  onClose,
  classNames,
  trigger,
  children,
  anchorOrigin,
  transformOrigin,
  shouldDisablePortal,
  shouldShowBackdropShadow
}) => {
  const { refs, localState, localActions } = useDropdownData();

  const handlers = useDropdownHandlers({
    props: {
      onClose
    },
    localActions
  });

  return (
    <>
      <div
        ref={refs.anchorElementRef}
        onClick={handlers.handleClick}
        className={classnames(classNames?.triggerContainer, 'BB-dropdown__trigger-content-wrapper')}
      >
        {trigger}
      </div>
      <MUI.Popover
        elevation={3}
        classes={{
          paper: classnames(classNames?.dropdown, 'BB-dropdown'),
        }}
        open={isOpen === undefined ? localState.isOpen : isOpen}
        anchorEl={refs.anchorElementRef.current}
        onClose={handlers.handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        disablePortal={shouldDisablePortal}
        slotProps={{
          backdrop: {
            className: classnames('BB-dropdown__backdrop', {
              'BB-dropdown__backdrop--with-shadow': shouldShowBackdropShadow
            })
          }
        }}
      >
        {children}
      </MUI.Popover>
    </>
  );
};

Dropdown.defaultProps = {
  isOpen: undefined,
  onClose: undefined,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  shouldDisablePortal: false
} as DropdownProps;
