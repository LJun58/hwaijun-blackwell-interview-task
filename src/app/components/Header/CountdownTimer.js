"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

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
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <Box key={index}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "6px 10px",
              borderRadius: "4px",
              minWidth: "40px",
            }}
          >
            <Typography fontWeight="bold">
              {String(timeLeft[unit]).padStart(2, "0")}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            color="white"
          >
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </Typography>
        </Box>
      ))}
      {isExpired && (
        <Box
          mt={2}
          px={2}
          py={1}
          borderRadius={1}
          sx={{ backgroundColor: "rgba(255, 0, 0, 0.2)" }}
        >
          <Typography
            fontWeight="bold"
            color="error"
          >
            ENDED
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default CountdownTimer;
