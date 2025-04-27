"use client";
import styles from "./EasyAnalysis.module.scss";

import { Card, Box, Typography, CardMedia } from "@mui/material";

export default function EasyAnalysis() {
  return (
    <section className={styles.easyAnalysisContainer}>
      <div>
        <Typography
          variant="h3"
          className={styles.easyAnalysisTitle}
        >
          Easy Analysis
        </Typography>
        <Typography className={styles.description}>
          Instant clarity on the Masters’ profile. Get a snapshot of their trade
          history, profitability, risk, and portfolio all in one place.
        </Typography>
      </div>
      <div>
        <Box className={styles.phoneContainer}>
          <Box
            component="img"
            src="/mobile-2.png"
            alt="Phone Frame"
            className={styles.phoneImage}
          />

          <Card className={`${styles.functionCard} ${styles.functionCard1}`}>
            <CardMedia
              component="img"
              image="/analysis/function-1.png"
              alt="function 1"
            />
          </Card>

          <Card className={`${styles.functionCard} ${styles.functionCard2}`}>
            <CardMedia
              component="img"
              image="/analysis/function-2.png"
              alt="function 2"
            />
          </Card>

          <Card className={`${styles.functionCard} ${styles.functionCard3}`}>
            <CardMedia
              component="img"
              image="/analysis/function-3.png"
              alt="function 3"
            />
          </Card>

          <Card className={`${styles.functionCard} ${styles.functionCard4}`}>
            <CardMedia
              component="img"
              image="/analysis/function-4.png"
              alt="function 4"
            />
          </Card>

          <Card className={`${styles.functionCard} ${styles.functionCard5}`}>
            <CardMedia
              component="img"
              image="/analysis/function-5.png"
              alt="function 5"
            />
          </Card>
        </Box>
      </div>
    </section>
  );
}
