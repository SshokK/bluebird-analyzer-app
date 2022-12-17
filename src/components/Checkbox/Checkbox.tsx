import type {FC} from "react";
import type {CheckboxProps} from "./Checkbox.types";

import React from 'react';
import * as MUI from '@mui/material';
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
    <MUI.FormControlLabel
      label={label}
      disabled={isDisabled}
      classes={{
        root: classnames('BB-checkbox__container', classNames?.container),
        label: classnames('BB-checkbox__label', classNames?.label),
      }}
      control={(
        <MUI.Checkbox
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