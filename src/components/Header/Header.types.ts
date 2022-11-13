import type {ReactNode} from "react";

export type NavLink = {
  path: string;
  title: ReactNode;
}

export type HeaderProps = {
  navLinks?: NavLink[]
}