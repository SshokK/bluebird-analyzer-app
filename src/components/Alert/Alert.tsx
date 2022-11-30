import type {FC, ReactElement, ReactNode} from 'react';
import React, {forwardRef} from 'react';
import type {AlertProps} from './Alert.types';
import classnames from 'classnames';
import {ALERT_TYPES} from './Alert.constants';
import {IconClose, IconError, IconInfo, IconSuccess, IconWarning} from '../Icons';
import {useAlertHandlers} from './hooks';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import './alert.scss';

const ALERT_ICONS: Record<ALERT_TYPES, ReactNode> = {
  [ALERT_TYPES.INFO]: <IconInfo className="BB-alert__icon" />,
  [ALERT_TYPES.ERROR]: <IconError className="BB-alert__icon" />,
  [ALERT_TYPES.WARNING]: <IconWarning className="BB-alert__icon" />,
  [ALERT_TYPES.SUCCESS]: <IconSuccess className="BB-alert__icon" />
};

export const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(({
  type,
  title,
  message,
  classNames,
  dataTestId,
  onClose,
  isClosable,
  children,
  ...restProps
}, ref): ReactElement => {
  const icon = type ? ALERT_ICONS[type] : null;

  const handlers = useAlertHandlers({
    props: {
      onClose
    }
  });

  return (
    <div
      ref={ref}
      data-testid={dataTestId}
      {...restProps}
      className={classnames('BB-alert', classNames?.container, {
        [`BB-alert--info`]: type === ALERT_TYPES.INFO,
        [`BB-alert--error`]: type === ALERT_TYPES.ERROR,
        [`BB-alert--warning`]: type === ALERT_TYPES.WARNING,
        [`BB-alert--success`]: type === ALERT_TYPES.SUCCESS
      })}
    >
      <div
        className={classnames(`BB-alert__content-wrapper`, {
          [`BB-alert__content-wrapper--is-centered`]: !title
        })}
      >
        <div className={`BB-alert__icon-wrapper`}>{icon}</div>
        <div className={`BB-alert__body`}>
          {title && (
            <Typography type={TYPOGRAPHY_TYPES.H6} className="BB-alert__title">
              {title}
            </Typography>
          )}
          <Typography type={TYPOGRAPHY_TYPES.OVERLINE}>
            {message}
          </Typography>
        </div>
        {children}
      </div>
      {isClosable && (
        <IconClose
          className={`BB-alert__close-icon`}
          onClick={handlers.handleClose}
        />
      )}
    </div>
  );
});

Alert.defaultProps = {
  type: ALERT_TYPES.INFO,
  title: undefined,
  content: undefined,
  className: undefined,
  dataTestId: '',
  isClosable: false,
  children: null
} as AlertProps;
