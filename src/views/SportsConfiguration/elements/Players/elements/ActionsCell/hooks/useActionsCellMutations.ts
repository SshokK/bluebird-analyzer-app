import type {ActionsCellProps} from "../ActionsCell.types";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES} from "components";

import * as playersApi from "features/players/players.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import { useAlert} from "components";

export const useActionsCellMutations = ({
  props
}: {
  props: Pick<ActionsCellProps, 'row'>
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();

  const deletePlayer = useMutation<
    Awaited<ReturnType<typeof playersApi.deletePlayer>>,
    Error,
    unknown
  >({
    mutationKey: [QUERY_KEYS.PLAYERS],
    mutationFn: () => playersApi.deletePlayer(Number(props.row.id)),
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Player deleted'
      });

      queryClient.invalidateQueries([QUERY_KEYS.PLAYERS])
    }
  });

  const updatePlayer = useMutation<
    Awaited<ReturnType<typeof playersApi.updatePlayer>>,
    Error,
    Parameters<typeof playersApi.updatePlayer>[1]
  >({
    mutationKey: [QUERY_KEYS.PLAYERS],
    mutationFn: (body) => playersApi.updatePlayer(Number(props.row.id), body),
    onSuccess: async () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Player updated'
      });

      await queryClient.invalidateQueries([QUERY_KEYS.PLAYERS])
    }
  });

  return {
    deletePlayer,
    updatePlayer
  }
}