import type {ActionsCellProps} from "../ActionsCell.types";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES} from "components";

import * as teamsApi from "features/teams/teams.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import { useAlert} from "components";

export const useActionsCellMutations = ({
  props
}: {
  props: Pick<ActionsCellProps, 'row'>
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();

  const deleteTeam = useMutation<
    Awaited<ReturnType<typeof teamsApi.deleteTeam>>,
    Error,
    unknown
  >({
    mutationKey: [QUERY_KEYS.TEAMS],
    mutationFn: () => teamsApi.deleteTeam(Number(props.row.id)),
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Team deleted'
      });

      queryClient.invalidateQueries([QUERY_KEYS.TEAMS])
    }
  });

  const updateTeam = useMutation<
    Awaited<ReturnType<typeof teamsApi.updateTeam>>,
    Error,
    Parameters<typeof teamsApi.updateTeam>[1]
  >({
    mutationKey: [QUERY_KEYS.TEAMS],
    mutationFn: (body) => teamsApi.updateTeam(Number(props.row.id), body),
    onSuccess: async () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Team updated'
      });

      await queryClient.invalidateQueries([QUERY_KEYS.TEAMS])
    }
  });

  return {
    deleteTeam,
    updateTeam
  }
}