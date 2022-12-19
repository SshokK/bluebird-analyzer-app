import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

export type EventCrawlersByStatusesChartProps = {
  bookmakerId: EventCrawlerSchema['BookmakerId'] | null;
}