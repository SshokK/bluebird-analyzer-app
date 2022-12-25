import type {CrawlerSchema} from "../../features/crawlers/crawlers.api.types";

export type CrawlerLogsProps = {
  crawlerIds?: CrawlerSchema['id'][]
}