import type {FC} from "react";
import type {CheckboxProps} from "./Checkbox.types";

import React from 'react';
import { Checkbox as MUICheckbox, FormControlLabel as MUIFormControlLabel } from '@mui/material';
import classnames from 'classnames';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
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
      classes={{ root: classnames('BB-checkbox__container', classNames?.container )}}
      control={(
        <MUICheckbox
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={(e, checked) => onChange?.(checked)}
          checkedIcon={<CheckCircle />}
          icon={<RadioButtonUnchecked />}
          classes={{
            root: classnames('BB-checkbox', classNames?.checkbox ),
            checked: 'BB-checkbox--is-checked'
          }}
        />
      )}
    />
  )
}