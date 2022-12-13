import {useMemo, useState} from "react";

export const useSelectorsModalData = () => {
  const [crawlerName, setCrawlerName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const localState = {
    crawlerName,
    isLoading
  }

  const localActions = useMemo(() => ({
    setCrawlerName,
    setIsLoading
  }), []);

  return {
    localState,
    localActions
  }
}