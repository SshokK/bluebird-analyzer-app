import type {GridProps} from "./Grid.types";
import type {FC} from 'react';

import React, {forwardRef} from 'react';
import classnames from 'classnames';
import * as MUI from '@mui/material';
import './grid.scss';

export const Grid: FC<GridProps> = forwardRef<HTMLDivElement, GridProps>(({
  direction,
  justifyContent,
  alignItems,
  isContainer,
  isChild,
  shouldSetZeroMinWidth,
  spacing,
  rowSpacing,
  columnSpacing,
  columns,
  isWrapDisabled,
  classNames,
  childDisplay,
  children,
  component,
  ...restProps
}, ref) => {
  return (
    <MUI.Grid
      ref={ref}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      container={isContainer}
      item={isChild}
      columns={columns}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      spacing={spacing}
      zeroMinWidth={shouldSetZeroMinWidth}
      {...isContainer && { wrap: isWrapDisabled ? 'nowrap' : 'wrap' }}
      {...restProps}
      classes={{
        root: classnames(classNames?.container, {
          [`BB-grid__child--is-${childDisplay}`]: isChild && !isContainer && childDisplay
        })
      }}
    >
      {children}
    </MUI.Grid>
  )
})