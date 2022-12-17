import type {ButtonProps} from "./Button.types";
import type {FC} from 'react';

import React from 'react';
import * as MUI from '@mui/material';
import classnames from 'classnames';
import './button.scss';

export const Button: FC<ButtonProps> = ({
  type,
  onClick,
  children,
  isDisabled,
  formRole,
  classNames
}) => {
  return (
    <MUI.Button
      type={formRole}
      variant="contained"
      onClick={onClick}
      disabled={isDisabled}
      onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
      classes={{
        root: classnames("BB-button", classNames?.button),
        startIcon: classnames("BB-button__start-icon", classNames?.startIcon),
        endIcon: classnames("BB-button__end-icon", classNames?.endIcon),
      }}
    >
      <span className="BB-button__content">
        {children}
      </span>
    </MUI.Button>
  )
}