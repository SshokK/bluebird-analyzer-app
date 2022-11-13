import React from 'react';
import {Header as HeaderComponent} from "components";
import {NAV_LINKS} from "./Header.constants";

export const Header = () => {
  return <HeaderComponent navLinks={NAV_LINKS} />
}