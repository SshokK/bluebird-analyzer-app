import type {CardProps} from "./Card.types";

import React, {forwardRef} from 'react';
import { Card as MUICard } from '@mui/material'
import classnames from 'classnames';
import './card.scss';

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  elevation,
  classNames,
  isSquared,
  children,
  ...props
}, ref) => {
  return (
    <MUICard
      ref={ref}
      square={isSquared}
      elevation={elevation}
      classes={{ root: classnames("BB-card", classNames?.container )}}
      {...props}
    >
      {children}
    </MUICard>
  )
})