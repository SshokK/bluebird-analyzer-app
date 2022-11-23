import type {Dispatch, SetStateAction} from "react";

export type TabsLocalState = {
  activeTabIndex: number;
}

export type TabsLocalActions = {
  setActiveTabIndex: Dispatch<SetStateAction<TabsLocalState['activeTabIndex']>>
}


export type TabsData = {
  localState: TabsLocalState;
  localActions: TabsLocalActions;
}