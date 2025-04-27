"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { Box, IconButton } from "@mui/material";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  const targetDate = "2025-12-31T23:59:59";

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endTime = new Date(targetDate);
      const difference = endTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <nav className="sticky top-0 left-0 z-50 ">
      <header className={styles.header}>
        <div className={styles.left}>
          <Image
            src={logo}
            alt="Blackwell Global Logo"
          />
        </div>

        <div className={styles.countdown}>
          <h4>PROMOTION ENDS IN</h4>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>{timeLeft.days}</span>
            <span className={styles.countdownLabel}>Days</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className={styles.countdownLabel}>Hours</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className={styles.countdownLabel}>Minutes</span>
          </div>
          <div className={styles.countdownItem}>
            <span className={styles.countdownValue}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className={styles.countdownLabel}>Seconds</span>
          </div>

          {isExpired && (
            <div className={styles.expiredNotice}>
              <p>ENDED</p>
            </div>
          )}
        </div>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="warning"
            sx={{ fontWeight: 600 }}
            //onClick={() => {}}
          >
            Register Now
          </Button>
          <IconButton
            color="inherit"
            aria-label="user account"
          >
            <PersonIcon />
          </IconButton>
        </Box>
      </header>
    </nav>
  );
}
