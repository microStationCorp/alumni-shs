import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CustomHead from "components/headMeta";
import { RegisterAlumniValidation } from "utils/validation";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  FormFeedback,
  Entry,
  PassoutEntry,
  GenderEntry,
} from "components/addAlumni";

export default function AddAlumni() {
  const [openAlert, setAlert] = useState(false);
  const [alertMsg, setMsg] = useState("");
  const [errorType, setErrortype] = useState("success");

  const [fname, setFname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");

  const handler = (e, binder) => {
    binder(e.target.value);
  };

  const handleClose = () => {
    setAlert(false);
  };

  const onsubmit = async () => {
    const { error, value } = RegisterAlumniValidation({
      full_name: fname.toUpperCase().trim().split(" "),
      phone_number: pnumber,
      email,
      gender,
      pass_out_year: year,
    });

    if (!error) {
      fetch("/api/addalumni", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((res) => {
          res.json().then((data) => {
            if (res.status !== 201) {
              console.log(data.msg);
              setErrortype("error");
              setMsg(data.msg);
              setAlert(true);
            } else {
              console.log(data);
              setErrortype("success");
              setMsg("submitted");
              setAlert(true);
            }
          });
        })
        .catch(() => {
          console.log("failed to upload");
        });
    } else {
      setErrortype("error");
      setMsg(error.details[0].message);
      setAlert(true);
    }
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <CustomHead
        title="Add Alumni Page"
        description="this page helps to add new alumni's"
      />

      {/* main container */}
      <Container maxWidth="md">
        <FormFeedback
          openAlert={openAlert}
          handleClose={handleClose}
          severity={errorType}
          alertMsg={alertMsg}
          action={action}
          icon={
            errorType === "error" ? (
              <ErrorOutlineIcon fontSize="inherit" />
            ) : (
              <CheckCircleOutlineIcon fontSize="inherit" />
            )
          }
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
