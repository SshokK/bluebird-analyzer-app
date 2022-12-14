import type {FC} from "react";
import React from 'react';
import type {SelectorNodeContentProps} from "./SelectorNodeContent.types";
import {Grid} from "../../../../../Grid";
import {ListItem} from "./elements";
import {DATA_SELECT_DATA_TYPES} from "../../../../../DataSelect";

export const SelectorNodeContent: FC<SelectorNodeContentProps> = ({ crawlerPageSelector, isEditable }) => {
  return (
    <Grid
      isContainer
      component="ul"
    >
      <ListItem
        label="Target type"
        value={[crawlerPageSelector.targetType]}
        isEditable={isEditable}
        dataKey={DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_TARGET_TYPES}
      />
      <ListItem
        label="Value Type"
        value={[crawlerPageSelector.valueType]}
        isEditable={isEditable}
        dataKey={DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_VALUE_TYPES}
      />
      <ListItem
        label="Value"
        value={crawlerPageSelector.value}
        isEditable={isEditable}
        shouldShowTooltip
      />
      <ListItem
        label="Data key"
        value={[crawlerPageSelector.dataKey]}
        isEditable={isEditable}
        dataKey={DATA_SELECT_DATA_TYPES.CRAWLER_PAGE_SELECTOR_DATA_KEYS}
      />
    </Grid>
  )
}