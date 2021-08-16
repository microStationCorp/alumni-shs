import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import CustomHead from "../../components/headMeta";

export default function AddAlumni() {
  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");

  const handler = (e, binder) => {
    binder(e.target.value);
  };

  const onsubmit = () => {
    console.log(fname, pnumber, email, year, gender);
  };
  return (
    <>
      <CustomHead
        title="Add Alumni Page"
        description="this page helps to add new alumni's"
      />

      {/* main container */}
      <Container maxWidth="md">
        <style jsx global>
          {"body {background: aquamarine;}"}
        </style>
        <Paper style={{ padding: "10px" }} elevation={3}>
          <Grid
            container
            justifyContent="center"
            style={{ paddingBottom: "10px" }}
          >
            <Grid item>
              <Typography variant="h4" color="secondary" align="center">
                Alumni Register Form
              </Typography>
            </Grid>
          </Grid>
          <Entry
            data={fname}
            handler={(e) => handler(e, setFname)}
            label="Full Name"
          />
          <Entry
            data={pnumber}
            handler={(e) => handler(e, setPnumber)}
            label="Phone Number"
          />
          <Entry
            data={email}
            handler={(e) => handler(e, setEmail)}
            label="Email Id"
          />
          <GenderEntry
            gender={gender}
            handleGender={(e) => handler(e, setGender)}
          />
          <PassoutEntry year={year} handleYear={(e) => handler(e, setYear)} />
          <Grid
            container
            justifyContent="center"
            style={{ paddingTop: "10px" }}
          >
            <Grid item>
              <Button onClick={onsubmit} variant="contained" color="primary">
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
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
            variant="standard"
            value={data}
            onChange={handler}
          />
        </Grid>
      </Grid>
    </>
  );
}
