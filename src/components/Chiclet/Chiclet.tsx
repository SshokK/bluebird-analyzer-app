import type {FC} from 'react';
import type {ChicletProps} from "./Chiclet.types";

import React from 'react';
import {Button} from "@mui/material";
import classnames from 'classnames';
import { IconDelete} from "../Icons";
import './chiclet.scss';

export const Chiclet: FC<ChicletProps> = ({
  isDisabled,
  isDeletable,
  isSelected,
  onClick,
  onDelete,
  classNames,
  children
}) => {
  return (
    <div className={classnames('BB-chiclet', classNames?.container)}>
      {isDisabled && <div className="BB-chiclet__disabled-overlay"/>}
      <Button
        disabled={isDisabled}
        onClick={onClick}
        disableFocusRipple
        onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
        classes={{
          root: classnames('BB-chiclet__button', classNames?.button, {
            'BB-chiclet__button--is-selected': isSelected,
            'BB-chiclet__button--is-deletable': isDeletable
          })
        }}
      >
        <span className={classnames("BB-chiclet__content", classNames?.content)}>
          {children}
        </span>
      </Button>
      {isDeletable && (
        <button
          disabled={isDisabled}
          className={classnames("BB-chiclet__delete-button", classNames?.deleteButton, {
            'BB-chiclet__delete-button--is-selected': isSelected
          })}
          onClick={onDelete}
          onMouseDown={e => e.preventDefault()} // Removes focus once button clicked. Required for correct styling
        >
          <IconDelete />
        </button>
      )}
    </div>
  )
}