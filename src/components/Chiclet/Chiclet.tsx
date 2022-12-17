import type {FC} from 'react';
import type {ChicletProps} from "./Chiclet.types";

import React from 'react';
import * as MUI from "@mui/material";
import {CHICLET_SIZES} from "./Chiclet.constants";
import classnames from 'classnames';
import { IconClose} from "../Icons";
import './chiclet.scss';

export const Chiclet: FC<ChicletProps> = ({
  size = CHICLET_SIZES.MEDIUM,
  icon,
  isDisabled,
  isDeletable,
  isSelected,
  isFullWidth,
  isClickable,
  onClick,
  onDelete,
  classNames,
  children
}) => {
  return (
    <div className={classnames('BB-chiclet', classNames?.container, {
      [`BB-chiclet--is-${size}`]: true,
      'BB-chiclet--is-full-width': isFullWidth
    })}>
      {isDisabled && <div className="BB-chiclet__disabled-overlay"/>}
      <MUI.Button
        type="button"
        disabled={isDisabled}
        onClick={isClickable ? onClick : undefined}
        disableFocusRipple
        disableRipple={!isClickable}
        onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
        startIcon={icon}
        classes={{
          root: classnames('BB-chiclet__button', classNames?.button, {
            'BB-chiclet__button--is-selected': isSelected,
            'BB-chiclet__button--is-deletable': isDeletable,
            'BB-chiclet__button--is-clickable': isClickable,
            [`BB-chiclet__button--is-${size}`]: true
          })
        }}
      >
        <span className={classnames("BB-chiclet__content", classNames?.content)}>
          {children}
        </span>
      </MUI.Button>
      {isDeletable && (
        <button
          type="button"
          disabled={isDisabled}
          className={classnames("BB-chiclet__delete-button", classNames?.deleteButton, {
            'BB-chiclet__delete-button--is-selected': isSelected
          })}
          onClick={onDelete}
          onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
        >
          <IconClose />
        </button>
      )}
    </div>
  )
}