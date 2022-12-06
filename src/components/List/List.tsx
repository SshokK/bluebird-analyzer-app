import type {ListProps} from "./List.types";
import type {FC} from 'react';

import React from 'react';
import {ICON_BUTTON_GROUP_ORIENTATIONS} from "../IconButtonGroup";
import {
  List as MUIList,
  ListItem as MUIListItem,
  ListItemButton as MUIListItemButton,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemTExt
} from '@mui/material';
import {Actions} from "../Actions";
import classnames from 'classnames';
import {useListData, useListHandlers, useListLifecycle} from "./hooks";
import './list.scss';

export const List: FC<ListProps> = (props) => {
  const { localState, localActions, prevProps } = useListData(props);

  const handlers = useListHandlers({
    props,
    localActions,
    prevProps
  });

  useListLifecycle({
    onSelectedOptionKeysPropChange: handlers.handleSelectedOptionKeysPropChange
  })

  return (
    <div className={classnames('BB-list__container', props.classNames?.container, {
      'BB-list__container--is-full-width': props.isFullWidth
    })}>
      {props.actions && (
        <Actions
          actions={props.actions}
          orientation={ICON_BUTTON_GROUP_ORIENTATIONS.COLUMN}
          classNames={{
            container: props.classNames?.actions
          }}
        />
      )}
      <MUIList
        disablePadding
        classes={{
          root: classnames('BB-list', props.classNames?.list, {
            'BB-list--is-full-width': props.isFullWidth
          })
        }}
      >
        {props.options?.map?.(option => {
          const isSelected = Boolean(localState.selectedOptions.find(({ key }) => key === option.key))

          return (
            <MUIListItem
              key={String(option.key)}
              classes={{
                root: classnames('BB-list__option', {
                  'BB-list__option--is-selected': isSelected
                })
              }}
              disablePadding
            >
              <MUIListItemButton
                selected={isSelected}
                onClick={handlers.handleOptionClick({
                  option,
                  isSelected
                })}
              >
                {option.icon && (
                  <MUIListItemIcon>
                    {option.icon}
                  </MUIListItemIcon>
                )}
                <MUIListItemTExt
                  primary={option.label}
                  secondary={option.caption}
                />
              </MUIListItemButton>
            </MUIListItem>
          )
        })}
      </MUIList>
    </div>
  )
}