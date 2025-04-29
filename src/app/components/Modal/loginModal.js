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
import { useTheme } from "@mui/material/styles";

export function LoginModal({ open, onClose }) {
  const setUser = useUserStore((state) => state.setUser);
  const [state, formAction, isPending] = useActionState(loginUser, undefined);
  const theme = useTheme();

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
            borderRadius: 5,
            width: "80%",
            maxWidth: 600,
            outline: "none",

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h3"
            mb={2}
            color="primary.main"
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
                    variant="outlined"
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
              justifyContent="space-between"
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
                color="confirm"
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
