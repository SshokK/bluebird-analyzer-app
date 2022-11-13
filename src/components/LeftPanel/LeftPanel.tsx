import type {LeftPanelProps} from "./LeftPanel.types";
import type {FC} from 'react';

import React from 'react';
import {ClickablePaper, Loader, TYPOGRAPHY_TYPES} from "components";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import './left-panel.scss';

export const LeftPanel: FC<LeftPanelProps> = ({ options, onOptionClick, onOptionRestrictedClick, isLoading }) => {
  const location = useLocation();

  return (
    <nav className="BB-left-panel__container">
      <Loader isVisible={isLoading} shouldFitContainer />
      {options?.map?.((option, i) => {
        const paper = (
          <ClickablePaper
            key={String(option.value)}
            title={option.label}
            titleTypographyType={TYPOGRAPHY_TYPES.H6}
            icon={option.icon}
            onClick={onOptionClick?.(option)}
            onRestrictedClick={onOptionRestrictedClick?.(option)}
            isDisabled={option.isDisabled}
            isRestricted={option.isRestricted}
            isActive={Boolean(option.link && location.pathname.includes(option.link))}
            classNames={{
              container: "BB-left-panel__button"
            }}
          />
        )

        if (option.link) {
          return (
            <Link
              key={String(option.value)}
              to={option.link}
              className="BB-left-panel__button"
            >
              {paper}
            </Link>
          )
        }

        return paper
      })}
    </nav>
  )
}