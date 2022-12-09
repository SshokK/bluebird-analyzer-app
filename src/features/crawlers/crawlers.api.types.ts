import type {CRAWLER_STATUSES} from "./crawlers.constants";
import type {RegionSchema} from "../regions/regions.api.types";

export type CrawlerSchema = {
  id: number;
  name: string;
  targetUrl: string;
  status: CRAWLER_STATUSES;
  RegionId: RegionSchema['id'];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}