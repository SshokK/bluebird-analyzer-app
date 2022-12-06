import type {ListProps} from "components";

import * as api from "./bookmakers.api";

export const formatBookmakersForList = (
  response: Awaited<ReturnType<typeof api.fetchBookmakers>>
): ListProps['options'] => {
  return response.map(bookmaker => ({
    key: bookmaker.id,
    label: bookmaker.name
  }))
}