import type {ListItemProps} from "./ListItem.types";
import type {FC} from "react";
import React from 'react';
import {
  DataSelect,
  Grid,
  GRID_JUSTIFY_CONTENT,
  GRID_SPACING,
  SELECT_SIZES,
  TEXT_FIELD_SIZES,
  TextField,
  Tooltip,
  TOOLTIP_POSITION,
  Typography,
  TYPOGRAPHY_TYPES
} from "components/index";
import './list-item.scss';

export const ListItem: FC<ListItemProps> = ({ label, value, isEditable, dataKey, shouldShowTooltip }) => {
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
        {dataKey ? (
          <DataSelect
            value={value as unknown[]}
            dataType={dataKey}
            size={SELECT_SIZES.S}
            shouldHideLabel
            isFullWidth
            isDisabled={!isEditable}
          />
        ) : (
          <Tooltip
            title={shouldShowTooltip ? String(value ?? '') : ''}
            position={TOOLTIP_POSITION.LEFT}
          >
            <TextField
              value={String(value ?? '')}
              size={TEXT_FIELD_SIZES.S}
              isDisabled={!isEditable}
            />
          </Tooltip>
        )}
      </Grid>
    </Grid>
  )
}