import type {RestrictedBadgeProps} from "./RestrictedBadge.types";
import type {FC} from 'react';

import React from 'react';
import {Badge, BADGE_TYPES} from "../Badge";
import {IconLock} from "../Icons";

export const RestrictedBadge: FC<RestrictedBadgeProps> = ({ children }) => {
  return (
    <Badge type={BADGE_TYPES.RESTRICTED} content={<IconLock />}>
      {children}
    </Badge>
  )
}