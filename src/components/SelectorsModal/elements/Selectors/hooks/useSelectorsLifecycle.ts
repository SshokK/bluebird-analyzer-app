import type {SelectorsHandlers} from "./useSelectorsHandlers.types";

import {useEffect} from "react";

export const useSelectorsLifecycle = ({
  onIsLoadingChange,
  onCrawlerNameChange
}: {
  onIsLoadingChange: SelectorsHandlers['handleIsLoadingChange'];
  onCrawlerNameChange: SelectorsHandlers['handleCrawlerNameChange']
}) => {
  useEffect(onIsLoadingChange, [onIsLoadingChange]);
  useEffect(onCrawlerNameChange, [onCrawlerNameChange]);
}