import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

export type ErrorsListProps = {
  eventCrawlerId: EventCrawlerSchema['id'];
}