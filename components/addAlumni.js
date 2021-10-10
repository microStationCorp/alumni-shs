import {
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Slide,
} from "@mui/material";

function Entry({ label, data, handler }) {
  return (
    <>
      <Grid container style={{ paddingBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">{label} :</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label={label}
            variant="outlined"
            value={data}
            onChange={handler}
            size="small"
          />
        </Grid>
      </Grid>
    </>
  );
}

function PassoutEntry({ year, handleYear }) {
  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  return (
    <Grid container style={{ paddingBottom: "10px" }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Passout Year :</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Select
          value={year}
          onChange={handleYear}
          style={{ minWidth: "200px" }}
        >
          {years.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

function GenderEntry({ gender, handleGender }) {
  return (
    <Grid container style={{ paddingBottom: "10px" }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Gender :</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Select
          value={gender}
          onChange={handleGender}
          style={{ minWidth: "200px" }}
        >
          {["Male", "Female", "Other"].map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
}

export { Entry, PassoutEntry, GenderEntry };
