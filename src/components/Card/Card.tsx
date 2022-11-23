import type {CardProps} from "./Card.types";
import type {FC} from 'react';

import React from 'react';
import { Card as MUICard } from '@mui/material'
import classnames from 'classnames';
import './card.scss';

export const Card: FC<CardProps> = ({
  elevation,
  classNames,
  isSquared,
  children
}) => {
  return (
    <MUICard square={isSquared} elevation={elevation} classes={{ root: classnames("BB-card", classNames?.container )}}>
      {children}
    </MUICard>
  )
}