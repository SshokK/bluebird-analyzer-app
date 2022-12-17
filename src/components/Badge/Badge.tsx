import type { FC } from 'react';
import type {BadgeProps} from "./Badge.types";

import React from 'react';
import classnames from 'classnames';
import * as MUI from '@mui/material';
import './badge.scss';

export const Badge: FC<BadgeProps> = ({
  type,
  children,
  content,
  classNames
}) => {
  return (
    <MUI.Badge
      badgeContent={content}
      color="primary"
      classes={{
        badge: classnames('BB-badge', classNames?.container, `BB-badge--is-${type}`)
      }}
    >
      {children}
    </MUI.Badge>
  )
}