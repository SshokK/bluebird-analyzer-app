import type {RegionProxiesData} from "./useRegionProxiesData.types";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES} from "components";
import {PROXY_STATUSES} from "features/proxies/proxies.constants";

import * as proxiesApi from "features/proxies/proxies.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import { useAlert} from "components";

export const useRegionProxiesMutations = ({ localState, localActions }: {
  localState: RegionProxiesData['localState'];
  localActions: RegionProxiesData['localActions'];
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();

  const deleteProxies = useMutation<
    Awaited<ReturnType<typeof proxiesApi.deleteProxies>>,
    Error,
    unknown
  >({
    mutationKey: [QUERY_KEYS.PROXIES],
    mutationFn: () => proxiesApi.deleteProxies(localState.selectedRowKeys),
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Deleted ${localState.selectedRowKeys.length} proxies`
      });

      localActions.setSelectedRowKeys([]);

      queryClient.invalidateQueries([QUERY_KEYS.PROXIES]);
    }
  });

  const createProxy = useMutation<
    Awaited<ReturnType<typeof proxiesApi.createProxy>>,
    Error,
    Parameters<typeof proxiesApi.createProxy>
  >({
    mutationKey: [QUERY_KEYS.PROXIES],
    mutationFn: (args) => proxiesApi.createProxy(...args),
    onMutate: () => {
      alert.showAlert({
        type: ALERT_TYPES.INFO,
        message: `Creating proxy`
      });
    },
    onSuccess: (proxy) => {
      if (proxy.status === PROXY_STATUSES.DEAD) {
        alert.showAlert({
          type: ALERT_TYPES.WARNING,
          message: `Created 1 proxy, but it didn't respond in time`
        });
      } else {
        alert.showAlert({
          type: ALERT_TYPES.SUCCESS,
          message: `Created 1 proxy`
        });
      }

      localActions.setSelectedRowKeys([]);

      queryClient.invalidateQueries([QUERY_KEYS.PROXIES])
    }
  })
  
  return {
    deleteProxies,
    createProxy
  }
}