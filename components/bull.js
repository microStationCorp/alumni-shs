const { Box, Tooltip } = require("@mui/material");

export const Bull = () => {
  return (
    <Tooltip title="Admin">
      <Box
        component="span"
        sx={{
          display: "inline-block",
          mx: "15px",
          transform: "scale(0.8)",
          color: "#f41696",
          fontSize: "20px",
        }}
      >
        •
      </Box>
    </Tooltip>
  );
};
