import type {FC} from "react";
import type {DropzoneProps} from "./Dropzone.types";

import React from 'react';
import {useDropzone} from 'react-dropzone';
import {DROPZONE_ACCEPTED_FILES, DROPZONE_FILE_TYPES, DROPZONE_ICONS} from "./Dropzone.constants";
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import * as MUI from "@mui/material";
import {Chiclet} from "../Chiclet";
import {CHICLET_SIZES} from "../Chiclet/Chiclet.constants";
import {Separator} from "../Separator";
import {Grid, GRID_ALIGN_ITEMS, GRID_DIRECTION, GRID_JUSTIFY_CONTENT, GRID_SPACING} from "../Grid";
import {useDropzoneData, useDropzoneHandlers, useDropzoneLifecycle} from "./hooks";
import './dropzone.scss';

export const Dropzone: FC<DropzoneProps> = ({
  value,
  fileType = DROPZONE_FILE_TYPES.ALL,
  maxFilesCount,
  isRequired,
  isDisabled,
  label,
  isClickDisabled,
  isDragDisabled,
  onChange
}) => {
  const { localState, localActions } = useDropzoneData({ value });

  const handlers = useDropzoneHandlers({
    props: {
      onChange,
      maxFilesCount
    },
    localState,
    localActions
  });

  useDropzoneLifecycle({
    onFilesChange: handlers.handleFilesChange
  })

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    disabled: isDisabled,
    noDrag: isDragDisabled,
    noClick: isClickDisabled,
    maxFiles: maxFilesCount,
    onDropAccepted: handlers.handleDrop,
    accept: DROPZONE_ACCEPTED_FILES[fileType]
  });

  const Icon = DROPZONE_ICONS[fileType];

  return (
    <MUI.FormControl required={isRequired}>
      <MUI.FormLabel required={isRequired} component="label">
        {label}
      </MUI.FormLabel>
      <Grid
        {...getRootProps()}
        classNames={{ container: "BB-dropzone"}}
        isContainer
        isWrapDisabled
      >
        <Grid
          isChild
          isContainer
          xs={7}
          direction={GRID_DIRECTION.COLUMN}
          justifyContent={!localState.files.length ? GRID_JUSTIFY_CONTENT.CENTER : GRID_JUSTIFY_CONTENT.FLEX_START}
          alignItems={!localState.files.length ? GRID_ALIGN_ITEMS.CENTER : GRID_ALIGN_ITEMS.FLEX_START}
          spacing={GRID_SPACING.XS}
          classNames={{
            container: "BB-dropzone__accepted-files"
          }}
        >
          {!localState.files.length && (
            <Grid
              isChild
              shouldSetZeroMinWidth
              classNames={{ container: 'BB-dropzone__item' }}
            >
              <Typography
                type={TYPOGRAPHY_TYPES.BUTTON}
                shouldTruncate
                className="BB-dropzone__message"
              >
                {isDragActive
                  ? 'Drop the files here ...'
                  : 'Drag \'n\' drop files'
                }
              </Typography>
            </Grid>
          )}
          {localState.files.map?.((file, i) => (
            <Grid
              key={`${file.name}-${file.size}-${i}`}
              isChild
              shouldSetZeroMinWidth
              classNames={{ container: 'BB-dropzone__item' }}
            >
              <Chiclet
                size={CHICLET_SIZES.SMALL}
                isDeletable
                isFullWidth
                onDelete={handlers.handleFileRemove(i)}
              >
                {file.name}
              </Chiclet>
            </Grid>
          ))}
        </Grid>
        <input {...getInputProps()}/>
        <Grid isChild xs="auto">
          <Separator isVertical />
        </Grid>
        <Grid
          isChild
          isContainer
          xs={3}
          justifyContent={GRID_JUSTIFY_CONTENT.CENTER}
          alignItems={GRID_ALIGN_ITEMS.CENTER}
        >
          <Icon className="BB-dropzone__icon"/>
        </Grid>
      </Grid>
    </MUI.FormControl>
  )
}