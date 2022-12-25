import type {FC} from 'react';
import type {DrawerProps} from "./Drawer.types";

import React from 'react';
import * as MUI from '@mui/material';
import classnames from 'classnames';
import {DRAWER_PLACEMENT} from "./Drawer.constants";
import './drawer.scss';

export const Drawer: FC<DrawerProps> = ({
  type,
  placement = DRAWER_PLACEMENT.RIGHT,
  children,
  shouldHideBackdrop,
  isBackdropInvisible,
  animationDelay,
  onClose,
  isOpen,
  isCard,
  classNames
}) => {
  return (
    <MUI.Drawer
      variant={type}
      open={isOpen}
      onClose={onClose}
      anchor={placement}
      hideBackdrop={shouldHideBackdrop}
      transitionDuration={animationDelay}
      slotProps={{
        backdrop: {
          // Backdrop opacity is being set programmatically by MUI
          style: isBackdropInvisible ? { opacity: 0 } : {},
          className: classnames('BB-drawer__backdrop', classNames?.backdrop)
        }
      }}
      classes={{
        root: classnames('BB-drawer', classNames?.container),
        paper: classnames('BB-drawer__paper', classNames?.paper, {
          'BB-drawer__paper--is-card': isCard,
          [`BB-drawer__paper--is-${placement}`]: true
        })
      }}
    >
      <div className={classnames('BB-drawer__content', {
        'BB-drawer__content--is-card': isCard
      })}>
        {children}
      </div>
    </MUI.Drawer>
  )
}