import type {SportSchema} from "../sports/sports.api.types";
import type {BookmakerSchema} from "../bookmakers/bookmakers.api.types";
import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {SORT_ORDERS} from "../../constants/global.constants";
import {WithRequiredProperty} from "../../types/global.types";

export type EventCrawlerSchema = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  BookmakerId: BookmakerSchema['id'];
  SportId: SportSchema['id'];
  CrawlerId: CrawlerSchema['id'];

  Crawler?: CrawlerSchema;
  Sport?: SportSchema;
  Bookmaker?: BookmakerSchema;
}


export type FetchEventCrawlersPayload = [params: {
  name?: CrawlerSchema['name'];
  SportId?: EventCrawlerSchema['SportId'];
  BookmakerId?: EventCrawlerSchema['BookmakerId'];

  limit?: number;
  offset?: number;
  sortField?: Pick<EventCrawlerSchema, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
  sortOrder?: SORT_ORDERS;
}]
export type FetchEventCrawlersResponse = {
  results: WithRequiredProperty<Omit<EventCrawlerSchema, 'Sport'>, 'Crawler'>[],
  totalCount: number;
};
export type FetchEventCrawlers = (...args: FetchEventCrawlersPayload) => Promise<FetchEventCrawlersResponse>