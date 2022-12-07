import type {ListOptionProps} from "./ListOption.types";
import type {FC} from "react";
import React from 'react';
import * as MUI from "@mui/material";
import classnames from "classnames";
import {Avatar, AVATAR_SIZES} from "../../../Avatar";
import './list-option.scss';
import {Typography, TYPOGRAPHY_TYPES} from "../../../Typography";

export const ListOption: FC<ListOptionProps> = ({
  option,
  isSelected,
  onClick
}) => {
  return (
    <MUI.ListItem
      key={String(option.key)}
      classes={{
        root: classnames('BB-list-option', {
          'BB-list-option--is-selected': isSelected
        })
      }}
      disablePadding
    >
      <MUI.ListItemButton
        selected={isSelected}
        onClick={onClick}
      >
        {option.icon && (
          <MUI.ListItemIcon>
            {option.icon}
          </MUI.ListItemIcon>
        )}
        <MUI.ListItemText
          primary={
            <Typography type={TYPOGRAPHY_TYPES.BUTTON} className='BB-list-option__label'>
              {option.label}
            </Typography>
          }
          secondary={option.caption}
        />
        {option.imageSrc && (
          <Avatar
            src={option.imageSrc}
            alt={option.imageAlt}
            size={AVATAR_SIZES.SMALL}
          />
        )}
      </MUI.ListItemButton>
    </MUI.ListItem>
  )
}