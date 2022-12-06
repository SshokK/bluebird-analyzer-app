import type {QUERY_PARAMS} from "./Bookmakers.constants";
import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";

export type QueryParams = {
  [QUERY_PARAMS.BOOKMAKER_ID]: BookmakerSchema['id'] | null;
}

export type BookmakersProps = {
  onSelectedBookmakerChange: (bookmakerId: BookmakerSchema['id'] | null) => void;
}