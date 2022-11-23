import type {ReactNode} from "react";

export type Tab = {
  key: string | number;
  title?: ReactNode;
  content?: ReactNode;
}

export type TabsProps = {
  activeTabKey?: Tab['key'];
  tabs?: Tab[]
}