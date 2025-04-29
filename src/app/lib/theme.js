import { createTheme } from "@mui/material";
import { color } from "motion";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "5.5rem",
      justifySelf: "center",
      textAlign: "center",
      textWrap: "nowrap",
      ["@media (max-width:1200px)"]: {
        fontSize: "4rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "3.5rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "2.8rem",
      },
      //   fontWeight: 700,
      //   color: "#1976d2", // Example: Primary blue color
    },
    h2: {
      fontSize: "2.8rem",
      justifySelf: "center",
      ["@media (max-width:1200px)"]: {
        fontSize: "2.2rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1.8rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "2.5rem",
      textWrap: "nowrap",
      fontWeight: "bold",
      textAlign: "center",
      ["@media (max-width:1200px)"]: {
        fontSize: "2rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1.5rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "1.3rem",
      },
    },
    h4: {
      fontSize: "1.7rem",
      color: "white",
      textAlign: "center",
      ["@media (max-width:1200px)"]: {
        fontSize: "1.3rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "rem",
      },
    },
    h5: {
      fontSize: "1.6rem",
      textAlign: "left",
      color: "white",
      textWrap: "nowrap",
      fontWeight: "bold",
      ["@media (max-width:1200px)"]: {
        fontSize: "1.4rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1.2rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "1.1rem",
      },
    },
    h6: {
      fontSize: "1.5rem",
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
      ["@media (max-width:1200px)"]: {
        fontSize: "1.2rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "0.8rem",
      },
    },

    body1: {
      fontSize: "1.5rem",
      textAlign: "left",
      color: "white",
      ["@media (max-width:1200px)"]: {
        fontSize: "1.3rem",
        textAlign: "right",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1rem",
        textAlign: "right",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "0.9rem",
        textAlign: "right",
      },
    },

    body2: {
      fontSize: "1.5rem",
      textAlign: "left",
      color: "black",
      ["@media (max-width:1200px)"]: {
        fontSize: "1.3rem",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "1.2rem",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "1rem",
      },
    },

    caption: {
      fontSize: "1.3rem",
      textAlign: "right",
      textWrap: "nowrap",
      color: "white",
      fontStyle: "italic",
      ["@media (max-width:1200px)"]: {
        fontSize: "1rem",
        textAlign: "right",
      },
      ["@media (max-width:900px)"]: {
        fontSize: "0.8rem",
        textAlign: "right",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "0.7rem",
        textAlign: "right",
      },
    },
  },

  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: "white",
          borderWidth: "1.5px",
          fontWeight: "bold",
          height: "auto",
          padding: "6px 12px",
          fontSize: "1.5rem",
          ["@media (max-width:1200px)"]: {
            fontSize: "1.3em",
          },
          ["@media (max-width:900px)"]: {
            fontSize: "1rem",
          },
          ["@media (max-width:600px)"]: {
            fontSize: "0.6rem",
          },
        },
        outlined: {
          borderColor: "white",
        },
      },
      variants: [
        {
          props: { color: "yellow" },
          style: { borderColor: "yellow" },
        },
        {
          props: { color: "orange" },
          style: { borderColor: "#F37406" },
        },
        {
          props: { color: "red" },
          style: { borderColor: "red" },
        },
        {
          props: { color: "lightBlue" },
          style: { borderColor: "#01f2f2" },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          textTransform: "none",
          transition: "background-color 0.3s, color 0.3s",
        },

        containedLogin: {
          backgroundColor: "#25A599",
          color: "white",
          "&:hover": {
            backgroundColor: "#25A599",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "register" },
          style: {
            borderRadius: "35px",
            backgroundColor: "#F37406",
            color: "white",
            "&:hover": {
              backgroundColor: "#e46b14",
            },
          },
        },
        {
          props: { variant: "contained", color: "confirm" },
          style: {
            backgroundColor: "#25A599",
            color: "#white",
            "&:hover": {
              backgroundColor: "#20897f",
            },
          },
        },
        {
          props: { variant: "contained", color: "login" },
          style: {
            backgroundColor: "#4caf50",
            color: "white",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          "& label": {
            fontSize: "1.2rem",
            color: "black",
          },
          "& .MuiInputBase-root": {
            fontSize: "1.2rem",
            padding: "10px",
            color: "black",
          },
          "& .MuiFormHelperText-root": {
            fontSize: "1rem",
          },
        },
      },
    },
  },
});

export default theme;
