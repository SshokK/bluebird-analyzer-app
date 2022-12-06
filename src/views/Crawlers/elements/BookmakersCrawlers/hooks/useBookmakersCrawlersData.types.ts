import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {Dispatch, SetStateAction} from "react";

export type BookmakersCrawlersLocalState = {
  bookmakerId: BookmakerSchema['id'] | null;
}

export type BookmakersCrawlersLocalActions = {
  setBookmakerId: Dispatch<SetStateAction<BookmakersCrawlersLocalState['bookmakerId']>>
}

export type BookmakersCrawlersData = {
  localState: BookmakersCrawlersLocalState;
  localActions: BookmakersCrawlersLocalActions;
}