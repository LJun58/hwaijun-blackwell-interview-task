import { Button } from "@mui/material";
import { useState } from "react";
import { RegisterModal } from "../Modal/registerModal";
import useUserStore from "@/app/store/user";

export default function RegisterButton() {
  const user = useUserStore((state) => state.user);
  const [isShowModal, setIsShowModal] = useState(false);

  if (user) return null;

  return (
    <>
      <Button
        variant="contained"
        color="register"
        onClick={() => setIsShowModal(true)}
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
