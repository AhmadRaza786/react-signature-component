import React from 'react';
import { ModalOverlay, ModalContent, NavBar, Title, ModalBody, Bar, CloseButton, SubmitButton } from './modal.styled';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
}

/**
 * Component to render the Popup Modal
 * @param {ModalProps} 
 */
const Modal: React.FC<ModalProps> = ({ open, onClose, onSubmit, children }: ModalProps) => {
  return (
    <ModalOverlay open={open}>
      <ModalContent>
      <NavBar>
        <Title>Add Signature</Title>
      </NavBar>
      <ModalBody>
        {children}
      </ModalBody> 
      <Bar>
        <CloseButton onClick={onClose}>
          Cancel
        </CloseButton>
        <SubmitButton disabled={!onSubmit} onClick={onSubmit}>
          Done
        </SubmitButton>
      </Bar>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
