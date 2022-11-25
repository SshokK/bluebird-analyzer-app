import type {FC} from "react";
import type {IconButtonGroupProps} from "./IconButtonGroup.types";

import React from 'react';
import classnames from 'classnames';
import './icon-button-group.scss';

export const IconButtonGroup: FC<IconButtonGroupProps> = ({
  children,
  className
}) => {
  return (
    <div className={classnames('BB-icon-button-group', className)}>
      {children}
    </div>
  )
}