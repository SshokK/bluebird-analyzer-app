import type {RequestError} from "fetch";
import type {CrawlersProps} from "../Crawlers.types";

import {QUERY_KEYS} from "constants/queries.constants";

import * as sportsApi from "features/sports/sports.api";
import * as evnetCrawlersApi from "features/event-crawlers/eventCrawlers.api";
import * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";

import {useQuery} from "@tanstack/react-query";

export const useCrawlersQueries = ({ props }: {
  props: Pick<CrawlersProps, 'sportFamilyId' | 'sportId'>
}) => {
  const fetchSport = useQuery<
    Awaited<ReturnType<typeof sportsApi.fetchSport>>,
    RequestError
  >({
    queryKey: [QUERY_KEYS.SPORTS, props.sportFamilyId, props.sportId],
    queryFn: () => sportsApi.fetchSport(props.sportFamilyId, props.sportId),
  });

  const fetchCrawlers = useQuery<
    Awaited<ReturnType<typeof evnetCrawlersApi.fetchEventCrawlers>>,
    RequestError,
    ReturnType<typeof eventCrawlersApiSelectors.formatEventCrawlersForTable>
  >({
    queryKey: [QUERY_KEYS.CRAWLERS, {
      SportId: props.sportId
    }],
    queryFn: () => evnetCrawlersApi.fetchEventCrawlers({
      SportId: props.sportId,
      limit: 10,
      offset: 0
    }),
    select: eventCrawlersApiSelectors.formatEventCrawlersForTable
  });

  return {
    fetchSport,
    fetchCrawlers
  }
}