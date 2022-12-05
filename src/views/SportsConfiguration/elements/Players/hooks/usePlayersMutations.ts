import type {RequestError} from "fetch";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";
import * as playersApi from "features/players/players.api";

export const usePlayersMutations = () => {
  const queryClient = useQueryClient();

  const createPlayer = useMutation<
    Awaited<ReturnType<typeof playersApi.createPlayer>>,
    RequestError,
    Parameters<typeof playersApi.createPlayer>
  >({
    mutationKey: [QUERY_KEYS.PLAYERS],
    mutationFn: (args) => playersApi.createPlayer(...args),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PLAYERS])
    }
  });

  return {
    createPlayer
  }
}