"use client";
import {
  Box,
  Typography,
  Stack,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import styles from "./NavigateApp.module.scss";
import StoreButtons from "../Buttons/StoreButton";
import { useState } from "react";

export default function NavigateApp() {
  const reasons = [
    {
      title: "Discover",
      description:
        "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
      image: "/reason/reason-1.png",
      icon: {
        default: "/navigate/icon1.png",
        selected: "/navigate/icon1-blue.png",
      },
    },
    {
      title: "Activity",
      description:
        "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
      image: "/reason/reason-2.png",
      icon: {
        default: "/navigate/icon2.png",
        selected: "/navigate/icon2-blue.png",
      },
    },
    {
      title: "Trade",
      description:
        "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
      image: "/reason/reason-3.png",
      icon: {
        default: "/navigate/icon3.png",
        selected: "/navigate/icon3-blue.png",
      },
    },
    {
      title: "Positions",
      description:
        "Easily track the status of all your trades and monitor your account metrics in real-time.",
      image: "/reason/reason-4.png",
      icon: {
        default: "/navigate/icon4.png",
        selected: "/navigate/icon4-blue.png",
      },
    },
    {
      title: "Account",
      description:
        "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!",
      image: "/reason/reason-5.png",
      icon: {
        default: "/navigate/icon5.png",
        selected: "/navigate/icon5-blue.png",
      },
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <section className={styles.navigateAppContainer}>
      <Typography
        variant="h3"
        className={styles.navigateAppMainTitle}
      >
        Navigate Our App in 5 Clicks
      </Typography>

      <Stack sx={{ width: "100%", marginTop: 5 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Navigate App Tabs"
          sx={{ width: "90%" }}
          slotProps={{
            indicator: {
              style: {
                display: "none",
              },
            },
          }}
        >
          {reasons.map((reason, index) => (
            <Tab
              key={index}
              sx={{ "& .MuiTabs-indicator": { display: "none" } }}
              label={
                <Image
                  src={
                    selectedTab === index
                      ? reason.icon.selected
                      : reason.icon.default
                  }
                  alt={reason.title}
                  width={50}
                  height={50}
                />
              }
              className={`${styles.tabButton} ${
                selectedTab === index ? styles.selectedTab : ""
              }`}
            />
          ))}
        </Tabs>

        <Card className={styles.cardContainer}>
          <CardContent>
            <Stack
              spacing={{ xs: 2, sm: 4 }}
              direction={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <Stack
                direction="column"
                gap={5}
                sx={{
                  flexShrink: 1,
                }}
              >
                <Typography
                  variant="h4"
                  className={styles.reasonTitle}
                >
                  {reasons[selectedTab].title}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.description}
                >
                  {reasons[selectedTab].description}
                </Typography>
              </Stack>

              <Box
                sx={{
                  flexShrink: 0,
                }}
              >
                <Image
                  src={reasons[selectedTab].image}
                  alt={reasons[selectedTab].title}
                  width={500}
                  height={300}
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <StoreButtons />
    </section>
  );
}
