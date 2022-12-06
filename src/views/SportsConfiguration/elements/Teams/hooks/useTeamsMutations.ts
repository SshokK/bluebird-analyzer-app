import type {RequestError} from "fetch";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";

import * as teamsApi from "features/teams/teams.api";

export const useTeamsMutations = () => {
  const queryClient = useQueryClient();

  const createTeam = useMutation<
    Awaited<ReturnType<typeof teamsApi.createTeam>>,
    RequestError,
    Parameters<typeof teamsApi.createTeam>
  >({
    mutationKey: [QUERY_KEYS.TEAMS],
    mutationFn: (args) => teamsApi.createTeam(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TEAMS])
    }
  });

  return {
    createTeam
  }
}