import { Button } from "@mui/material";
import BasicModal from "shared/ui/BasicModal/BasicModal";
import { Suspense, memo } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import PageLoader from "widgets/PageLoader";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo(({ isOpen, onClose }: LoginModalProps) => {
  return (
    <BasicModal open={isOpen} onClose={onClose}>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync onSuccess={onClose} />
        <Button onClick={onClose}>close</Button>
      </Suspense>
    </BasicModal>
  );
});
