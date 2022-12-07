import type {FC} from "react";
import React from 'react';
import type {CheckboxProps} from "./Checkbox.types";
import {Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel} from '@mui/material';
import classnames from 'classnames';
import './checkbox.scss';

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  isDisabled,
  isIndeterminate,
  label,
  onChange,
  classNames
}) => {
  return (
    <MUIFormControlLabel
      label={label}
      disabled={isDisabled}
      classes={{
        root: classnames('BB-checkbox__container', classNames?.container),
        label: classnames('BB-checkbox__label', classNames?.label),
      }}
      control={(
        <MUICheckbox
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={(e, checked) => onChange?.(checked)}
          // checkedIcon={<CheckCircle />}
          // icon={<RadioButtonUnchecked />}
          classes={{
            root: classnames('BB-checkbox', classNames?.checkbox ),
            checked: 'BB-checkbox--is-checked'
          }}
        />
      )}
    />
  )
}