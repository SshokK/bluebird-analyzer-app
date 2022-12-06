import type {SeparatorProps} from "./Separator.types";
import type { ElementType, FC} from 'react';

import React from 'react';
import * as MUI from '@mui/material';
import './separator.scss';

export const Separator: FC<SeparatorProps> = ({ isVertical, component, children }) => {
  return (
    <MUI.Divider
      orientation={isVertical ? 'vertical' : 'horizontal'}
      component={component as ElementType}
      classes={{
        root: "BB-separator",
        vertical: "BB-separator--is-vertical"
      }}
    >
      {children}
    </MUI.Divider>
  )
}