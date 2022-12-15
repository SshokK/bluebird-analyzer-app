import type {SelectorsHandlers} from "./useSelectorsHandlers.types";

import {useEffect} from "react";

export const useSelectorsLifecycle = ({
  onIsLoadingChange,
  onCrawlerNameChange,
  onInvalidCrawlersChange
}: {
  onIsLoadingChange: SelectorsHandlers['handleIsLoadingChange'];
  onCrawlerNameChange: SelectorsHandlers['handleCrawlerNameChange'];
  onInvalidCrawlersChange: SelectorsHandlers['handleInvalidCrawlersChange']
}) => {
  useEffect(onIsLoadingChange, [onIsLoadingChange]);
  useEffect(onCrawlerNameChange, [onCrawlerNameChange]);
  useEffect(onInvalidCrawlersChange, [onInvalidCrawlersChange])
}