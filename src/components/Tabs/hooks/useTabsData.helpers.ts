import type {TabsProps} from "../Tabs.types";

export const getInitialActiveTabIndex = ({ tabs, activeTabKey }: Pick<TabsProps, 'tabs' | 'activeTabKey'>) => {
  const index = tabs?.findIndex(tab => tab.key === activeTabKey) ?? 0;

  return index >= 0 ? index : 0
}