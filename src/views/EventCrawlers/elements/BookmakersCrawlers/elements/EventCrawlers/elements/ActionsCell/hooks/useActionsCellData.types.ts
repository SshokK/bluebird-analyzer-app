import type {CrawlerSchema} from "features/crawlers/crawlers.api.types";
import type {EventCrawlerSchema} from "features/event-crawlers/eventCrawlers.api.types";
import type {Dispatch, SetStateAction} from "react";

export type ActionsCellLocalState = {
  isSelectorsModalOpen: boolean;
}

export type ActionsCellLocalActions = {
  setIsSelectorsModalOpen: Dispatch<SetStateAction<ActionsCellLocalState['isSelectorsModalOpen']>>;
}

export type ActionsCellDataFormattedData = {
  row: Pick<EventCrawlerSchema, 'id' | 'CrawlerId'> & Pick<CrawlerSchema, 'name' | 'targetUrl' | 'status'>;
  isActiveCrawler: boolean;
  isFailedCrawler: boolean;
}


export type ActionsCellData = {
  formattedData: ActionsCellDataFormattedData;
  localState: ActionsCellLocalState;
  localActions: ActionsCellLocalActions;
}