import type * as api from "./crawlerPageSelectors.api";
import type {SelectOption} from "components";

export const formatValueTypesForSelect = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerPageSelectorValueTypes>>
): SelectOption[] => {
  return response?.results?.map?.(valueType => ({
    value: valueType,
    label: valueType
  })) ?? []
}

export const formatDataKeysForSelect = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerPageSelectorDataKeys>>
): SelectOption[] => {
  return response?.results?.map?.(dataKey => ({
    value: dataKey,
    label: dataKey
  })) ?? []
}

export const formaTargetTypesForSelect = (
  response: Awaited<ReturnType<typeof api.fetchCrawlerPageSelectorTargetTypes>>
): SelectOption[] => {
  return response?.results?.map?.(targetType => ({
    value: targetType,
    label: targetType
  })) ?? []
}