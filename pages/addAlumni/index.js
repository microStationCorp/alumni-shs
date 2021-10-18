import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import CustomHead from "components/headMeta";
import { RegisterAlumniValidation } from "utils/validation";
import { Entry, PassoutEntry, GenderEntry } from "components/addAlumni";
import CustomDialog from "components/dialogmodal";

export default function AddAlumni() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alertMsg, setMsg] = useState("");
  const [errorType, setErrortype] = useState("success");

  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");

  const clearAllField = () => {
    setFname("");
    setPnumber("");
    setEmail("");
    setGender("");
    setYear("");
  };

  const handler = (e, binder) => {
    binder(e.target.value);
  };

  const handleDialogClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setDialogOpen(false);
    }
  };

  const onsubmit = async () => {
    setLoading(true);
    setDialogOpen(true);

    const { error, value } = RegisterAlumniValidation({
      full_name: fname.toUpperCase().trim().split(" "),
      phone_number: pnumber,
      email,
      gender,
      pass_out_year: year,
    });

    if (!error) {
      fetch("/api/addAlumni", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((res) => {
          setLoading(false);
          res.json().then((data) => {
            if (res.status !== 201) {
              // console.log(data.msg);
              setErrortype("error");
              setMsg(data.msg);
            } else {
              // console.log(data);
              setErrortype("success");
              setMsg("submitted");
            }
          });
        })
        .catch(() => {
          console.log("failed to upload");
        });
    } else {
      setLoading(false);
      setErrortype("error");
      setMsg(error.details[0].message);
    }
  };

  return (
    <>
      <CustomHead
        title="Add Alumni Page"
        description="this page helps to add new alumni's"
      />

      {/* main container */}
      <Container maxWidth="md">
        {/* dialog modal */}
        <CustomDialog
          dialogOpen={dialogOpen}
          loading={loading}
          errorType={errorType}
          alertMsg={alertMsg}
          handleDialogClose={handleDialogClose}
          clearAllField={clearAllField}
        />

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
