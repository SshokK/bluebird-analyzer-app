import type {ModalProps} from "./Modal.types";
import type {FC} from 'react';

import React from 'react';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import {Card} from "../Card";
import {Button, BUTTON_FORM_ROLES} from "../Button";
import {Loader} from "../Loader";
import {ICON_BUTTON_SHAPES, ICON_BUTTON_TYPES, IconButton} from "../IconButton";
import {MODAL_SIZES} from "./Modal.constants";
import {IconClose} from "../Icons";
import classnames from 'classnames';
import * as MUI from '@mui/material';
import './modal.scss';

export const Modal: FC<ModalProps> = ({
  size,
  title,
  isOpen,
  isLoading,
  isSubmitDisabled,
  onClose,
  shouldRenderFooter,
  footerElements,
  onSubmit,
  children,
  classNames
}) => {
  return (
    <MUI.Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      classes={{
        root: classnames('BB-modal__container', classNames?.container)
      }}
    >
      <MUI.Grow in={isOpen}>
        <div className={classnames("BB-modal__inner-container", classNames?.innerContainer)}>
          <IconButton
            type={ICON_BUTTON_TYPES.TERTIARY}
            shape={ICON_BUTTON_SHAPES.SQUARE}
            icon={<IconClose />}
            onClick={onClose}
            classNames={{
              button: classnames('BB-modal__close-button', classNames?.closeButton)
            }}
          />
          <Loader isVisible={isLoading} shouldFitContainer />
          <Card classNames={{ container: classnames("BB-modal__content", classNames?.content, {
             [ `BB-modal__content--${size ?? MODAL_SIZES.SMALL}`]: true
            })
          }}>
            <form
              onSubmit={e => e.preventDefault()}
              className={classnames("BB-modal__form", classNames?.form )}
            >
              <header className={classnames("BB-modal__content-title", classNames?.header)}>
                <Typography type={TYPOGRAPHY_TYPES.H5}>
                  {title}
                </Typography>
              </header>
              {(Array.isArray(children) ? Boolean(children.length) : children) && (
                <main className={classnames("BB-modal__content-body", classNames?.body)}>
                  {children}
                </main>
              )}
              {shouldRenderFooter && (
                <footer className={classnames("BB-modal__content-footer", classNames?.footer)}>
                  {footerElements && (
                    <div className="BB-modal__content-footer-custom-container">
                      {footerElements}
                    </div>
                  )}
                  <div className="BB-modal__content-footer-buttons-container">
                    <Button
                      onClick={onSubmit}
                      formRole={BUTTON_FORM_ROLES.SUBMIT}
                      isDisabled={isLoading || isSubmitDisabled}
                    >
                      Submit
                    </Button>
                  </div>
                </footer>
              )}
            </form>
          </Card>
        </div>
      </MUI.Grow>
    </MUI.Modal>
  )
}