import React from "react";
import {Grid, GRID_HEIGHT, Separator, Typography, TYPOGRAPHY_TYPES} from "components";
import {EventCrawlers, Bookmakers} from "./elements";
import {useBookmakersCrawlersData} from "./hooks";

export const BookmakersCrawlers = () => {
  const { localState, localActions } = useBookmakersCrawlersData();

  return (
    <Grid isContainer isWrapDisabled>
      <Grid isChild xs={3} height={GRID_HEIGHT.XL}>
        <Bookmakers onSelectedBookmakerChange={localActions.setBookmakerId} />
      </Grid>
      <Grid isChild xs={1} height={GRID_HEIGHT.XL}>
        <Separator isVertical>
          <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
            Crawlers
          </Typography>
        </Separator>
      </Grid>
      <Grid isChild xs={9} height={GRID_HEIGHT.XL}>
        <EventCrawlers bookmakerId={localState.bookmakerId} />
      </Grid>
    </Grid>
  )
}