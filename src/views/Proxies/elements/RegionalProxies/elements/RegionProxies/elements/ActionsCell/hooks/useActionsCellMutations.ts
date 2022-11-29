import type {ActionsCellProps} from "../ActionsCell.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as proxiesApi from "features/proxies/proxies.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useActionsCellMutations = ({
  props
}: {
  props: Pick<ActionsCellProps, 'row'>
}) => {
  const queryClient = useQueryClient();

  const deleteProxy = useMutation<
    Awaited<ReturnType<typeof proxiesApi.deleteProxies>>,
    Error,
    unknown
  >({
    mutationKey: [QUERY_KEYS.PROXIES],
    mutationFn: () => proxiesApi.deleteProxies([Number(props.row.id)]),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROXIES])
  });

  const updateProxy = useMutation<
    Awaited<ReturnType<typeof proxiesApi.updateProxy>>,
    Error,
    Parameters<typeof proxiesApi.updateProxy>[1]
  >({
    mutationKey: [QUERY_KEYS.PROXIES],
    mutationFn: (body) => proxiesApi.updateProxy(Number(props.row.id), body),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROXIES])
  });

  return {
    deleteProxy,
    updateProxy
  }
}