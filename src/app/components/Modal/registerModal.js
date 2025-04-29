"use client";

import { useActionState, useEffect } from "react";
import { registerUser } from "@/app/actions/auth";
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

export function RegisterModal({ open, onClose }) {
  const setUser = useUserStore((state) => state.setUser);
  const [state, formAction, isPending] = useActionState(registerUser, {});

  useEffect(() => {
    if (state?.success) {
      console.log("register and login success");
      setUser(state.user);
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
            Create Your Account
          </Typography>

          <form action={formAction}>
            <Grid
              container
              spacing={2}
            >
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email", type: "email" },
                { label: "Mobile", name: "mobile" },
                { label: "Country", name: "country" },
                { label: "Password", name: "password", type: "password" },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  type: "password",
                },
              ].map(({ label, name, type = "text" }) => (
                <Grid
                  item
                  size={{ xs: 12 }}
                  sm={name === "firstName" || name === "lastName" ? 6 : 12}
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
                {isPending ? "Registering..." : "Register"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
