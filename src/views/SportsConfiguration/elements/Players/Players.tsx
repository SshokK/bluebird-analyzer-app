import type {FC} from "react";
import type {PlayersProps} from "./Players.types";

import React from 'react';
import {ANIMATION_DELAY, PLAYERS_TABLE_COLUMN_KEYS, PLAYERS_TABLE_COLUMNS} from "./Players.constants";
import {CardsContainer, Table} from "components";
import {
  usePlayersData,
  usePlayersQueries,
  usePlayersTableQueryOptions,
  usePlayersMutations,
  usePlayersTableActions
} from './hooks';

export const Players: FC<PlayersProps> = ({ sportFamilyId }) => {
  const { localState, localActions } = usePlayersData();

  const queries = usePlayersQueries({
    props: {
      sportFamilyId
    }
  });

  const mutations = usePlayersMutations({
    localState
  })

  const tableQueryOptions = usePlayersTableQueryOptions({
    props: {
      sportFamilyId
    }
  });

  const tableActions = usePlayersTableActions({
    props: {
      sportFamilyId
    },
    localState,
    mutations
  })

  return (
    <CardsContainer
      title={!sportFamilyId
        ? "Players"
        : `${queries.fetchSportFamily.data?.name} players`
      }
      isFullHeight
      animationDelay={ANIMATION_DELAY}
      shouldShowNoDataMessage={!sportFamilyId}
      noDataMessage="Select a sport family"
    >
      <Table
        columns={PLAYERS_TABLE_COLUMNS}
        actions={tableActions}
        rowId={PLAYERS_TABLE_COLUMN_KEYS.ID}
        areRowsSelectable
        selectedRowKeys={localState.selectedRowKeys}
        onSelectedRowsChange={localActions.setSelectedRowKeys}
        queryOptions={tableQueryOptions}
        queryParams={{
          sportFamilyId: sportFamilyId
        }}
      />
    </CardsContainer>
  )
}