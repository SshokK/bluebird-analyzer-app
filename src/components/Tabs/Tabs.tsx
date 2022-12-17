import type {FC} from 'react';
import type {TabsProps} from "./Tabs.types";

import React from 'react';
import * as MUI from '@mui/material';
import classnames from 'classnames';
import {useTabsData, useTabsHandlers} from "./hooks";
import './tabs.scss';

export const Tabs: FC<TabsProps> = ({ tabs, activeTabKey }) => {
  const { localState, localActions } = useTabsData({ tabs, activeTabKey });

  const handlers = useTabsHandlers({
    localActions
  })

  return (
    <div className={classnames("BB-tabs__container")}>
      <MUI.Tabs
        value={localState.activeTabIndex}
        onChange={handlers.handleTabChange}
        component="header"
        classes={{
          root: classnames("BB-tabs__header"),
          indicator: classnames("BB-tabs__header-indicator")
        }}>
        {tabs?.map(tab => (
          <MUI.Tab
            key={tab.key}
            label={tab.title}
            disableRipple
            classes={{
              root: classnames("BB-tabs__header-button"),
              selected: classnames("BB-tabs__header-button--is-selected")
            }}
          />
        ))}
      </MUI.Tabs>
      {tabs?.[localState.activeTabIndex]?.content}
    </div>
  )
}