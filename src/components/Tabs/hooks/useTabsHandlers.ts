import type {TabsHandlers} from "./useTabsHandlers.types";
import type {TabsData} from "./useTabsData.types";

export const useTabsHandlers = ({
  localActions
}: {
  localActions: TabsData['localActions']
}): TabsHandlers => {
  const handleTabChange: TabsHandlers['handleTabChange'] = (e, activeTabIndex) => {
    localActions.setActiveTabIndex(activeTabIndex);
  }

  return {
    handleTabChange
  }
}