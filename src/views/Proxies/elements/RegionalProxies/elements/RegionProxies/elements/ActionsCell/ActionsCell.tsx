import type {FC} from "react";
import type {ActionsCellProps} from "./ActionsCell.types";

import React from 'react';
import {Actions} from "components";
import {useActionsCellActions, useActionsCellMutations} from "./hooks";

export const ActionsCell: FC<ActionsCellProps> = ({ row }) => {
  const mutations = useActionsCellMutations({
    props: {
      row
    }
  })

  const actions = useActionsCellActions({
    props: {
      row
    },
    mutations
  });

  return (
    <Actions actions={actions} />
  )
}