import type {ListOption} from "components";
import type {BookmakerSchema} from "./bookmakers.api.types";

import * as api from "./bookmakers.api";

export const getBookmakersForList = (
  response: Awaited<ReturnType<typeof api.fetchBookmakers>>
): (ListOption & {
  bookmaker: BookmakerSchema
})[] => {
  return response.map(bookmaker => ({
    key: bookmaker.id,
    label: bookmaker.name,
    imageSrc: bookmaker.imageUrl ?? '',
    imageAlt: bookmaker.name,
    bookmaker: bookmaker
  }))
}

export const getBookmakerNameById = (id: BookmakerSchema['id'] | null) => (
  response: Awaited<ReturnType<typeof api.fetchBookmakers>>
): BookmakerSchema['name'] | null => {
  const bookmaker = response.find(bookmaker => bookmaker.id === id);
  return bookmaker?.name ?? null;
}