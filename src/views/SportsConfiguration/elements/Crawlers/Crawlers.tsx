import type {FC} from "react";
import type {CrawlersProps} from "./Crawlers.types";

import React from 'react';
import {Actions, CardsContainer, Table} from "components";
import {EVENT_CRAWLERS_TABLE_COLUMNS} from "./Crawlers.constants";
import {useCrawlersActions, useCrawlersData, useCrawlersHandlers, useCrawlersQueries} from "./hooks";
import {QUERY_KEYS} from "../../../../constants/queries.constants";
import * as evnetCrawlersApi from "../../../../features/event-crawlers/eventCrawlers.api";
import * as eventCrawlersApiSelectors from "../../../../features/event-crawlers/eventCrawlers.api.selectors";

export const Crawlers: FC<CrawlersProps> = ({ sportFamilyId, sportId }) => {
  const { localState, localActions } = useCrawlersData();

  const queries = useCrawlersQueries({
    props: {
      sportFamilyId,
      sportId
    }
  });

  const actions = useCrawlersActions({
    queries,
    localState
  });

  const handlers = useCrawlersHandlers({
    localActions
  })

  return (
    <CardsContainer
      title={queries.fetchSport.data
        ? `${queries.fetchSport.data.name} crawlers`
        : ''
      }
      isAnimated
      isLoading={queries.fetchSport.isLoading}
    >
      <Actions actions={actions} />
      <Table
        queryOptions={{
          queryKey: [QUERY_KEYS.CRAWLERS, {
            SportId: sportId
          }],
          queryFn: () => evnetCrawlersApi.fetchEventCrawlers({
            SportId: sportId,
            limit: 10,
            offset: 0
          }),
          select: eventCrawlersApiSelectors.formatEventCrawlersForTable
        }}
        columns={EVENT_CRAWLERS_TABLE_COLUMNS}
        areRowsSelectable
        onSelectedRowsChange={handlers.handleSelectedRowsChange}
      />
    </CardsContainer>
  )
}