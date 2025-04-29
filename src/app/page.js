"use client";

import styles from "./Page.module.scss";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HeroSection from "./components/HeroSection/HeroSection";
import FastMatching from "./components/FastMatching/FastMatching";
import EasyAnalysis from "./components/EasyAnalysis/EasyAnalysis";
import TradeSteps from "./components/TradeSteps/TradeSteps";
import LinkMT4Acc from "./components/LinkMT4Acc/LinkMT4Acc";
import Choose from "./components/Choose/Choose";
import NavigateApp from "./components/NavigateApp/NavigateApp";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";
import ScrollToTopButton from "./components/Buttons/ScrollToTopButton";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1520px",
        margin: "0 auto",
        paddingTop: "5%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <HeroSection />
      <FastMatching />
      <EasyAnalysis />
      <TradeSteps />
      <LinkMT4Acc />
      <Choose />
      <NavigateApp />
      <EnquiryForm />
      <ScrollToTopButton />
    </Container>
  );
}
