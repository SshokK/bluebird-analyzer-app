import type {RequestError} from "fetch";
import type {EventCrawlersProps} from "../EventCrawlers.types";
import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";
import type {EventCrawlersData} from "./useEventCrawlersData.types";

import {QUERY_KEYS} from "constants/queries.constants";
import {ALERT_TYPES} from "components";

import * as eventCrawlersApi from "features/event-crawlers/eventCrawlers.api";

import { useAlert } from "components";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEventCrawlersMutations = ({
  props,
  localActions
}: {
  props: Pick<EventCrawlersProps, 'bookmakerId'>;
  localActions: EventCrawlersData['localActions']
}) => {
  const queryClient = useQueryClient();
  const alert = useAlert();
  
  const createEventCrawler = useMutation<
    Awaited<ReturnType<typeof eventCrawlersApi.createEventCrawler>>,
    RequestError,
    Pick<Parameters<typeof eventCrawlersApi.createEventCrawler>[0], 'name' | 'targetUrl' | 'regionId' | 'sportId'>
  >({
    mutationKey: [QUERY_KEYS.EVENT_CRAWLERS],
    mutationFn: (args) => {
      return eventCrawlersApi.createEventCrawler({
        ...args,
        bookmakerId: props.bookmakerId as EventCrawlerSchema['BookmakerId'],
      })
    },
    onSuccess: () => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: 'Crawler created'
      })
      
      queryClient.invalidateQueries([QUERY_KEYS.EVENT_CRAWLERS]);
    }
  });

  const stopEventCrawlers = useMutation({
    mutationKey: [QUERY_KEYS.EVENT_CRAWLERS],
    mutationFn: eventCrawlersApi.stopEventCrawlers,
    onSuccess: (updatedRowsCount) => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Stopped ${updatedRowsCount} event crawlers`
      })

      queryClient.invalidateQueries([QUERY_KEYS.EVENT_CRAWLERS]);

      localActions.setSelectedRowKeys([]);
    }
  });

  const startEventCrawlers = useMutation({
    mutationKey: [QUERY_KEYS.EVENT_CRAWLERS],
    mutationFn: eventCrawlersApi.startEventCrawlers,
    onSuccess: (updatedRowsCount) => {
      alert.showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Started ${updatedRowsCount} event crawlers`
      })

      queryClient.invalidateQueries([QUERY_KEYS.EVENT_CRAWLERS])

      localActions.setSelectedRowKeys([]);
    }
  });
  
  return {
    createEventCrawler,
    stopEventCrawlers,
    startEventCrawlers
  }
}