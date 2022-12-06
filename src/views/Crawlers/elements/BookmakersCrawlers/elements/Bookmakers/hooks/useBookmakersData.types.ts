import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";
import type {Dispatch, SetStateAction} from "react";

export type BookmakersLocalState = {
  bookmakerId: BookmakerSchema['id'] | null
}

export type BookmakersLocalActions = {
  setBookmakerId: Dispatch<SetStateAction<BookmakersLocalState['bookmakerId']>>
}

export type BookmakersData = {
  localState: BookmakersLocalState;
  localActions: BookmakersLocalActions;
}