import type {FC} from "react";
import type {IconButtonProps} from "./IconButton.types";

import React, {forwardRef} from 'react';
import {Button as MUIButton} from '@mui/material';
import classnames from 'classnames';
import {ICON_BUTTON_SHAPES, ICON_BUTTON_SIZES, ICON_BUTTON_TYPES} from "./IconButton.constants";
import './icon-button.scss';

export const IconButton: FC<IconButtonProps> = forwardRef<HTMLButtonElement, IconButtonProps>(({
  type,
  size,
  icon,
  shape,
  isDisabled,
  isPressed,
  onClick,
  classNames,
  ...restProps
}, ref) => {
  return (
    <MUIButton
      ref={ref}
      onClick={onClick}
      disabled={isDisabled}
      disableRipple
      onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
      classes={{
        root: classnames("BB-icon-button", classNames?.button, {
          [`BB-icon-button--${type ?? ICON_BUTTON_TYPES.PRIMARY}`]: true,
          [`BB-icon-button--${size ?? ICON_BUTTON_SIZES.MEDIUM}`]: true,
          [`BB-icon-button--is-${shape ?? ICON_BUTTON_SHAPES.ROUNDED}`]: true,
          "BB-icon-button--is-pressed": isPressed,
        }),
        startIcon: classnames("BB-icon-button__icon", classNames?.icon)
      }}
      startIcon={icon}
      {...restProps}
    />
  )
})