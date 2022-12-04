import type {FC} from "react";
import type {PlayersProps} from "./Players.types";

import React from 'react';
import {CardsContainer, Table} from "components";
import {usePlayersQueries, usePlayersTableQueryOptions} from './hooks';
import {ANIMATION_DELAY, PLAYERS_TABLE_COLUMNS} from "./Players.constants";

export const Players: FC<PlayersProps> = ({ sportFamilyId }) => {
  const queries = usePlayersQueries({
    props: {
      sportFamilyId
    }
  })

  const tableQueryOptions = usePlayersTableQueryOptions({
    props: {
      sportFamilyId
    }
  });

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
        queryOptions={tableQueryOptions}
        queryParams={{
          sportFamilyId: sportFamilyId
        }}
      />
    </CardsContainer>
  )
}