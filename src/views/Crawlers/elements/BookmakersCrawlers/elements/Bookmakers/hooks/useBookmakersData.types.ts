import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {Dispatch, SetStateAction} from "react";
import type {SORT_ORDERS} from "constants/global.constants";
import type * as bookmakersApi from "features/bookmakers/bookmakers.api";

export type BookmakersLocalState = {
  nameFilter: BookmakerSchema['name'];
  bookmakerId: BookmakerSchema['id'] | null;
  sortOrder: SORT_ORDERS | null;
}

export type BookmakersLocalActions = {
  setNameFilter: Dispatch<SetStateAction<BookmakersLocalState['nameFilter']>>;
  setBookmakerId: Dispatch<SetStateAction<BookmakersLocalState['bookmakerId']>>;
  setSortOrder: Dispatch<SetStateAction<BookmakersLocalState['sortOrder']>>;
}

export type BookmakersFormattedData = {
  requestParams: Parameters<typeof bookmakersApi.fetchBookmakers>[0]
}

export type BookmakersData = {
  localState: BookmakersLocalState;
  localActions: BookmakersLocalActions;
  formattedData: BookmakersFormattedData;
}