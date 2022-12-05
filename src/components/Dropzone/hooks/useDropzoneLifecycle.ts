import type {DropzoneHandlers} from "./useDropzoneHandlers.types";

import {useEffect} from "react";

export const useDropzoneLifecycle = ({
  onFilesChange
}: {
  onFilesChange: DropzoneHandlers['handleFilesChange']
}) => {
  useEffect(onFilesChange, [onFilesChange])
}