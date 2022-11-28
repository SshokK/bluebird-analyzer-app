import type {RegionalProxiesHandlers} from "./useRegionalProxiesHandlers.types";

import {QUERY_KEYS} from "constants/queries.constants";
import * as regionsApi from "features/regions/regions.api";

import {useMutation} from "@tanstack/react-query";

export const useRegionalProxiesMutations = ({
  onCreateRegionSuccess,
  onUpdateRegionSuccess,
  onDeleteRegionSuccess,
}: {
  onCreateRegionSuccess: RegionalProxiesHandlers['handleRegionCreationSuccess'];
  onUpdateRegionSuccess: RegionalProxiesHandlers['handleRegionUpdateSuccess'];
  onDeleteRegionSuccess: RegionalProxiesHandlers['handleRegionDeletionSuccess'];
}) => {
  const createRegion = useMutation<
    Awaited<ReturnType<typeof regionsApi.createRegion>>,
    Error,
    Parameters<typeof regionsApi.createRegion>
  >({
    mutationKey: [QUERY_KEYS.REGIONS],
    mutationFn: (args) => regionsApi.createRegion(...args),
    onSuccess: onCreateRegionSuccess
  });

  const updateRegion = useMutation<
    Awaited<ReturnType<typeof regionsApi.updateRegion>>,
    Error,
    Parameters<typeof regionsApi.updateRegion>
  >({
    mutationKey: [QUERY_KEYS.REGIONS],
    mutationFn: (args) => regionsApi.updateRegion(...args),
    onSuccess: onUpdateRegionSuccess
  });

  const deleteRegion = useMutation<
    Awaited<ReturnType<typeof regionsApi.deleteRegion>>,
    Error,
    Parameters<typeof regionsApi.deleteRegion>
  >({
    mutationKey: [QUERY_KEYS.REGIONS],
    mutationFn: (args) => regionsApi.deleteRegion(...args),
    onSuccess: onDeleteRegionSuccess
  });
  
  return {
    createRegion,
    updateRegion,
    deleteRegion
  }
}