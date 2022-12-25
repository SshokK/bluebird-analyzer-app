import type {FC} from "react";
import type {CrawlerLogsProps} from "./CrawlerLogs.types";

import React from 'react';
import {ErrorBoundary} from "../ErrorBoundary";
import {Table} from "../Table";
import {useCrawlerLogsTableQueryOptions} from './hooks';
import {CRAWLER_LOGS_TABLE_COLUMNS, DEFAULT_SORT_PARAMS} from "./CrawlerLogs.constants";
import {Container, CONTAINER_TYPES} from "../Container";
import {Grid, GRID_HEIGHT} from "../Grid";

export const CrawlerLogs: FC<CrawlerLogsProps> = ({ crawlerIds }) => {
  const tableQueryOptions = useCrawlerLogsTableQueryOptions();

  return (
    <ErrorBoundary>
      <Container type={CONTAINER_TYPES.SECONDARY}>
        <Grid height={GRID_HEIGHT.XL}>
          <Table
            isHeaderless
            isFixed
            columns={CRAWLER_LOGS_TABLE_COLUMNS}
            queryOptions={tableQueryOptions}
            queryParams={{
              ...DEFAULT_SORT_PARAMS,
              crawlerId: crawlerIds
            }}
          />
        </Grid>
      </Container>
    </ErrorBoundary>
  )
}