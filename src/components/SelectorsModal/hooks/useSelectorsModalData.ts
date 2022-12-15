import {useMemo, useState} from "react";

export const useSelectorsModalData = () => {
  const [crawlerName, setCrawlerName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [areAllSelectorsValid, setAreAllSelectorsValid] = useState(false);

  const localState = {
    crawlerName,
    isLoading,
    areAllSelectorsValid
  }

  const localActions = useMemo(() => ({
    setCrawlerName,
    setIsLoading,
    setAreAllSelectorsValid
  }), []);

  return {
    localState,
    localActions
  }
}