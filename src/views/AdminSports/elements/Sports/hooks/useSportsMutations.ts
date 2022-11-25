import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useSportsMutations = () => {
  const queryClient = useQueryClient();

  const createSport = useMutation<
    Awaited<ReturnType<typeof sportsApi.createSport>>,
    Error,
    Parameters<typeof sportsApi.createSport>
  >({
    mutationKey: [QUERY_KEYS.SPORTS],
    mutationFn: (args) => sportsApi.createSport(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORTS]);
    }
  });

  const updateSport = useMutation<
    Awaited<ReturnType<typeof sportsApi.updateSport>>,
    Error,
    Parameters<typeof sportsApi.updateSport>
  >({
    mutationKey: [QUERY_KEYS.SPORTS],
    mutationFn: (args) => sportsApi.updateSport(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORTS]);
    }
  });
  
  const deleteSport = useMutation<
    Awaited<ReturnType<typeof sportsApi.deleteSport>>,
    Error,
    Parameters<typeof sportsApi.deleteSport>
  >({
    mutationKey: [QUERY_KEYS.SPORTS],
    mutationFn: (args) => sportsApi.deleteSport(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORTS]);
    }
  });
  
  return {
    createSport,
    updateSport,
    deleteSport
  }
}