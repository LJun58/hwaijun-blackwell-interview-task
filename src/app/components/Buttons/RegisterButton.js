import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { RegisterModal } from "../Modal/registerModal";

export default function RegisterButton() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="warning"
        sx={{
          width: "100%",
          height: "50px",
          fontSize: { xs: "0.5rem", sm: "1rem", md: "1.3rem" },
          padding: "0 16px",
          whiteSpace: "normal",
          overflow: "hidden",
          textOverflow: "clip",
        }}
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
