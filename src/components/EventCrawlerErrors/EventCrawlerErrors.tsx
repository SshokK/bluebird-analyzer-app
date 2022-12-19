import type {FC} from "react";
import type {EventCrawlerErrorsProps} from "./EventCrawlerErrors.types";

import React from 'react';
import {Grid, GRID_SPACING} from "../Grid";
import {CrawlerErrorsByTypeChart} from "../CrawlerErrorsByTypeChart";
import {ErrorBoundary} from "../ErrorBoundary";
import {ErrorsList} from "./elements";
import {Container, CONTAINER_TYPES} from "../Container";
import {Separator} from "../Separator";

export const EventCrawlerErrors: FC<EventCrawlerErrorsProps> = ({ eventCrawlerId }) => {
  return (
    <ErrorBoundary>
      <Grid isContainer>
        <Grid isChild xs={12} shouldSetEqualAspectRatio>
          <Container isFullHeight isSquared>
            <CrawlerErrorsByTypeChart eventCrawlerIds={[eventCrawlerId]} />
          </Container>
        </Grid>
        <Grid isChild xs={12}>
          <Container type={CONTAINER_TYPES.SECONDARY} isSquared>
            <Grid isContainer spacing={GRID_SPACING.M}>
              <Grid isChild xs={12}>
                <Separator>
                  Latest errors
                </Separator>
              </Grid>
              <Grid isChild xs={12}>
                <ErrorsList
                  eventCrawlerId={eventCrawlerId}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ErrorBoundary>
  )
}