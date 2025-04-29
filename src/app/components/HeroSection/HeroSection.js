import React from "react";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  Chip,
  Link,
} from "@mui/material";
import StoreButtons from "../Buttons/StoreButton";
import RegisterButton from "../Buttons/RegisterButton";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.imageContainer} ${styles.hideOnMobile}`}>
        <Image
          src="/hand.png"
          alt="Blackwell Invest App"
          width={800}
          height={920}
          className={styles.handImage}
        />
      </div>

      <div className={styles.content}>
        <div>
          <Typography
            variant="h1"
            className={styles.heroTitle}
          >
            COPY TRADING
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontStyle: "italic", mb: 2, color: "white" }}
            // className={styles.heroSubTitle}
          >
            with Blackwell Invest
          </Typography>
          <StoreButtons />
        </div>
        <div className={styles.showOnMobile}>
          <Image
            src="/hand.png"
            alt="Blackwell Invest App"
            width={800}
            height={920}
            className={styles.handImage}
          />
        </div>
        <div className={styles.overlapContent}>
          <Typography
            variant="h3"
            className={styles.heroSubTitle}
          >
            Choose & Trade
          </Typography>
          <Typography
            variant="h3"
            className={styles.heroSubTitle2}
          >
            Ready-To-Go Strategies
          </Typography>
          <Typography
            variant="body1"
            mb={3}
            className={styles.description}
          >
            Browse and copy hundreds of investment strategies developed by
            master traders! Whether you're a pro or beginner, you can now trade
            quicker and more confidently.
          </Typography>

          <Stack
            direction="row"
            gap={1}
            mb={3}
          >
            <Chip
              label="Forex"
              variant="outlined"
              color="yellow"
            />
            <Chip
              label="Precious Metals"
              variant="outlined"
              color="orange"
            />
            <Chip
              label="Oil"
              variant="outlined"
              color="red"
            />
            <Chip
              label="Indices"
              variant="outlined"
              color="ligthBlue"
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 1,
              m: 1,
              borderRadius: 1,
            }}
          >
            <RegisterButton />

            <Typography variant="caption">
              When you invest, your capital is at risk. Be prudent.
            </Typography>
          </Box>
        </div>
      </div>
    </section>
  );
}
