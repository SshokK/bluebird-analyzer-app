import type {FC} from "react";
import type {SelectOption, SelectProps} from "./Select.types";

import React from 'react';
import {
  Autocomplete as MUIAutocomplete,
  TextField as MUITextField
} from '@mui/material';
import classnames from 'classnames';
import {useSelectData, useSelectHandlers, useSelectLifecycle, useSelectQuery} from "./hooks";
import './select.scss';

export const Select: FC<SelectProps> = ({
  value,
  options,
  label,
  isMulti,
  size,
  isDisabled,
  isClearable,
  isLoading,
  isRequired,
  isFullWidth,
  onChange,
  queryOptions,
  queryParams
}) => {
  const { localState, localActions, formattedData } = useSelectData({ options, value });

  const query = useSelectQuery({
    props: {
      queryOptions,
      queryParams,
      isDisabled
    },
    localState,
    localActions
  });

  const handlers = useSelectHandlers({
    props: {
      options,
      onChange,
      queryOptions
    },
    localActions
  });

  useSelectLifecycle({
    onOptionsPropChange: handlers.handleOptionsPropChange
  })

  return (
    <MUIAutocomplete
      multiple={isMulti}
      disabled={isDisabled}
      size={size}
      disableClearable={!isClearable}
      options={localState.options}
      value={!localState.isFocused ? formattedData.value : null}
      loading={isLoading || query.isFetching}
      noOptionsText="No options"
      getOptionLabel={(option: SelectOption) => option.label}
      inputValue={localState.inputValue}
      onInputChange={handlers.handleInputChange}
      onChange={handlers.handleChange}
      onFocus={handlers.handleFocusToggle(true)}
      onBlur={handlers.handleFocusToggle(false)}
      classes={{
        root: classnames('BB-select', {
          'BB-select--is-full-width': isFullWidth
        }),
        option: 'BB-select__option'
      }}
      renderInput={(props) => (
        <MUITextField
          {...props}
          label={label}
          variant="standard"
          required={isRequired}
        />
      )}
    />
  )
}