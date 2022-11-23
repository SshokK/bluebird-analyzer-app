import type {FC} from 'react';
import type {ChicletProps} from "./Chiclet.types";

import React from 'react';
import {Button} from "../Button";

export const Chiclet: FC<ChicletProps> = ({
  label,
  isDisabled,
  isDeletable,
  onClick,
  classNames
}) => {
  return (
    <Button
      isDisabled={isDisabled}
    >
      {label}
    </Button>
  )
}