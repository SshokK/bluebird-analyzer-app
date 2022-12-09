import type {ActionsCellProps} from "../ActionsCell.types";
import type {RequestError} from "fetch";
import type {ServerErrorResponse} from "fetch";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES, useAlert} from "components";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import * as eventCrawlersApi from "features/event-crawlers/eventCrawlers.api";
import * as utils from "utils";

export const useActionsCellMutations = ({
  props
}: {
  props: Pick<ActionsCellProps, 'row'>
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();

  const updateEventCrawler = useMutation<
    Awaited<ReturnType<typeof eventCrawlersApi.updateEventCrawler>>,
    RequestError<ServerErrorResponse>,
    Parameters<typeof eventCrawlersApi.updateEventCrawler>[1]
  >({
    mutationKey: [QUERY_KEYS.EVENT_CRAWLERS],
    mutationFn: (body) => eventCrawlersApi.updateEventCrawler(Number(props.row.id), body),
    onError: utils.showServerErrorMessage(alert),
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Crawler updated'
      });

      queryClient.invalidateQueries([QUERY_KEYS.EVENT_CRAWLERS])
    }
  });

  const deleteEventCrawler = useMutation<
    Awaited<ReturnType<typeof eventCrawlersApi.deleteEventCrawler>>,
    RequestError,
    void
  >({
    mutationKey: [QUERY_KEYS.EVENT_CRAWLERS],
    mutationFn: () => eventCrawlersApi.deleteEventCrawler(Number(props.row.id)),
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Crawler deleted'
      });

      queryClient.invalidateQueries([QUERY_KEYS.EVENT_CRAWLERS])
    }
  });

  return {
    updateEventCrawler,
    deleteEventCrawler
  }
}