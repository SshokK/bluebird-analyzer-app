import type {ActionsProps} from "./Actions.types";
import type {FC} from "react";

import React from "react";
import {
  Dropdown,
  Grid,
  GRID_SPACING,
  ICON_BUTTON_SIZES,
  ICON_BUTTON_TYPES,
  IconButton,
  ModalForm,
  Tooltip
} from "components/index";
import classnames from 'classnames';
import {useActionsData, useActionsHandlers} from "./hooks";
import './actions.scss';

export const Actions: FC<ActionsProps> = ({
  actions,
  direction,
  justifyContent,
  isWrapDisabled,
  classNames
}) => {
  const { localState, localActions } = useActionsData();

  const handlers = useActionsHandlers({
    props: {
      actions
    },
    localActions
  })

  return (
    <>
      <Grid
        isChild
        isContainer
        xs="auto"
        direction={direction}
        justifyContent={justifyContent}
        isWrapDisabled={isWrapDisabled}
        spacing={GRID_SPACING.S}
        classNames={{
          container: classnames("BB-actions__container", classNames?.container)
        }}
      >
        {Object.entries(actions).map(([actionKey, action]) => (
          <Grid key={actionKey} isChild>
            <Dropdown
              isOpen={localState.openedDropdownKey === actionKey}
              onClose={handlers.handleDropdownClose}
              transformOrigin={action.dropdownTransformOrigin}
              anchorOrigin={action.dropdownAnchorOrigin}
              trigger={(
                <Tooltip title={action.tooltip}>
                  <IconButton
                    type={action.iconType ?? ICON_BUTTON_TYPES.SECONDARY}
                    size={action.iconSize ?? ICON_BUTTON_SIZES.MEDIUM}
                    icon={action.icon}
                    isPressed={localState.openedDropdownKey === actionKey}
                    isDisabled={action.isDisabled}
                    onClick={handlers.handleClick(actionKey)}
                  />
                </Tooltip>
              )}
            >
              {action.dropdownContent}
            </Dropdown>
            <ModalForm
              isOpen={localState.openedModalKey === actionKey}
              title={action.modalTitle}
              size={action.modalSize}
              fields={action.modalFields ?? {}}
              onClose={handlers.handleModalClose}
              onSubmit={handlers.handleModalSubmit(actionKey)}
            >
              {action.modalContent}
            </ModalForm>
          </Grid>
        ))}
      </Grid>
    </>
  )
}