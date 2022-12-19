import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";

export type CrawlerErrorsByTypeChartProps = {
  eventCrawlerIds?: EventCrawlerSchema['id'][]
}