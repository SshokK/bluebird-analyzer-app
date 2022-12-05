import type {PlayerSchema} from "features/players/players.api.types";
import type {Dispatch, SetStateAction} from "react";

export type PlayersLocalState = {
  selectedRowKeys: PlayerSchema['id'][]
}

export type PlayersLocalActions = {
  setSelectedRowKeys: Dispatch<SetStateAction<PlayersLocalState['selectedRowKeys']>>
}

export type PlayersData = {
  localState: PlayersLocalState;
  localActions: PlayersLocalActions;
}