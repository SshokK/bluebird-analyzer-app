import type {FC} from "react";
import type {TextFieldProps} from "./TextField.types";

import React from 'react';
import { TextField as MUITextField  } from '@mui/material';
import classnames from 'classnames';
import './text-field.scss';

export const TextField: FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  shouldEnableAutoComplete,
  classNames
}) => {
  return (
    <MUITextField
      variant="standard"
      value={value}
      label={label}
      onChange={(e) => onChange?.(e.target.value)}
      autoComplete={shouldEnableAutoComplete ? 'on' : 'off'}
      classes={{
        root: classnames("BB-text-field", classNames?.container)
      }}
    />
  )
}