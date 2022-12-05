import type {PlayersData} from "./usePlayersData.types";

import {useMemo, useState} from "react";

export const usePlayersData = (): PlayersData => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<PlayersData['localState']["selectedRowKeys"]>([]);

  const localState: PlayersData["localState"] = {
    selectedRowKeys
  }

  const localActions: PlayersData['localActions'] = useMemo(() => ({
    setSelectedRowKeys
  }), []);

  return {
    localState,
    localActions
  }
}