import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export function Copyright() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "20vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://alumnishs.vercel.app/">
              Alumni-SHS
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
