import type {FC} from "react";
import React from 'react';
import type {TableActionsProps} from "./TableActions.types";
import {Actions} from "../../../Actions";
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";
import {useTableActions, useTableActionsData} from "./hooks";
import './table-actions.scss';
import {Animation, ANIMATION_TYPES} from "../../../Animation";

export const TableActions: FC<TableActionsProps> = ({
  table,
  actions,
  limit,
  totalCount
}) => {
  const { formattedData } = useTableActionsData({
    table,
    limit,
    totalCount
  })

  const tableActions = useTableActions({
    props: {
      table,
    }
  });

  return (
    <section className="BB-table-actions">
      <div className="BB-table-actions__actions-container">
        {actions && <Actions actions={actions} />}
        {formattedData.selectedRowsCount > 0 && (
          <Typography type={TYPOGRAPHY_TYPES.CAPTION}>
            {formattedData.selectedRowsCount} rows are selected
          </Typography>
        )}
      </div>
      <div className="BB-table-actions__pagination-container">
        {(totalCount ?? 0) > 0 && (
          <Animation type={ANIMATION_TYPES.FADE} shouldAppear>
            <span className="BB-table-actions__pagination-info">
              <Typography type={TYPOGRAPHY_TYPES.CAPTION}>
                Showing
                {' '}
                {formattedData.intervalStart}
                {' - '}
                {formattedData.intervalEnd} of
                {' '}
                {totalCount}
              </Typography>
            </span>
          </Animation>
        )}
        <Actions actions={tableActions} classNames={{
          container: "BB-table-actions__table-actions"
        }} />
      </div>
    </section>
  )
}