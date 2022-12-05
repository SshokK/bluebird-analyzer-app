import type {DropzoneHandlers} from "./useDropzoneHandlers.types";
import type {DropzoneData} from "./useDropzoneData.types";
import type {DropzoneProps} from "../Dropzone.types";

import {useCallback} from "react";

export const useDropzoneHandlers = ({
  props,
  localState,
  localActions
}: {
  props: Pick<DropzoneProps, 'onChange' | 'maxFilesCount'>
  localState: DropzoneData['localState'],
  localActions: DropzoneData['localActions']
}): DropzoneHandlers => {
  const handleDrop: DropzoneHandlers['handleDrop'] = (newFiles) => {
    localActions.setFiles((files) => {
      if (props.maxFilesCount && (files.length + newFiles.length) > props.maxFilesCount) {
        return files
      }

      return [...files, ...newFiles]
    });
  }

  const handleFileRemove: DropzoneHandlers['handleFileRemove'] = (fileIndex) => (e) => {
    e.stopPropagation();

    localActions.setFiles(files => {
      return files.filter((file, i) => i !== fileIndex)
    })
  }

  const handleFilesChange: DropzoneHandlers['handleFilesChange'] = useCallback(() => {
    props.onChange?.(localState.files)
  }, [localState.files, props])

  return {
    handleDrop,
    handleFileRemove,
    handleFilesChange
  }
}