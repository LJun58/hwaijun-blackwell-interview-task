import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { RegisterModal } from "../Modal/registerModal";

export default function RegisterButton() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="register"
        onClick={(e) => {
          setIsShowModal(true);
          e.stopPropagation();
        }}
      >
        Register Now
      </Button>

      <RegisterModal
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
      />
    </>
  );
}
