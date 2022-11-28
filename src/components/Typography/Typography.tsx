import type {ElementType, FC} from 'react';
import type {TypographyProps} from "./Typography.types";

import React from 'react';
import {Typography as MUITypography} from '@mui/material';
import {TYPOGRAPHY_ALIGNMENT, TYPOGRAPHY_STATUS, TYPOGRAPHY_TYPES} from "./Typography.constants";
import classnames from 'classnames';
import './typography.scss';

export const Typography: FC<TypographyProps> = ({
  type,
  children,
  alignment,
  status,
  className,
  component,
  shouldTruncate,
  shouldRenderParagraph,
  shouldAddBottomMargin
}) => {
  return (
    <MUITypography
      variant={type}
      align={alignment}
      component={component as ElementType}
      noWrap={shouldTruncate}
      paragraph={shouldRenderParagraph}
      gutterBottom={shouldAddBottomMargin}
      classes={{
        root: classnames('BB-typography', className, {
          [`BB-typography--is-${status ?? TYPOGRAPHY_STATUS.INITIAL}`]: true
        }),
        inherit: 'BB-typography--inherit',
        h1: 'BB-typography--h1',
        h2: 'BB-typography--h2',
        h3: 'BB-typography--h3',
        h4: 'BB-typography--h4',
        h5: 'BB-typography--h5',
        h6: 'BB-typography--h6',
        caption: 'BB-typography--caption',
        button: 'BB-typography--button',
        overline: 'BB-typography--overline',
        subtitle1: 'BB-typography--subtitle1',
        subtitle2: 'BB-typography--subtitle2',
        body1: 'BB-typography--body1',
        body2: 'BB-typography--body2'
      }}
    >
      {children}
    </MUITypography>
  )
}

Typography.defaultProps = {
  type: TYPOGRAPHY_TYPES.INHERIT,
  alignment: TYPOGRAPHY_ALIGNMENT.LEFT,
  className: undefined,
  component: undefined,
  shouldTruncate: false,
  shouldRenderParagraph: false,
  shouldAddBottomMargin: false
} as TypographyProps