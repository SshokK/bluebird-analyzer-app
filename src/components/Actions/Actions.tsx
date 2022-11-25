import type {ActionsProps} from "./Actions.types";
import type {FC} from "react";
import React from "react";
import {
  ICON_BUTTON_SIZES,
  ICON_BUTTON_TYPES,
  IconButton,
  IconButtonGroup,
  ModalForm
} from "components/index";
import {useActionsData, useActionsHandlers} from "./hooks";

export const Actions: FC<ActionsProps> = ({
  actions
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
      <IconButtonGroup>
        {Object.entries(actions).map(([actionKey, action]) => (
          <IconButton
            key={actionKey}
            type={action.iconType ?? ICON_BUTTON_TYPES.SECONDARY}
            size={action.iconSize ?? ICON_BUTTON_SIZES.MEDIUM}
            icon={action.icon}
            isDisabled={action.isDisabled}
            onClick={handlers.handleClick(actionKey)}
          />
        ))}
      </IconButtonGroup>
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