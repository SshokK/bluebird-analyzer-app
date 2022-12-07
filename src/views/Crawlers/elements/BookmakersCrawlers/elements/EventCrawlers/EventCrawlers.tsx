import type {FC} from "react";
import type {CrawlersProps} from "./EventCrawlers.types";

import React from 'react';
import {CardsContainer, ErrorBoundary, Table} from "components";
import {ANIMATION_DELAY, EVENT_CRAWLERS_TABLE_COLUMNS} from "./EventCrawlers.constants";
import {useEventCrawlersActions, useEventCrawlersData, useEventCrawlersHandlers, useEventCrawlersTableQueryOptions} from "./hooks";

export const EventCrawlers: FC<CrawlersProps> = ({ bookmakerId }) => {
  const { localState, localActions } = useEventCrawlersData();

  const actions = useEventCrawlersActions({
    localState
  });

  const handlers = useEventCrawlersHandlers({
    localActions
  });

  const tableQueryOptions = useEventCrawlersTableQueryOptions({
    props: {
      bookmakerId
    }
  });

  return (
    <ErrorBoundary>
      <CardsContainer
        isAnimated
        animationDelay={ANIMATION_DELAY}
        isFullHeight
        shouldShowNoDataMessage={!bookmakerId}
        noDataMessage="Select a bookmaker"
      >
        <Table
          queryOptions={tableQueryOptions}
          queryParams={{
            bookmakerId: bookmakerId
          }}
          columns={EVENT_CRAWLERS_TABLE_COLUMNS}
          areRowsSelectable
          actions={actions}
          onSelectedRowsChange={handlers.handleSelectedRowsChange}
        />
      </CardsContainer>
    </ErrorBoundary>
  )
}