import type {AddSportFamilyModalData} from "./useAddSportFamilyModalData.types";
import type {AddSportFamilyModalProps} from "../AddSportFamilyModal.types";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "constants/queries.constants";
import * as sportFamiliesApi from "features/sport-families/sportFamilies.api";

export const useAddSportFamilyModalMutations = ({
  props,
  localState,
  localActions
}: {
  props: Pick<AddSportFamilyModalProps, 'onClose'>;
  localState: AddSportFamilyModalData['localState'];
  localActions: AddSportFamilyModalData['localActions'];
}) => {
  const queryClient = useQueryClient();

  const createSportFamily = useMutation({
    mutationKey: [QUERY_KEYS.SPORT_FAMILIES],
    mutationFn: () => sportFamiliesApi.createSportFamily({
      name: localState.name
    }),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.SPORT_FAMILIES]);
      localActions.setName('');
      props.onClose?.();
    }
  });

  return {
    createSportFamily
  }
}