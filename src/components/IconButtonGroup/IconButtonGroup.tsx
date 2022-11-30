import type {FC} from "react";
import type {IconButtonGroupProps} from "./IconButtonGroup.types";

import React from 'react';
import {ICON_BUTTON_GROUP_ORIENTATIONS} from "./IconButtonGroup.constants";
import classnames from 'classnames';
import './icon-button-group.scss';

export const IconButtonGroup: FC<IconButtonGroupProps> = ({
  children,
  className,
  orientation,
  isWrapDisabled
}) => {
  return (
    <div className={classnames('BB-icon-button-group', className, {
      [`BB-icon-button-group--is-${orientation ?? ICON_BUTTON_GROUP_ORIENTATIONS.ROW}`]: true,
      [`BB-icon-button-group--is-wrap-disabled`]: isWrapDisabled
    })}>
      {children}
    </div>
  )
}