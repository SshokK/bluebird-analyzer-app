import type {ListProps} from "./List.types";
import type {FC} from 'react';

import React from 'react';
import {Grid, GRID_DIRECTION, GRID_JUSTIFY_CONTENT, GRID_SPACING} from "../Grid";
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";

import {ListOption} from "./elements";
import {Actions} from "../Actions";
import * as MUI from '@mui/material';

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
  });

  const primaryActions = (
    <Actions
      actions={props.primaryActions ?? {}}
      direction={props.isHorizontal ? GRID_DIRECTION.ROW : GRID_DIRECTION.COLUMN}
    />
  );
  const secondaryActions = (
    <Actions actions={props.secondaryActions ?? {}} direction={GRID_DIRECTION.ROW} />);

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
      <Grid
        isChild
        isContainer
        justifyContent={props.isHorizontal ? GRID_JUSTIFY_CONTENT.SPACE_BETWEEN : GRID_JUSTIFY_CONTENT.FLEX_END}
      >
        {props.isHorizontal && primaryActions}
        {secondaryActions}
      </Grid>
      <Grid isChild isContainer spacing={GRID_SPACING.L}>
        {!props.isHorizontal && (
          <Grid isChild xs="auto">
            {primaryActions}
          </Grid>
        )}
        <Grid isChild xs={props.isHorizontal ? 12 : true}>
          {props.shouldShowNoDataMessage ? (
            <Typography type={TYPOGRAPHY_TYPES.BODY2} className="BB-list__no-data-message">
              {props.noDataMessage}
            </Typography>
          ) : (
            <MUI.List
              disablePadding
              classes={{
                root: classnames('BB-list', props.classNames?.list, {
                  'BB-list--is-full-width': props.isFullWidth,
                  'BB-list--is-horizontal': props.isHorizontal
                })
              }}
            >
              {props.options?.map?.(option => {
                const isSelected = Boolean(localState.selectedOptions.find(({ key }) => key === option.key))

                return (
                  <ListOption
                    key={String(option.key)}
                    option={option}
                    isHorizontal={props.isHorizontal}
                    isSelected={Boolean(localState.selectedOptions.find(({ key }) => key === option.key))}
                    onClick={handlers.handleOptionClick({
                      option,
                      isSelected
                    })}
                  />
                )
              })}
            </MUI.List>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}