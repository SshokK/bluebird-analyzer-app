import type {FC} from "react";
import type {ActionsCellProps} from "./ActionsCell.types";

import React from 'react';
import {Actions, GRID_DIRECTION, GRID_JUSTIFY_CONTENT, ICON_BUTTON_SIZES, SelectorsModal} from "components";
import {useActionsCellActions, useActionsCellData, useActionsCellHandlers, useActionsCellMutations} from "./hooks";

export const ActionsCell: FC<ActionsCellProps>= ({ row }) => {
  const { localState, localActions, formattedData } = useActionsCellData({ row });

  const handlers = useActionsCellHandlers({
    localActions
  });

  const mutations = useActionsCellMutations({
    formattedData
  });

  const actions = useActionsCellActions({
    formattedData,
    mutations,
    onSelectorsModalToggle: handlers.handleSelectorsModalToggle
  });

  return (
    <>
      <Actions
        actions={actions}
        direction={GRID_DIRECTION.ROW}
        justifyContent={GRID_JUSTIFY_CONTENT.FLEX_END}
        isWrapDisabled
        iconSize={ICON_BUTTON_SIZES.SMALL}
      />
      <SelectorsModal
        isOpen={localState.isSelectorsModalOpen}
        isEditable={!formattedData.isActiveCrawler}
        crawlerId={formattedData.row.CrawlerId}
        onClose={handlers.handleSelectorsModalToggle(false)}
      />
    </>
  )
}