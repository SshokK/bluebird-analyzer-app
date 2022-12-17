import type {FC} from "react";
import type {SelectorNodeContentProps} from "./SelectorNodeContent.types";

import React from 'react';
import { Actions} from "components";
import {isCrawlerPageSelectorValid} from "features/crawler-page-selectors/crawlerPageSelectors.utils";
import {useSelectorNodeContentActions} from "./hooks";
import classnames from 'classnames';
import {ListItem} from "./elements";
import './selector-node-content.scss';

export const SelectorNodeContent: FC<SelectorNodeContentProps> = ({ crawlerPageSelector, onSelectorChange, isEditable, isSelected }) => {
  const actions = useSelectorNodeContentActions({
    props: {
      crawlerPageSelector,
      isEditable,
      onSelectorChange
    }
  });

  return (
    <div className={classnames("BB-selector-node-content__container", {
      "BB-selector-node-content__container--is-invalid": !isCrawlerPageSelectorValid(crawlerPageSelector),
      "BB-selector-node-content__container--is-selected": isSelected
    })}>
      <ul className="BB-selector-node-content__list">
        <ListItem
          label="Target type"
          value={crawlerPageSelector.targetType}
        />
        <ListItem
          label="Value"
          value={crawlerPageSelector.value}
        />
        <ListItem
          label="Value Type"
          value={crawlerPageSelector.valueType}
        />
        <ListItem
          label="Data key"
          value={crawlerPageSelector.dataKey}
        />
      </ul>
      <div className='BB-selector-node-content__actions'>
        <Actions
          actions={actions}
        />
      </div>
    </div>
  )
}