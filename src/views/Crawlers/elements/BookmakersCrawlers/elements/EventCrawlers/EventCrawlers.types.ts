import type {BookmakerSchema} from "features/bookmakers/bookmakers.api.types";

export type CrawlersProps = {
  bookmakerId: BookmakerSchema['id'] | null;
}