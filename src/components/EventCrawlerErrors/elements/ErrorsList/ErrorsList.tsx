import type {FC} from "react";
import type {ErrorsListProps} from "./ErrorsList.types";

import React from 'react';
import { ErrorBoundary, Table} from "components";
import {useErrorsListTableQueryOptions} from "./hooks";
import {DEFAULT_SORT_PARAMS, ERRORS_TABLE_COLUMNS} from "./ErrorsList.constants";

export const ErrorsList: FC<ErrorsListProps> = ({ eventCrawlerId }) => {
  const tableQueryOptions = useErrorsListTableQueryOptions();

  return (
    <ErrorBoundary>
      <Table
        isHeaderless
        isFixed
        columns={ERRORS_TABLE_COLUMNS}
        queryOptions={tableQueryOptions}
        queryParams={{
          eventCrawlerId,
          ...DEFAULT_SORT_PARAMS
        }}
      />
    </ErrorBoundary>
  )
}