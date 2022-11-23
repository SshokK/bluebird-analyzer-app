import type {ModalProps} from "./Modal.types";
import type {FC} from 'react';

import React from 'react';

import {Fade as MUIGrow, Modal as MUIModal} from '@mui/material';
import {Typography, TYPOGRAPHY_TYPES} from "../Typography";
import {Card} from "../Card";
import {Button, BUTTON_FORM_ROLES} from "../Button";
import {Loader} from "../Loader";
import './modal.scss';
import {IconButton} from "../IconButton";
import {IconClose, IconCloseSquared} from "../Icons";

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
            icon={<IconClose />}
            onClick={onClose}
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