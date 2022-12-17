import type {SelectorsHandlers} from "./useSelectorsHandlers.types";

import {useEffect} from "react";

export const useSelectorsLifecycle = ({
  onIsLoadingChange,
  onCrawlerNameChange,
  onInvalidCrawlersChange,
  onSelectorsChange
}: {
  onIsLoadingChange: SelectorsHandlers['handleIsLoadingChange'];
  onCrawlerNameChange: SelectorsHandlers['handleCrawlerNameChange'];
  onInvalidCrawlersChange: SelectorsHandlers['handleInvalidCrawlersChange'];
  onSelectorsChange: SelectorsHandlers['handleSelectorsChange'];
}) => {
  useEffect(onIsLoadingChange, [onIsLoadingChange]);
  useEffect(onCrawlerNameChange, [onCrawlerNameChange]);
  useEffect(onInvalidCrawlersChange, [onInvalidCrawlersChange]);
  useEffect(onSelectorsChange, [onSelectorsChange]);
}