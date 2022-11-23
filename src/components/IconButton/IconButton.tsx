import type {FC} from "react";
import type {IconButtonProps} from "./IconButton.types";

import React from 'react';
import { Button as MUIButton } from '@mui/material';
import classnames from 'classnames';
import './icon-button.scss';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  isDisabled,
  onClick,
  classNames
}) => {
  return (
    <MUIButton
      onClick={onClick}
      disabled={isDisabled}
      disableRipple
      classes={{
        root: classnames("BB-icon-button", classNames?.button),
        startIcon: classnames("BB-icon-button__icon", classNames?.icon)
      }}
      startIcon={icon}
    />
  )
}