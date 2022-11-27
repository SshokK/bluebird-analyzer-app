import {QUERY_KEYS} from "constants/queries.constants";

import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useSportFamiliesMutations = () => {
  const queryClient = useQueryClient();

  const createSportFamily = useMutation<
    Awaited<ReturnType<typeof sportFamiliesApi.createSportFamily>>,
    Error,
    Parameters<typeof sportFamiliesApi.createSportFamily>
  >({
    mutationKey: [QUERY_KEYS.SPORT_FAMILIES],
    mutationFn: (args) => sportFamiliesApi.createSportFamily(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORT_FAMILIES]);
    }
  });

  const updateSportFamily = useMutation<
    Awaited<ReturnType<typeof sportFamiliesApi.updateSportFamily>>,
    Error,
    Parameters<typeof sportFamiliesApi.updateSportFamily>
  >({
    mutationKey: [QUERY_KEYS.SPORT_FAMILIES],
    mutationFn: (args) => sportFamiliesApi.updateSportFamily(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORT_FAMILIES]);
    }
  });
  
  const deleteSportFamily = useMutation<
    Awaited<ReturnType<typeof sportFamiliesApi.deleteSportFamily>>,
    Error,
    Parameters<typeof sportFamiliesApi.deleteSportFamily>
  >({
    mutationKey: [QUERY_KEYS.SPORT_FAMILIES],
    mutationFn: (args) => sportFamiliesApi.deleteSportFamily(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORT_FAMILIES]);
    }
  });
  
  return {
    createSportFamily,
    updateSportFamily,
    deleteSportFamily
  }
}