import type {ListItemProps} from "./ListItem.types";
import type {FC} from "react";

import React from 'react';
import {Grid, GRID_JUSTIFY_CONTENT, GRID_SPACING, Typography, TYPOGRAPHY_TYPES} from "components/index";
import './list-item.scss';

export const ListItem: FC<ListItemProps> = ({ label, value }) => {
  return (
    <Grid 
      isChild 
      isContainer 
      component="li" 
      spacing={GRID_SPACING.XS}
      isWrapDisabled 
      justifyContent={GRID_JUSTIFY_CONTENT.SPACE_BETWEEN}
    >
      <Grid
        isChild
        xs={6}
        isWrapDisabled
        isContainer
        justifyContent={GRID_JUSTIFY_CONTENT.FLEX_START}
      >
        <Typography
          type={TYPOGRAPHY_TYPES.CAPTION}
          shouldTruncate
          className="BB-selector-node-content-list-item__label"
        >
          {label}
        </Typography>
      </Grid>
      <Grid
        isChild
        xs={6}
        isWrapDisabled
        isContainer
        justifyContent={GRID_JUSTIFY_CONTENT.FLEX_START}
      >
        <Typography
          type={TYPOGRAPHY_TYPES.BODY2}
          shouldTruncate
          className="BB-selector-node-content-list-item__value"
        >
          {value ?? '-'}
        </Typography>
      </Grid>
    </Grid>
  )
}