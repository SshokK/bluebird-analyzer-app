import type {ModalProps} from "./Modal.types";
import type {FC} from 'react';
import React from 'react';

import {Fade as MUIGrow, Modal as MUIModal} from '@mui/material';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import {Card} from "../Card";
import {Button, BUTTON_FORM_ROLES} from "../Button";
import {Loader} from "../Loader";
import {ICON_BUTTON_TYPES, IconButton} from "../IconButton";
import {IconClose} from "../Icons";
import './modal.scss';

export const Modal: FC<ModalProps> = ({ title, isOpen, isLoading, isSubmitDisabled, onClose, shouldRenderFooter, onSubmit, children }) => {
  return (
    <MUIModal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      classes={{
        root: 'BB-modal__container'
      }}
    >
      <MUIGrow in={isOpen}>
        <div className="BB-modal__inner-container">
          <IconButton
            type={ICON_BUTTON_TYPES.TERTIARY}
            icon={<IconClose />}
            onClick={onClose}
            isSquared
            classNames={{
              button: 'BB-modal__close-button'
            }}
          />
          <Loader isVisible={isLoading} shouldFitContainer />
          <Card classNames={{ container: "BB-modal__content" }}>
            <form onSubmit={e => e.preventDefault()}>
              <header className="BB-modal__content-title">
                <Typography type={TYPOGRAPHY_TYPES.H5}>
                  {title}
                </Typography>
              </header>
              <main className="BB-modal__content-body">
                {children}
              </main>
              {shouldRenderFooter && (
                <footer className="BB-modal__content-footer">
                  <Button
                    onClick={onSubmit}
                    formRole={BUTTON_FORM_ROLES.SUBMIT}
                    isDisabled={isLoading || isSubmitDisabled}
                  >
                    Submit
                  </Button>
                </footer>
              )}
            </form>
          </Card>
        </div>
      </MUIGrow>
    </MUIModal>
  )
}