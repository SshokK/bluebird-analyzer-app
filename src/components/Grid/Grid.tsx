import type {GridProps} from "./Grid.types";
import type {ElementType, FC} from 'react';

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
  height,
  shouldSetOverflowAuto,
  shouldSetZeroMinWidth,
  shouldSetEqualAspectRatio,
  spacing,
  rowSpacing,
  columnSpacing,
  columns,
  isWrapDisabled,
  isShrinkDisabled,
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
      component={component as ElementType}
      columns={columns}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      spacing={spacing}
      zeroMinWidth={shouldSetZeroMinWidth}
      {...isContainer && { wrap: isWrapDisabled ? 'nowrap' : 'wrap' }}
      {...restProps}
      style={{
        height
      }}
      classes={{
        root: classnames(classNames?.container, 'BB-grid', {
          'BB-grid--is-overflow-auto': shouldSetOverflowAuto,
          'BB-grid--is-shrink-disabled': isShrinkDisabled,
          'BB-grid--is-equal-aspect-ratio': shouldSetEqualAspectRatio,
          [`BB-grid__child--is-${childDisplay}`]: isChild && !isContainer && childDisplay
        })
      }}
    >
      {children}
    </MUI.Grid>
  )
})