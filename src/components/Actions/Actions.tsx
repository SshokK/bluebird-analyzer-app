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
  ModalForm
} from "components/index";
import {useActionsData, useActionsHandlers} from "./hooks";

export const Actions: FC<ActionsProps> = ({
  actions,
  direction,
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
        isWrapDisabled={isWrapDisabled}
        spacing={GRID_SPACING.S}
        classNames={{
          container: classNames?.container
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
                <IconButton
                  type={action.iconType ?? ICON_BUTTON_TYPES.SECONDARY}
                  size={action.iconSize ?? ICON_BUTTON_SIZES.MEDIUM}
                  icon={action.icon}
                  isPressed={localState.openedDropdownKey === actionKey}
                  isDisabled={action.isDisabled}
                  onClick={handlers.handleClick(actionKey)}
                />
              )}
            >
              {action.dropdownContent}
            </Dropdown>
          </Grid>
        ))}
      </Grid>
      {localState.openedModalKey && (
        <ModalForm
          isOpen
          title={actions[localState.openedModalKey]?.modalTitle}
          size={actions[localState.openedModalKey]?.modalSize}
          fields={actions[localState.openedModalKey]?.modalFields ?? {}}
          onClose={handlers.handleModalClose}
          onSubmit={handlers.handleModalSubmit(localState.openedModalKey)}
        />
      )}
    </>
  )
}