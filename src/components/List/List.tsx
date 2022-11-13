import type {ListProps} from "./List.types";
import type {FC} from 'react';

import React from 'react';
import { List as MUIList, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const List: FC<ListProps> = ({ options }) => {
  return (
    <MUIList disablePadding>
      {options?.map?.(option => (
        <ListItem key={String(option.value)}   disablePadding>
          <ListItemButton>
            {option.icon && (
              <ListItemIcon>
                {option.icon}
              </ListItemIcon>
            )}
            <ListItemText
              primary={option.label}
              secondary={option.caption}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </MUIList>
  )
}