"use client";

import RegistrationForm from "@/components/forms/registration.form";
import CustomModal from "../../common/modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="создать аккаунт"
      size="xl"
    >
      <RegistrationForm onClose={onClose}></RegistrationForm>
    </CustomModal>
  );
};

export default RegistrationModal;
