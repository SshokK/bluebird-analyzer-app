import type {ListProps} from "./List.types";
import type {FC} from 'react';

import React from 'react';
import * as MUI from '@mui/material';
import {Actions, ACTIONS_ORIENTATIONS} from "../Actions";
import classnames from 'classnames';
import {useListData, useListHandlers, useListLifecycle} from "./hooks";
import {ListOption} from "./elements";
import {Grid, GRID_DIRECTION, GRID_JUSTIFY_CONTENT, GRID_SPACING} from "../Grid";
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
    <Grid
      isContainer
      direction={GRID_DIRECTION.COLUMN}
      spacing={GRID_SPACING.L}
      classNames={{
        container: classnames('BB-list__container', props.classNames?.container, {
          'BB-list__container--is-full-width': props.isFullWidth
        })
      }}
    >
      <Grid isChild isContainer justifyContent={GRID_JUSTIFY_CONTENT.FLEX_END}>
        <Actions actions={props.secondaryActions ?? {}} orientation={ACTIONS_ORIENTATIONS.ROW} />
      </Grid>
      <Grid isChild isContainer spacing={GRID_SPACING.L}>
        <Grid isChild xs="auto">
          <Actions actions={props.primaryActions ?? {}} orientation={ACTIONS_ORIENTATIONS.COLUMN} />
        </Grid>
        <Grid isChild xs>
          <MUI.List
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
                <ListOption
                  key={String(option.key)}
                  option={option}
                  isSelected={Boolean(localState.selectedOptions.find(({ key }) => key === option.key))}
                  onClick={handlers.handleOptionClick({
                    option,
                    isSelected
                  })}
                />
              )
            })}
          </MUI.List>
        </Grid>
      </Grid>
    </Grid>
  )
}