import type {FC} from "react";
import type {SelectOption, SelectProps} from "./Select.types";

import React from 'react';
import {
  Autocomplete as MUIAutocomplete,
  TextField as MUITextField
} from '@mui/material';
import {useSelectData, useSelectHandlers, useSelectLifecycle, useSelectQuery} from "./hooks";
import './select.scss';

export const Select: FC<SelectProps> = ({
  value,
  options,
  label,
  isMulti,
  isDisabled,
  isClearable,
  isLoading,
  isRequired,
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
        root: 'BB-select'
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