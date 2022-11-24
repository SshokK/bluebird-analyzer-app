import type {CRAWLER_STATUSES} from "./crawlers.constants";

export type CrawlerSchema = {
  id: number;
  name: string;
  targetUrl: string;
  status: CRAWLER_STATUSES;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}