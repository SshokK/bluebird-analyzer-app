import type {Dispatch, SetStateAction} from "react";
import type * as eventCrawlersApiSelectors from "features/event-crawlers/eventCrawlers.api.selectors";

export type CrawlersLocalState = {
  selectedRows: ReturnType<typeof eventCrawlersApiSelectors.formatEventCrawlersForTable>
}

export type CrawlersLocalActions = {
  setSelectedRows: Dispatch<SetStateAction<CrawlersLocalState['selectedRows']>>
}

export type CrawlersData = {
  localState: CrawlersLocalState;
  localActions: CrawlersLocalActions;
}