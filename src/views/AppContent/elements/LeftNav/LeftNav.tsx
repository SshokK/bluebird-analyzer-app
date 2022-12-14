import React from "react";
import {LeftPanel} from "components";
import {useLeftNavQueries} from "./hooks";

export const LeftNav = () => {
  const queries = useLeftNavQueries();

  return (
    <LeftPanel
      isLoading={queries.fetchSportFamilies.isLoading}
      options={queries.fetchSportFamilies.data}
    />
  )
}