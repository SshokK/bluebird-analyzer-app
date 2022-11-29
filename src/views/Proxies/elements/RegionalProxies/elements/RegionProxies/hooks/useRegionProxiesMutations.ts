import type {RegionProxiesData} from "./useRegionProxiesData.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as proxiesApi from "features/proxies/proxies.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useRegionProxiesMutations = ({ localState }: {
  localState: RegionProxiesData['localState']
}) => {
  const queryClient = useQueryClient();

  const deleteProxies = useMutation<
    Awaited<ReturnType<typeof proxiesApi.deleteProxies>>,
    Error,
    unknown
  >({
    mutationKey: [QUERY_KEYS.PROXIES],
    mutationFn: () => proxiesApi.deleteProxies(localState.selectedRowKeys),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROXIES])
  });
  
  return {
    deleteProxies
  }
}