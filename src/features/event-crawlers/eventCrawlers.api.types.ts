import type {SportSchema} from "../sports/sports.api.types";
import type {BookmakerSchema} from "../bookmakers/bookmakers.api.types";
import type {CrawlerSchema} from "../crawlers/crawlers.api.types";
import type {SORT_ORDERS} from "constants/global.constants";
import type {WithRequiredProperty} from "types/global.types";

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
  sportId?: EventCrawlerSchema['SportId'];
  bookmakerId?: EventCrawlerSchema['BookmakerId'];

  limit?: number;
  offset?: number;
  sortField?: string;
  sortOrder?: SORT_ORDERS;
}]
export type FetchEventCrawlersResponse = {
  results: WithRequiredProperty<EventCrawlerSchema, 'Crawler' | 'Sport'>[],
  totalCount: number;
};
export type FetchEventCrawlers = (...args: FetchEventCrawlersPayload) => Promise<FetchEventCrawlersResponse>



export type CreateEventCrawlerPayload = [body: {
  name: CrawlerSchema['name'];
  targetUrl: CrawlerSchema['targetUrl'];
  sportId: EventCrawlerSchema['SportId'];
  bookmakerId: EventCrawlerSchema['BookmakerId'];
  regionId: EventCrawlerSchema['BookmakerId'];
}]
export type CreateEventCrawlerResponse = EventCrawlerSchema;
export type CreateEventCrawler = (...args: CreateEventCrawlerPayload) => Promise<CreateEventCrawlerResponse>



export type DeleteEventCrawlerPayload = [eventCrawlerId: EventCrawlerSchema['id']]
export type DeleteEventCrawlerResponse = void;
export type DeleteEventCrawler = (...args: DeleteEventCrawlerPayload) => Promise<DeleteEventCrawler>



export type UpdateEventCrawlerPayload = [eventCrawlerId: EventCrawlerSchema['id'], body: {
  name?: CrawlerSchema['name'];
  targetUrl?: CrawlerSchema['targetUrl'];
  status?: CrawlerSchema['status'];
}]
export type UpdateEventCrawlerResponse = EventCrawlerSchema;
export type UpdateEventCrawler = (...args: UpdateEventCrawlerPayload) => Promise<UpdateEventCrawlerResponse>



export type UpdateEventCrawlersPayload = [body: Record<EventCrawlerSchema['id'], {
  name?: CrawlerSchema['name'];
  targetUrl?: CrawlerSchema['targetUrl'];
  status?: CrawlerSchema['status'];
}>]
export type UpdateEventCrawlersResponse = number;
export type UpdateEventCrawlers = (...args: UpdateEventCrawlersPayload) => Promise<UpdateEventCrawlersResponse>


export type StopEventCrawlersPayload = [EventCrawlerSchema['id'][]]
export type StopEventCrawlersResponse = number;
export type StopEventCrawlers = (...args: StopEventCrawlersPayload) => Promise<StopEventCrawlersResponse>



export type StartEventCrawlersPayload = [EventCrawlerSchema['id'][]]
export type StartEventCrawlersResponse = number;
export type StartEventCrawlers = (...args: StartEventCrawlersPayload) => Promise<StartEventCrawlersResponse>