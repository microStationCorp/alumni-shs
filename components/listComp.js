import { TableCell, TableRow, Typography } from "@mui/material";

export const Loader = () => {
  return (
    <>
      <Typography align="center" variant="h5">
        Loading...
      </Typography>
    </>
  );
};

export const Finished = () => {
  return (
    <>
      <Typography variant="h5" align="center">
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
