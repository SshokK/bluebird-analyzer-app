import type {AvatarProps} from "./Avatar.types";
import type {FC} from 'react';

import React from 'react';
import * as MUI from '@mui/material';
import {AVATAR_SIZES} from "./Avatar.constants";
import classnames from 'classnames';
import './avatar.scss';

export const Avatar: FC<AvatarProps> = ({ size, src, alt, children, className }) => {
  return (
    <MUI.Avatar
      alt={alt}
      src={src}
      classes={{
        root: classnames('BB-avatar', className, {
          [`BB-avatar--is-${size}`]: true,
        }),
        fallback: 'BB-avatar__fallback'
      }}
    >
      {children}
    </MUI.Avatar>
  )
}

Avatar.defaultProps = {
  size: AVATAR_SIZES.MEDIUM
}