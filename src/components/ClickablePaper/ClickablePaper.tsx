import type {ClickablePaperProps} from "./ClickablePaper.types";
import type {FC} from 'react';

import React from 'react';
import {Button, Paper} from "@mui/material";
import classnames from 'classnames';
import {CLICKABLE_PAPER_ICON_SIZES} from "./ClickablePaper.constants";
import {Typography, TYPOGRAPHY_ALIGNMENT, TYPOGRAPHY_TYPES} from "../Typography";
import {RestrictedBadge} from "../RestrictedBadge";
import './clickable-paper.scss';

export const ClickablePaper: FC<ClickablePaperProps> = ({
  icon,
  iconSize,
  title,
  titleTypographyType,
  onClick,
  onRestrictedClick,
  isDisabled,
  isRestricted,
  isActive,
  classNames,
  children,
  ...restProps
}) => {
  const paper = (
    <Paper
      disabled={isDisabled}
      component={(props) => <Button {...props} disableFocusRipple disableRipple={isActive} />}
      onClick={isRestricted ? onRestrictedClick : onClick}
      classes={{
        root: classnames(classNames?.container, {
          'BB-clickable-paper': true,
          'BB-clickable-paper--is-disabled': isDisabled,
          'BB-clickable-paper--is-active': isActive
        }),
      }}
      {...restProps}
    >
      {icon && (
        <span className={classnames('BB-clickable-paper__icon', classNames?.icon, {
          [`BB-clickable-paper__icon--is-${iconSize ?? CLICKABLE_PAPER_ICON_SIZES.M}`]: true
        })}>
          {icon}
        </span>
      )}
      <Typography type={titleTypographyType} alignment={TYPOGRAPHY_ALIGNMENT.CENTER}>
        {title}
      </Typography>
      {children}
    </Paper>
  )

  if (isRestricted) {
    return (
      <RestrictedBadge>
        {paper}
      </RestrictedBadge>
    )
  }

  return paper
}

ClickablePaper.defaultProps = {
  icon: undefined,
  title: undefined,
  titleTypographyType: TYPOGRAPHY_TYPES.BUTTON,
  onClick: undefined,
  classNames: undefined
} as ClickablePaperProps