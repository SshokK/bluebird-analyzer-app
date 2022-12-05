import type {Dispatch, SetStateAction} from "react";

export type DropzoneLocalState = {
  files: File[];
}

export type DropzoneLocalActions = {
  setFiles: Dispatch<SetStateAction<DropzoneLocalState['files']>>
}

export type DropzoneData = {
  localState: DropzoneLocalState;
  localActions: DropzoneLocalActions;
}