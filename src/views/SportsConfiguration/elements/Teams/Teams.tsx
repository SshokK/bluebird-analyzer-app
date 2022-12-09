import type {FC} from "react";
import type {TeamsProps} from "./Teams.types";

import React from 'react';
import {CardsContainer, Table} from "components";
import {useTeamsMutations, useTeamsQueries, useTeamsTableActions, useTeamsTableQueryOptions} from './hooks';
import {ANIMATION_DELAY, TEAMS_PER_PAGE, TEAMS_TABLE_COLUMNS} from "./Teams.constants";

export const Teams: FC<TeamsProps> = ({ sportFamilyId, sportId }) => {
  const queries = useTeamsQueries({
    props: {
      sportId
    }
  });

  const mutations = useTeamsMutations();

  const tableQueryOptions = useTeamsTableQueryOptions({
    props: {
      sportId
    }
  });

  const tableActions = useTeamsTableActions({
    props: {
      sportId
    },
    mutations
  })

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
        actions={tableActions}
        limit={TEAMS_PER_PAGE}
        columns={TEAMS_TABLE_COLUMNS}
        queryOptions={tableQueryOptions}
        queryParams={{
          sportId: sportId
        }}
      />
    </CardsContainer>
  )
}