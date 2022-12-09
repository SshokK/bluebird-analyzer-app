import type * as components from "components";
import type * as sportsApi from "./sports.api";

export const formatSportsForSelect = (
  response: Awaited<ReturnType<typeof sportsApi.fetchSports>>
): components.SelectOption[] => {
  return response.results?.map?.(region => ({
    value: region.id,
    label: region.name
  }))
}