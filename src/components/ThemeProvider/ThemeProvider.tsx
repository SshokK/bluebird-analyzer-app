import type {FC} from "react";
import type {ThemeProviderProps} from "./ThemeProvider.types";

import './theme-provider.scss';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return children;
}