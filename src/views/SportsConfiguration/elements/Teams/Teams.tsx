import type {FC} from "react";
import type {TeamsProps} from "./Teams.types";

import React from 'react';
import {CardsContainer, Table} from "components";
import {useTeamsQueries, useTeamsTableQueryOptions} from './hooks';
import {ANIMATION_DELAY, TEAMS_TABLE_COLUMNS} from "./Teams.constants";

export const Teams: FC<TeamsProps> = ({ sportFamilyId, sportId }) => {
  const queries = useTeamsQueries({
    props: {
      sportFamilyId,
      sportId
    }
  })

  const tableQueryOptions = useTeamsTableQueryOptions({
    props: {
      sportId
    }
  });

  return (
    <CardsContainer
      title={(!sportId || !sportFamilyId)
        ? "Teams"
        : `${queries.fetchSport.data?.name} teams`
      }
      isFullHeight
      shouldShowNoDataMessage={!sportId}
      animationDelay={ANIMATION_DELAY}
      noDataMessage="Select a sport"
    >
      <Table
        columns={TEAMS_TABLE_COLUMNS}
        queryOptions={tableQueryOptions}
        queryParams={{
          sportId: sportId
        }}
      />
    </CardsContainer>
  )
}