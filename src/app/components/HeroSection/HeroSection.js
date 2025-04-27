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
            variant="h3"
            className={styles.heroTitle}
          >
            COPY TRADING
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontStyle: "italic", mb: 2, color: "white" }}
            className={styles.heroTitle}
          >
            with Blackwell Invest
          </Typography>
          <StoreButtons />
          {/* <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mb={3}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/google-play.jpg"
                alt="Google Play"
                width={160}
                height={50}
                className="rounded-xl"
              />
            </Link>
            <Link
              href="https://apps.apple.com/gb/app/blackwell-invest/id1666036351"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/app-store.jpg"
                alt="App Store"
                width={160}
                height={50}
                className="rounded-xl"
              />
            </Link>
          </Stack> */}
        </div>
        <div className={styles.showOnMobile}>
          {/* <img
            src="/hand.png"
            alt="Blackwell Invest App"
            style={{
              width: "100%",
              maxWidth: "1520px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          /> */}
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
            variant="h5"
            className={styles.heroSubTitle}
          >
            Choose & Trade
          </Typography>
          <Typography
            variant="h5"
            className={styles.heroSubTitle2}
          >
            Ready-To-Go Strategies
          </Typography>
          <Typography
            variant="body2"
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
              sx={{ color: "white", borderWidth: 1.5, borderColor: "yellow" }}
            />
            <Chip
              label="Precious Metals"
              variant="outlined"
              sx={{
                color: "white",
                borderWidth: 1.5,
                borderColor: "#F37406",
              }}
            />
            <Chip
              label="Oil"
              variant="outlined"
              sx={{ color: "white", borderWidth: 1.5, borderColor: "red" }}
            />
            <Chip
              label="Indices"
              variant="outlined"
              sx={{
                color: "white",
                borderWidth: 1.5,
                borderColor: "#01f2f2",
              }}
            />
          </Stack>
          <Button
            variant="contained"
            color="warning"
            sx={{ fontWeight: 600 }}

            //   onClick={() => {}}
          >
            Register Now
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, fontStyle: "italic" }}
          >
            When you invest, your capital is at risk. Be prudent.
          </Typography>
        </div>
      </div>
    </section>
  );
}
