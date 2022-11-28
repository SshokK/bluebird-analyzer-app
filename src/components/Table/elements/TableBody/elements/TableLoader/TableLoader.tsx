import type {FC} from "react";
import type {TableLoaderProps} from "./TableLoader.types";

import React from 'react';
import {Loader} from "../../../../../Loader";

export const TableLoader: FC<TableLoaderProps> = ({
  isLoading
}) => {
  return (
    <tr>
      <td>
        <Loader isVisible={isLoading} shouldFitContainer />
      </td>
    </tr>
  )
}