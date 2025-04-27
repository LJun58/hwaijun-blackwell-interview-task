"use client";
import styles from "./EnquiryForm.module.scss";

import {
  Typography,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <section className={styles.enquiryFormContainer}>
      <Box
        component="img"
        src="/bg-3.png"
        className={styles.bgImage}
      />
      <Box className={styles.contentWrapper}>
        <Typography
          variant="h3"
          className={styles.enquiryFormTitle}
        >
          Enquire Now
        </Typography>

        <form
          onSubmit={handleSave}
          className={styles.enquiryForm}
        >
          <Grid
            container
            spacing={3}
            wrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Name"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Email"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Mobile No."
                variant="outlined"
                required
                fullWidth
                size="large"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Country of Residence</InputLabel>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  label="Country of Residence"
                >
                  <MenuItem value="Malaysia">Singapore</MenuItem>
                  <MenuItem value="Vietnam">United States</MenuItem>
                  <MenuItem value="Thailand">India</MenuItem>
                  <MenuItem value="Others">Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Enter your message here"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>

            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              size="large"
              color="warning"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Grid>
        </form>
      </Box>
    </section>
  );
}
