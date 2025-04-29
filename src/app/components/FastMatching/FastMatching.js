"use client";
import styles from "./FastMatching.module.scss";

import { Card, Box, Typography } from "@mui/material";

export default function FastMatching() {
  const featuresList = [
    "Spotlight",
    "Top Strategies ",
    "Low Drawdown",
    "Medium Drawdown",
    "High Drawdown",
    "New Strategies",
  ];

  return (
    <section className={styles.fastMatchingContainer}>
      <div>
        <Typography
          variant="h3"
          className={styles.fastMatchingTitle}
        >
          Fast Matching
        </Typography>
        <Typography
          variant="h4"
          className={styles.description}
          // maxWidth={800}
        >
          Zero in on your ideal Master effortlessly. Sort by performance and
          drawdown levels or discover opportunities from new signals with our
          smart filters. Still can’t decide? Simply head over to Spotlight for
          quality signals curated by us.
        </Typography>
      </div>

      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: 300,
              height: 650,
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              boxShadow: 5,
              margin: "3em",
            }}
          >
            <Box
              component="img"
              src="/mobile-1.png"
              alt="Phone Frame"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "0%",
                width: "100%",
                height: "90.8%",
                zIndex: 2,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <video
                src="/mobile-video.mov"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Card>
          <Box
            sx={{
              minWidth: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ul>
              {featuresList.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1em",
                  }}
                >
                  <img
                    src="/list-icon.png"
                    alt="icon"
                    style={{
                      marginRight: "0.5em",
                    }}
                  />
                  <Typography className={styles.featureList}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </div>
    </section>
  );
}
