import type * as components from "components";
import type * as regionsApi from "./regions.api";

export const formatRegionsForList = (
  response: Awaited<ReturnType<typeof regionsApi.fetchRegions>>
): components.ListOption[] => {
  return response.results?.map?.(region => ({
    key: region.id,
    label: region.name,
    name: region.name
  })) ?? []
}

export const formatRegionsForSelect = (
  response: Awaited<ReturnType<typeof regionsApi.fetchRegions>>
): components.SelectOption[] => {
  return response.results?.map?.(region => ({
    value: region.id,
    label: region.name
  }))
}