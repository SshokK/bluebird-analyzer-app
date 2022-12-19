import type {FC} from "react";
import type {EventCrawlersProps} from "./EventCrawlers.types";

import React from 'react';
import {Container, ErrorBoundary, Table} from "components";
import {ANIMATION_TIMING, EVENT_CRAWLERS_TABLE_COLUMNS} from "./EventCrawlers.constants";
import {
  useEventCrawlersTableActions,
  useEventCrawlersData,
  useEventCrawlersHandlers,
  useEventCrawlersTableQueryOptions,
  useEventCrawlersMutations
} from "./hooks";

export const EventCrawlers: FC<EventCrawlersProps> = ({ bookmakerId }) => {
  const { localState, localActions } = useEventCrawlersData();

  const handlers = useEventCrawlersHandlers({
    localActions
  });

  const mutations = useEventCrawlersMutations({
    props: {
      bookmakerId
    },
    localActions
  })

  const tableActions = useEventCrawlersTableActions({
    localState,
    mutations
  });

  const tableQueryOptions = useEventCrawlersTableQueryOptions({
    props: {
      bookmakerId
    }
  });

  return (
    <ErrorBoundary>
      <Container
        isAnimated
        animationTiming={ANIMATION_TIMING}
        isFullHeight
        shouldShowNoDataMessage={!bookmakerId}
        elevation={0}
        isWithoutPadding
        noDataMessage="Select a bookmaker"
      >
        <Table
          columns={EVENT_CRAWLERS_TABLE_COLUMNS}
          areRowsSelectable
          actions={tableActions}
          selectedRowKeys={localState.selectedRowKeys}
          onSelectedRowsChange={handlers.handleSelectedRowsChange}
          queryOptions={tableQueryOptions}
          queryParams={{
            bookmakerId: bookmakerId
          }}
        />
      </Container>
    </ErrorBoundary>
  )
}