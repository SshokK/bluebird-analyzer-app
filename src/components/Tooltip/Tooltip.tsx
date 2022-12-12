import type {TooltipProps} from './Tooltip.types';
import type {FC, ReactElement} from 'react';

import React from 'react';
import {TOOLTIP_POSITION, TOOLTIP_TYPES} from './Tooltip.constants';
import classnames from 'classnames';
import * as MUI from '@mui/material'
import './tooltip.scss';

export const Tooltip: FC<TooltipProps> = ({
  id,
  title,
  children,
  placement,
  type,
  shouldShowArrow,
  classNames
}) => {
  return (
    <MUI.Tooltip
      id={id}
      title={title}
      placement={placement}
      arrow={shouldShowArrow}
      classes={{
        tooltip: classnames('BB-tooltip', `BB-tooltip--${type}`, classNames?.tooltip),
        popper: `BB-tooltip__popper`,
        arrow: classnames(`BB-tooltip__arrow`, `BB-tooltip__arrow--${type}`)
      }}
    >
      <div>{children as ReactElement}</div>
    </MUI.Tooltip>
  );
};

Tooltip.defaultProps = {
  id: undefined,
  type: TOOLTIP_TYPES.PRIMARY,
  title: null,
  children: null,
  placement: TOOLTIP_POSITION.BOTTOM,
  isOpen: undefined,
  shouldShowArrow: true,
  shouldShowCloseButton: false,
  onClose: undefined,
  onOpen: undefined,
  onCloseButtonClick: undefined,
} as TooltipProps;
