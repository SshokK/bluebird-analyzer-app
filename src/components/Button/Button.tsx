import type {ButtonProps} from "./Button.types";
import type {FC} from 'react';

import React from 'react';
import { Button as MUIButton } from '@mui/material';
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
    <MUIButton
      type={formRole}
      variant="contained"
      onClick={onClick}
      disabled={isDisabled}
      classes={{
        root: classnames("BB-button"),
        startIcon: classnames("BB-button__start-icon"),
        endIcon: classnames("BB-button__end-icon"),
      }}
    >
      {children}
    </MUIButton>
  )
}