import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

export type BookmakersCrawlersProps = {
  onBookmakerIdChange?: (bookmakerId: EventCrawlerSchema['BookmakerId'] | null) => void;
}