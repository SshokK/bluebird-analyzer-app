import type { FC } from 'react';
import type {DrawerProps} from "./Drawer.types";

import React from 'react';
import { Drawer as MUIDrawer } from '@mui/material';
import classnames from 'classnames';
import './drawer.scss';

export const Drawer: FC<DrawerProps> = ({
  type,
  anchorPosition,
  children,
  shouldHideBackdrop,
  onClose,
  isOpen,
  classNames
}) => {
  return (
    <MUIDrawer
      variant={type}
      open={isOpen}
      onClose={onClose}
      anchor={anchorPosition}
      hideBackdrop={shouldHideBackdrop}
      classes={{
        root: classnames('BB-drawer', classNames?.container),
        paper: classnames('BB-drawer__paper', classNames?.paper)
      }}
    >
      {children}
    </MUIDrawer>
  )
}