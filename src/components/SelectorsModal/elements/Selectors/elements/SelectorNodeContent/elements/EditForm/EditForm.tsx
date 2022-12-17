import type {FC} from "react";
import type {EditFormProps} from "./EditForm.types";
import type {CrawlerPageSelectorSchema} from "features/crawler-page-selectors/crawlerPageSelectors.api.types";

import React from 'react';
import {INPUTS, INPUTS_CONFIG} from "./EditForm.constants";
import {useEditFormHandlers} from "./hooks";
import {Grid, GRID_DIRECTION, GRID_SPACING, TEXT_FIELD_SIZES} from "components";

export const EditForm: FC<EditFormProps> = ({ crawlerPageSelector, onSelectorChange }) => {
  const handlers = useEditFormHandlers({
    props: {
      onSelectorChange,
      crawlerPageSelector
    }
  });

  return (
    <Grid
      isContainer
      rowSpacing={GRID_SPACING.S}
      direction={GRID_DIRECTION.COLUMN}
    >
      {Object.entries(INPUTS_CONFIG).map(([field, config]) => {
        const Component = INPUTS[config.type];
        const value = crawlerPageSelector[field as keyof typeof crawlerPageSelector];

        return (
          <Grid key={field} isChild>
            <Component
              {...config.props}
              size={TEXT_FIELD_SIZES.S}
              label={config.label}
              value={config.onFormatValue(value) as never} // Hack to silence TS
              onChange={handlers.handleChange({
                field: field,
                onFormatOutputValue: config.onFormatOutputValue
              })}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}