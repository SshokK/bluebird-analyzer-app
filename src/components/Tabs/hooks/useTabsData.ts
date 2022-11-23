import type {TabsProps} from "../Tabs.types";
import type {TabsData} from "./useTabsData.types";

import {useMemo, useState} from "react";
import {getInitialActiveTabIndex} from "./useTabsData.helpers";

export const useTabsData = ({ tabs, activeTabKey }: Pick<TabsProps, 'tabs' | 'activeTabKey'>): TabsData => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    getInitialActiveTabIndex({
      tabs,
      activeTabKey
    })
  );

  const localState: TabsData['localState'] = {
    activeTabIndex
  }

  const localActions: TabsData['localActions'] = useMemo(() => ({
    setActiveTabIndex
  }), []);

  return {
    localState,
    localActions
  }
}