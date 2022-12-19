import type {BookmakersCrawlersHandlers} from "./useBookmakersCrawlersHandlers.types";

import {useEffect} from "react";

export const useBookmakersCrawlersLifecycle = ({
  onBookmakerIdChange
}: {
  onBookmakerIdChange: BookmakersCrawlersHandlers['handleBookmakerIdChange']
}) => {
  useEffect(onBookmakerIdChange, [onBookmakerIdChange])
}