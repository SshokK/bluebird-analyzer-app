import type {FC} from "react";
import React from 'react';

import type {IconButtonProps} from "./IconButton.types";
import {Button as MUIButton} from '@mui/material';
import classnames from 'classnames';
import {ICON_BUTTON_SIZES, ICON_BUTTON_TYPES} from "./IconButton.constants";
import './icon-button.scss';

export const IconButton: FC<IconButtonProps> = ({
  type,
  size,
  icon,
  isDisabled,
  isSquared,
  onClick,
  classNames
}) => {
  return (
    <MUIButton
      onClick={onClick}
      disabled={isDisabled}
      disableRipple
      onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
      classes={{
        root: classnames("BB-icon-button", classNames?.button, {
          [`BB-icon-button--${type ?? ICON_BUTTON_TYPES.PRIMARY}`]: true,
          [`BB-icon-button--${size ?? ICON_BUTTON_SIZES.MEDIUM}`]: true,
          "BB-icon-button--is-squared": isSquared,
        }),
        startIcon: classnames("BB-icon-button__icon", classNames?.icon)
      }}
      startIcon={icon}
    />
  )
}