import type {FC} from 'react';
import type {HeaderProps} from "./Header.types";

import React from 'react';
import {NavLink, Link} from "react-router-dom";
import { AppBar } from '@mui/material';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import './header.scss';

export const Header: FC<HeaderProps> = ({ navLinks }) => {
  return (
    <AppBar
      position="relative"
      classes={{
        root: 'BB-header__container'
      }}
    >
      <Link to="/">
        <img src="" alt="Logo" className="BB-header__logo" />
      </Link>
      <nav className="BB-header__nav-links-container">
        {navLinks?.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="BB-header__nav-link"
          >
            <Typography type={TYPOGRAPHY_TYPES.BUTTON}>
              {link.title}
            </Typography>
          </NavLink>
        ))}
      </nav>
    </AppBar>
  )
}