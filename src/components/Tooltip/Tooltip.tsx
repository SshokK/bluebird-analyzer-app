import type { TooltipProps } from './Tooltip.types';
import type {FC, ReactElement} from 'react';

import React from 'react';
import { IconClose } from '../Icons';
import { TOOLTIP_POSITION, TOOLTIP_TYPES } from './Tooltip.constants';
import classnames from 'classnames';
import * as MUI from '@mui/material'
import { useTooltipData, useTooltipHandlers, useTooltipLifecycle } from './hooks';
import './tooltip.scss';

export const Tooltip: FC<TooltipProps> = ({
  id,
  title,
  children,
  placement,
  leaveDelay,
  isOpen,
  type,
  shouldShowArrow,
  shouldShowCloseButton,
  shouldDisablePortal,
  onCloseButtonClick,
  onOpen,
  onClose,
  isDisabled,
  anchorEl,
  classNames
}) => {
  const { localState, localActions } = useTooltipData({ title, isOpen, isDisabled });

  const handlers = useTooltipHandlers({
    props: {
      title,
      isOpen,
      isDisabled,
      onOpen,
      onClose
    },
    localActions
  });

  useTooltipLifecycle({
    onOpenStateChange: handlers.handleOpenStateChange
  });

  return (
    <MUI.Tooltip
      placement={placement}
      id={id}
      title={
        <>
          <span className={`BB-tooltip__text--${type}`}>{title}</span>
          {shouldShowCloseButton && (
            <IconClose
              onClick={onCloseButtonClick}
              classes={{
                root: classnames(
                  `BB-tooltip__close-icon`,
                  `BB-tooltip__close-icon--${type}`
                )
              }}
            />
          )}
        </>
      }
      PopperProps={{
        disablePortal: shouldDisablePortal,
        ...(anchorEl ? { anchorEl: anchorEl } : {})
      }}
      open={localState.isOpen}
      onOpen={handlers.handleTooltipOpen}
      onClose={handlers.handleTooltipClose}
      leaveDelay={leaveDelay}
      classes={{
        tooltip: classnames('BB-tooltip', `BB-tooltip--${type}`, classNames?.tooltip),
        popper: `BB-tooltip__popper`,
        arrow: classnames(`BB-tooltip__arrow`, `BB-tooltip__arrow--${type}`)
      }}
      arrow={shouldShowArrow}
    >
      {children as ReactElement}
    </MUI.Tooltip>
  );
};

Tooltip.defaultProps = {
  id: undefined,
  type: TOOLTIP_TYPES.PRIMARY,
  title: null,
  children: null,
  placement: TOOLTIP_POSITION.BOTTOM,
  leaveDelay: 0,
  isOpen: undefined,
  shouldShowArrow: true,
  shouldShowCloseButton: false,
  onClose: undefined,
  onOpen: undefined,
  onCloseButtonClick: undefined,
  anchorEl: undefined
} as TooltipProps;
