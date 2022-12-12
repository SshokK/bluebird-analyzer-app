import type {ActionsCellProps} from "../ActionsCell.types";
import type {ActionsCellData} from "./useActionsCellData.types";

import {CRAWLER_STATUSES} from "features/crawlers/crawlers.constants";
import {EVENT_CRAWLERS_TABLE_COLUMN_KEYS} from "../../../EventCrawlers.constants";

import {useMemo, useState} from "react";

export const useActionsCellData = (props: Pick<ActionsCellProps, 'row'>): ActionsCellData => {
  const [isSelectorsModalOpen, setIsSelectorsModalOpen] = useState(false);

  const localState: ActionsCellData['localState'] = {
    isSelectorsModalOpen
  }

  const localActions: ActionsCellData['localActions'] = useMemo(() => ({
    setIsSelectorsModalOpen
  }), [])

  const formattedData: ActionsCellData['formattedData'] = useMemo(() => {
    const row = {
      id: Number(props.row.id),
      CrawlerId: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.CRAWLER_ID),
      name: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.NAME),
      targetUrl: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.TARGET_URL),
      status: props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS)
    } as ActionsCellData['formattedData']['row']

    const isActiveCrawler = [
      CRAWLER_STATUSES.ACTIVE,
      CRAWLER_STATUSES.WAITING
    ].includes(props.row.getValue(EVENT_CRAWLERS_TABLE_COLUMN_KEYS.STATUS));

    return {
      isActiveCrawler,
      row
    }
  }, [props.row]);

  return {
    localState,
    localActions,
    formattedData
  }
}