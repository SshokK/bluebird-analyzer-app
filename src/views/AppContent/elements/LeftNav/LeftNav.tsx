import React from "react";
import {LeftPanel} from "components";
import {useLeftNavQueries} from "./hooks";

export const LeftNav = () => {
  const queries = useLeftNavQueries();

  return (
    <LeftPanel
      isLoading={queries.fetchSports.isLoading}
      options={queries.fetchSports.data}
    />
  )
}