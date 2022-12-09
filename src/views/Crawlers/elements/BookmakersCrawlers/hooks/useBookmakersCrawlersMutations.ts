import type {BookmakersCrawlersData} from "./useBookmakersCrawlersData.types";
import type {RequestError} from "fetch";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES} from "components";

import * as bookmakersApi from "features/bookmakers/bookmakers.api";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import { useAlert} from "components";

export const useBookmakersCrawlersMutations = ({
  localState
}: {
  localState: BookmakersCrawlersData['localState']
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();
  
  const createBookmaker = useMutation<
    Awaited<ReturnType<typeof bookmakersApi.createBookmaker>>,
    RequestError,
    Parameters<typeof bookmakersApi.createBookmaker>
  >({
    mutationKey: [QUERY_KEYS.BOOKMAKERS],
    mutationFn: (args) => bookmakersApi.createBookmaker(...args),
    onSuccess: (response) => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Bookmaker created: ${response.name}`
      });
      
      queryClient.invalidateQueries([QUERY_KEYS.BOOKMAKERS]);
    }
  });

  const updateBookmaker = useMutation<
    Awaited<ReturnType<typeof bookmakersApi.updateBookmaker>>,
    RequestError,
    Parameters<typeof bookmakersApi.updateBookmaker>
  >({
    mutationKey: [QUERY_KEYS.BOOKMAKERS],
    mutationFn: (args) => bookmakersApi.updateBookmaker(...args),
    onSuccess: (response) => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Bookmaker updated: ${response.name}`
      });

      queryClient.invalidateQueries([QUERY_KEYS.BOOKMAKERS]);
    }
  });

  const deleteBookmaker = useMutation<
    Awaited<ReturnType<typeof bookmakersApi.deleteBookmaker>>,
    RequestError,
    unknown
  >({
    mutationKey: [QUERY_KEYS.BOOKMAKERS],
    mutationFn: async () => {
      if (localState.bookmakerId) {
        await bookmakersApi.deleteBookmaker(localState.bookmakerId)
      }
    },
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Bookmaker deleted`
      });

      queryClient.invalidateQueries([QUERY_KEYS.BOOKMAKERS]);
    }
  });
  
  return {
    createBookmaker,
    updateBookmaker,
    deleteBookmaker
  }
}