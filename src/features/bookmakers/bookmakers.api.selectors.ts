import type {ListOption} from "components";
import type {BookmakerSchema} from "./bookmakers.api.types";

import * as api from "./bookmakers.api";

export const formatBookmakersForList = (
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