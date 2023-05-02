import { Typography } from "@mui/material";

export default function Footer() {
    return (
      <Typography
        className="footer"
        align="left"
      >
        {"Copyright © Reagan Milchling "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }