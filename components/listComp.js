import {
  Box,
  LinearProgress,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

export const Loader = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
        <Typography align="center" sx={{ backgroundColor: "#c6c8c8" }}>
          Loading...
        </Typography>
      </Box>
    </>
  );
};

export const Finished = () => {
  return (
    <>
      <Typography align="center" sx={{ backgroundColor: "#c6c8c8" }}>
        Nothing More...
      </Typography>
    </>
  );
};

export const TableDataComp = ({ index, name, poy, dor, ia }) => {
  return (
    <>
      <TableRow>
        <TableCell align="center">{index}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell align="right">{poy}</TableCell>
        <TableCell align="right">{dor}</TableCell>
        <TableCell align="center">{ia}</TableCell>
      </TableRow>
    </>
  );
};
