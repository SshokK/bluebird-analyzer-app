import type {FC} from "react";
import type {PlayersProps} from "./Players.types";

import React from 'react';
import {ANIMATION_TIMING, PLAYERS_PER_PAGE, PLAYERS_TABLE_COLUMN_KEYS, PLAYERS_TABLE_COLUMNS} from "./Players.constants";
import { CardsContainer, Table} from "components";
import {
  usePlayersMutations,
  usePlayersQueries,
  usePlayersTableActions,
  usePlayersTableQueryOptions
} from './hooks';

export const Players: FC<PlayersProps> = ({ sportFamilyId }) => {
  const queries = usePlayersQueries({
    props: {
      sportFamilyId
    }
  });

  const mutations = usePlayersMutations()

  const tableQueryOptions = usePlayersTableQueryOptions({
    props: {
      sportFamilyId
    }
  });

  const tableActions = usePlayersTableActions({
    props: {
      sportFamilyId
    },
    mutations
  })

  return (
    <CardsContainer
      title={!sportFamilyId
        ? "Players"
        : `${queries.fetchSportFamily.data?.name} players`
      }
      isFullHeight
      animationTiming={ANIMATION_TIMING}
      shouldShowNoDataMessage={!sportFamilyId}
      noDataMessage="Select a sport family"
    >
      <Table
        columns={PLAYERS_TABLE_COLUMNS}
        actions={tableActions}
        rowId={PLAYERS_TABLE_COLUMN_KEYS.ID}
        limit={PLAYERS_PER_PAGE}
        queryOptions={tableQueryOptions}
        queryParams={{
          sportFamilyId: sportFamilyId
        }}
      />
    </CardsContainer>
  )
}