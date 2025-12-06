"use client";

import LoginForm from "../../forms/login.form";
import CustomModal from "../../common/modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const loginModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Вход в акаунт"
      size="xl"
    >
      <LoginForm onClose={onClose}></LoginForm>
    </CustomModal>
  );
};

export default loginModal;
