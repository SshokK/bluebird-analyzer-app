import type {AvatarGroupProps} from "./AvatarGroup.types";
import type {FC} from 'react';

import React from 'react';
import { AvatarGroup as MUIAvatarGroup } from '@mui/material';
import classnames from 'classnames';
import './avatar-group.scss';

export const AvatarGroup: FC<AvatarGroupProps> = ({ children, maxAvatarsCount, classNames }) => {
  return (
    <MUIAvatarGroup
      max={maxAvatarsCount}
      classes={{
        root: classnames(classNames?.container, 'BB-avatar-group'),
        avatar: classnames(classNames?.avatar, 'BB-avatar-group__avatar')
    }}
    >
      {children}
    </MUIAvatarGroup>
  )
}