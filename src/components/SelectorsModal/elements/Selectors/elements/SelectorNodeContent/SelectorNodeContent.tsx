import type {FC} from "react";
import type {SelectorNodeContentProps} from "./SelectorNodeContent.types";

import React from 'react';
import {Grid} from "../../../../../Grid";
import {ListItem} from "./elements";

export const SelectorNodeContent: FC<SelectorNodeContentProps> = ({ crawlerPageSelector }) => {
  return (
    <Grid isContainer component="ul">
      <ListItem
        label="Target type"
        value={crawlerPageSelector.targetType}
      />
      <ListItem
        label="Value Type"
        value={crawlerPageSelector.valueType}
      />
      <ListItem
        label="Value"
        value={crawlerPageSelector.value}
      />
      <ListItem
        label="Data key"
        value={crawlerPageSelector.dataKey}
      />
    </Grid>
  )
}