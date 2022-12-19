import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {Dispatch, SetStateAction} from "react";
import type {SORT_ORDERS} from "constants/global.constants";
import type * as bookmakersApi from "features/bookmakers/bookmakers.api";

export type BookmakersCrawlersLocalState = {
  nameFilter: BookmakerSchema['name'];
  bookmakerId: BookmakerSchema['id'] | null;
  sortOrder: SORT_ORDERS | null;
}

export type BookmakersCrawlersLocalActions = {
  setNameFilter: Dispatch<SetStateAction<BookmakersCrawlersLocalState['nameFilter']>>;
  setBookmakerId: Dispatch<SetStateAction<BookmakersCrawlersLocalState['bookmakerId']>>;
  setSortOrder: Dispatch<SetStateAction<BookmakersCrawlersLocalState['sortOrder']>>;
}

export type BookmakersCrawlersFormattedData = {
  requestParams: Parameters<typeof bookmakersApi.fetchBookmakers>[0]
}

export type BookmakersCrawlersData = {
  localState: BookmakersCrawlersLocalState;
  localActions: BookmakersCrawlersLocalActions;
  formattedData: BookmakersCrawlersFormattedData;
}