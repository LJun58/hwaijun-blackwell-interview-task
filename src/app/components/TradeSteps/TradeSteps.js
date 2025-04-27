"use client";

import { useState, useEffect } from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./TradeSteps.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import StoreButtons from "../Buttons/StoreButton";

export default function StepsLayout() {
  const [activeStep, setActiveStep] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Install our app, "Blackwell Invest"',
      image: "/guide/guide-1.png",
    },
    {
      number: 2,
      title: 'Choose a signal Master and click "Copy"',
      image: "/guide/guide-2.png",
    },
    {
      number: 3,
      title: "Set your trade size preferences",
      image: "/guide/guide-3.png",
    },
    { number: 4, title: 'Click "Agree and Copy"', image: "/guide/guide-4.png" },
  ];

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  const handleWheel = (event) => {
    if (isScrolling) return;

    const scrollingDown = event.deltaY > 0;
    const scrollingUp = event.deltaY < 0;

    if (
      (scrollingUp && activeStep === 1) ||
      (scrollingDown && activeStep === steps.length)
    ) {
      // If at first step (scroll up) or last step (scroll down), back to default scrolling
      return;
    }

    event.preventDefault(); // Block page scroll, scroll only whithin this component

    setIsScrolling(true);

    if (scrollingDown) {
      setActiveStep((prev) => Math.min(prev + 1, steps.length));
    } else if (scrollingUp) {
      setActiveStep((prev) => Math.max(prev - 1, 1));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 700);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeStep, isScrolling]);

  return (
    <section className={styles.tradeStepsContainer}>
      <Box
        component="img"
        src="/bg-1.png"
        className={styles.bgImage}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          paddingTop: "15%",
          textAlign: "center",
        }}
      >
        <Typography className={styles.tradeStepsTitle}>
          Trade Like a Pro in Minutes
        </Typography>

        <Grid
          container
          className={styles.gridContainer}
        >
          <Grid size={{ xs: 12 }}>
            <Box className={styles.stepContent}>
              <Box className={styles.stepsList}>
                {steps.map((step) => (
                  <Card
                    key={step.number}
                    className={`${styles.stepCard} ${
                      activeStep === step.number ? styles.activeStepCard : ""
                    }`}
                    onClick={() => handleStepClick(step.number)}
                  >
                    <Box className={styles.stepCardContent}>
                      <Typography
                        variant="h4"
                        className={`${styles.stepNumber} ${
                          activeStep === step.number
                            ? styles.activeText
                            : styles.inactiveText
                        }`}
                      >
                        {step.number}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={`${styles.stepTitle} ${
                          activeStep === step.number
                            ? styles.activeText
                            : styles.inactiveText
                        }`}
                      >
                        {step.title}
                      </Typography>
                    </Box>

                    {/*mobile view*/}
                    {activeStep === step.number && (
                      <Box className={styles.stepImageMobile}>
                        <Image
                          src={step.image}
                          alt={`Step ${step.number}: ${step.title}`}
                          fill
                          style={{ objectFit: "contain" }}
                          priority
                        />
                      </Box>
                    )}
                  </Card>
                ))}
              </Box>

              {/*desktop view*/}
              <Box className={styles.activeImageBox}>
                <Box className={styles.activeImageInner}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={
                          steps.find((step) => step.number === activeStep)
                            ?.image
                        }
                        alt={`Step ${activeStep}: ${
                          steps.find((step) => step.number === activeStep)
                            ?.title
                        }`}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <StoreButtons />
      </Box>
    </section>
  );
}
