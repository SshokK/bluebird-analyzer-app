import type {FC} from "react";
import type {CrawlerActionsProps} from "./CrawlerActions.types";

import React from 'react';
import {Actions, IconDelete} from "components";

export const CrawlerActions: FC<CrawlerActionsProps>= () => {
  return (
    <Actions actions={{
      'Delete': {
        icon: <IconDelete />
      }
    }} />
  )
}