import type {FC} from "react";
import type {TextFieldProps} from "./TextField.types";

import React from 'react';
import {TEXT_FIELD_INPUT_TYPES} from "./TextField.constants";
import {TextField as MUITextField} from '@mui/material';
import classnames from 'classnames';
import './text-field.scss';

export const TextField: FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  shouldEnableAutoComplete,
  inputType,
  onBlur,
  isRequired,
  isDisabled,
  inputProps,
  classNames
}) => {
  return (
    <MUITextField
      variant="standard"
      value={value}
      label={label}
      type={inputType}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
      autoComplete={shouldEnableAutoComplete ? 'on' : 'off'}
      inputProps={inputProps}
      required={isRequired}
      disabled={isDisabled}
      classes={{
        root: classnames("BB-text-field", classNames?.container)
      }}
    />
  )
}

TextField.defaultProps = {
  inputType: TEXT_FIELD_INPUT_TYPES.TEXT
} as TextFieldProps;