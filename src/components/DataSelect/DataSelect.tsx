import type {FC} from "react";
import type {DataSelectProps} from "./DataSelect.types";

import React from 'react';
import {Select} from "../Select";
import {DATA_CONFIG} from "./DataSelect.constants";

export const DataSelect: FC<DataSelectProps> = (props) => {
  const dataProps = props.dataType ? {
    queryOptions: DATA_CONFIG[props.dataType].queryOptions,
    options: DATA_CONFIG[props.dataType].options,
    label: props.shouldHideLabel ? '' : DATA_CONFIG[props.dataType].label
  } : {}

  return (
    <Select
      {...props}
      {...dataProps}
    />
  )
}