import React from 'react';
import { Header, LeftNav } from "./elements";
import {Outlet} from "react-router";
import './app-content.scss';

export const AppContent = () => {
  return (
    <>
      <Header />
      <main className="BB-app-content__container">
        {/*<LeftNav />*/}
        <Outlet />
      </main>
    </>
  )
}