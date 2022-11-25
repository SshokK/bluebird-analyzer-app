import type {FC} from "react";
import type {CrawlersProps} from "./Crawlers.types";

import React from 'react';
import {Actions, CardsContainer, Table} from "components";
import {EVENT_CRAWLERS_TABLE_COLUMNS} from "./Crawlers.constants";
import {useCrawlersActions, useCrawlersData, useCrawlersHandlers, useCrawlersQueries} from "./hooks";

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
        isLoading={queries.fetchCrawlers.isLoading}
        rows={queries.fetchCrawlers.data ?? []}
        columns={EVENT_CRAWLERS_TABLE_COLUMNS}
        areRowsSelectable
        onSelectedRowsChange={handlers.handleSelectedRowsChange}
      />
    </CardsContainer>
  )
}