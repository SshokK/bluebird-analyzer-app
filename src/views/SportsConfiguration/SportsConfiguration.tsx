import React from 'react';
import {ErrorBoundary, Grid, GRID_ALIGN_ITEMS, GRID_DIRECTION, GRID_HEIGHT, GRID_SPACING, View} from "components";
import {Players, SportFamilies, Sports, Teams} from "./elements";
import {useSportsConfigurationData} from "./hooks";

export const SportsConfiguration = () => {
  const { formattedData } = useSportsConfigurationData();

  return (
    <ErrorBoundary>
      <View>
        <Grid
          isContainer
          direction={GRID_DIRECTION.COLUMN}
          spacing={GRID_SPACING.XL}
        >
          <Grid
            isChild
            isContainer
            spacing={GRID_SPACING.L}
          >
            <Grid isChild xs={3} height={GRID_HEIGHT.XL}>
              <SportFamilies />
            </Grid>
            <Grid isChild xs={9} height={GRID_HEIGHT.XL}>
              <Players sportFamilyId={formattedData.sportFamilyId} />
            </Grid>
          </Grid>
          {formattedData.sportFamilyId && (
            <Grid
              isChild
              isContainer
              alignItems={GRID_ALIGN_ITEMS.STRETCH}
              spacing={GRID_SPACING.L}
            >
              <Grid isChild xs={3} height={GRID_HEIGHT.XL}>
                <Sports sportFamilyId={formattedData.sportFamilyId} />
              </Grid>
              <Grid isChild xs={9} height={GRID_HEIGHT.XL}>
                <Teams
                  sportFamilyId={formattedData.sportFamilyId}
                  sportId={formattedData.sportId}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </View>
    </ErrorBoundary>
  )
}