import type {SeparatorProps} from "./Separator.types";
import type {ElementType, FC} from 'react';

import React from 'react';
import * as MUI from '@mui/material';
import {Typography, TYPOGRAPHY_ALIGNMENT, TYPOGRAPHY_TYPES} from "../Typography";
import './separator.scss';

export const Separator: FC<SeparatorProps> = ({
  isVertical,
  isFlexChild,
  component,
  children
}) => {
  return (
    <MUI.Divider
      orientation={isVertical ? 'vertical' : 'horizontal'}
      component={component as ElementType}
      flexItem={isFlexChild}
      classes={{
        root:"BB-separator",
        vertical: "BB-separator--is-vertical"
      }}
    >
      {children && (
        <Typography
          type={TYPOGRAPHY_TYPES.OVERLINE}
          className="BB-separator__text"
          alignment={TYPOGRAPHY_ALIGNMENT.CENTER}
          shouldTruncate
        >
          {children}
        </Typography>
      )}
    </MUI.Divider>
  )
}