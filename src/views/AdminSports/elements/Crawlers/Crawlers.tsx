import type {FC} from "react";
import type {CrawlersProps} from "./Crawlers.types";

import React from 'react';
import {CardsContainer} from "components";
import {useCrawlersQueries} from "./hooks";

export const Crawlers: FC<CrawlersProps> = ({ sportFamilyId, sportId }) => {
  const queries = useCrawlersQueries({
    props: {
      sportFamilyId,
      sportId
    }
  })

  return (
    <CardsContainer
      title={queries.fetchSport.data
        ? `${queries.fetchSport.data.name} crawlers`
        : ''
      }
      isAnimated
      isLoading={
        queries.fetchSport.isLoading ||
        queries.fetchCrawlers.isLoading
      }
      shouldShowNoDataMessage={!queries.fetchCrawlers.data?.length}
    >
      {queries.fetchCrawlers.data?.map?.(crawler => crawler.Crawler?.name)}
    </CardsContainer>
  )
}