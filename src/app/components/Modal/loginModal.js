"use client";

import { useActionState, useEffect } from "react";
import { loginUser } from "@/app/actions/auth";
import useUserStore from "@/app/store/user";
import {
  Modal,
  Fade,
  Box,
  Typography,
  Grid,
  TextField,
  Stack,
  Button,
} from "@mui/material";

export function LoginModal({ open, onClose }) {
  const setUser = useUserStore((state) => state.setUser);
  const [state, formAction, isPending] = useActionState(loginUser, undefined);

  useEffect(() => {
    if (state?.success) {
      console.log("login success");
      setUser(state.user);
      console.log(state.user);
      onClose();
    }
  }, [state, setUser, onClose]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      keepMounted
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            width: "80%",
            maxWidth: 600,
            mx: "auto",
            mt: "10%",
            outline: "none",
          }}
        >
          <Typography
            variant="h5"
            mb={2}
          >
            Login to Your Account
          </Typography>

          <form action={formAction}>
            <Grid
              container
              spacing={2}
            >
              {[
                { label: "Email", name: "email", type: "email" },
                { label: "Password", name: "password", type: "password" },
              ].map(({ label, name, type = "text" }) => (
                <Grid
                  item
                  size={{ xs: 12 }}
                  key={name}
                >
                  <TextField
                    fullWidth
                    required
                    label={label}
                    name={name}
                    type={type}
                    error={!!state?.errors?.[name]}
                    helperText={state?.errors?.[name]?.[0]}
                    disabled={isPending}
                  />
                </Grid>
              ))}
            </Grid>

            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              mt={4}
            >
              <Button
                variant="text"
                color="error"
                onClick={onClose}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
