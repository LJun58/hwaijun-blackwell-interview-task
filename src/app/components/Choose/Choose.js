"use client";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import styles from "./Choose.module.scss";
import RegisterButton from "../Buttons/RegisterButton";

export default function Choose() {
  const choose = [
    {
      title: "Regulated",
      description:
        "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.",
      icon: "/choose/icon-1.png",
    },
    {
      title: "0 Commissions",
      description:
        "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
      icon: "/choose/icon-2.png",
    },
    {
      title: "User-friendly",
      description:
        "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
      icon: "/choose/icon-3.png",
    },
    {
      title: "Tier 1 liquidity",
      description:
        "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
      icon: "/choose/icon-4.png",
    },
  ];

  return (
    <section className={styles.chooseContainer}>
      <Box
        component="img"
        src="/bg-2.png"
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
        <Typography
          variant="h3"
          className={styles.chooseMainTitle}
        >
          Why Choose Us?
        </Typography>

        <Stack
          spacing={2}
          className={styles.stackContainer}
        >
          {choose.map((item, index) => (
            <Box
              key={index}
              className={styles.chooseItemBox}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 2, md: 12 },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, md: 12 }}
                sx={{
                  width: { xs: "100%", md: "35%" },
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <Typography
                  variant="h5"
                  className={styles.chooseTitle}
                >
                  {item.title}
                </Typography>
              </Stack>

              <Box
                sx={{
                  width: { xs: "100%", md: "65%" },
                }}
              >
                <Typography
                  variant="body2"
                  className={styles.description}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <RegisterButton />
      </Box>
    </section>
  );
}
