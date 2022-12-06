import type {BookmakersHandlers} from "./useBookmakersHandlers.types";

import {useEffect} from "react";

export const useBookmakersLifecycle = ({
  onBookmakerIdChange
}: {
  onBookmakerIdChange: BookmakersHandlers['handleBookmakerIdChange']
}) => {
  useEffect(onBookmakerIdChange, [onBookmakerIdChange])
}