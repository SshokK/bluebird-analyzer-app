import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";

export type EventCrawlersProps = {
  bookmakerId: BookmakerSchema['id'] | null;
}