"use client";

import styles from "./LinkMT4Acc.module.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RegisterButton from "../Buttons/RegisterButton";

export default function LinkMT4Acc() {
  const steps = [
    {
      title: "Install our app, “Blackwell Invest”",
      image: "/register/step-1.png",
    },
    {
      title: "Login OR create a new account",
      image: "/register/step-2.png",
    },
    {
      title: "Click “Account”",
      image: "/register/step-3.png",
    },
    {
      title: "Click “Link an account”",
      image: "/register/step-4.png",
    },
    {
      title: "Select “BlackwellGlobalAsia-Live” server",
      image: "/register/step-5.png",
    },
    {
      title:
        "Fill in your Blackwell Global trading account OR create a new account",
      image: "/register/step-6.png",
    },
    {
      title: "Click “Copy Trades”",
      image: "/register/step-7.png",
    },
    {
      title: "Click “Done”",
      image: "/register/step-8.png",
    },
  ];

  return (
    <section className={styles.linkMT4AccContainer}>
      <Typography
        variant="h3"
        className={styles.linkMT4AccTitle}
      >
        How to Link MT4 Account
      </Typography>

      <Box className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView="auto"
        >
          {steps.map((step, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "350px", position: "relative" }}
            >
              <Card className={styles.cardContainer}>
                <CardMedia
                  component="img"
                  image={step.image}
                  alt={step.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <Box className={styles.arrowOverlay}>
                  <img
                    src="/arrow.png"
                    alt="next step arrow"
                    className={styles.arrowImage}
                  />
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <RegisterButton />
    </section>
  );
}
