import type {FC} from "react";
import type {Accept} from "react-dropzone";

import {IconAddFile, IconAddImage} from "../Icons";

export enum DROPZONE_FILE_TYPES {
  ALL = 'all',
  IMAGES = 'images'
}

export const DROPZONE_ACCEPTED_FILES: Record<DROPZONE_FILE_TYPES, Accept | undefined> = {
  [DROPZONE_FILE_TYPES.ALL]: undefined,
  [DROPZONE_FILE_TYPES.IMAGES]: {
    'image/png': ['.png'],
    'image/jpeg': ['.jpeg', '.jpg'],
  }
}

export const DROPZONE_ICONS: Record<DROPZONE_FILE_TYPES, FC<{ className?: string }>> = {
  [DROPZONE_FILE_TYPES.ALL]: IconAddFile,
  [DROPZONE_FILE_TYPES.IMAGES]: IconAddImage
}