import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Bull } from "components/bull";
import CustomHead from "components/headMeta";
import alumniModel from "model/alumniModel";
import dbConnect from "utils/dbConnect";

export default function AboutSingleAlumni({ alumni }) {
  return (
    <>
      <CustomHead
        title={alumni.name}
        description="this page contains single alumni details"
      />
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275, backgroundColor: "#C5FBFA" }} elevation={4}>
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                color="#61504a"
                align="center"
              >
                {alumni.name}
                {alumni.admin ? <Bull /> : null}
              </Typography>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 16 }}
                    align="center"
                  >
                    Gender : {alumni.gender}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 16 }}
                    align="center"
                  >
                    Passout Year : {alumni.passoutYear}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                color="text.secondary"
                sx={{ fontSize: 16 }}
                align="center"
              >
                Email-Id : {alumni.email}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: 16 }}
                align="center"
              >
                Phone No : {alumni.phoneNo}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: 16 }}
                align="center"
              >
                Date of Register : {alumni.dateOfRegister.toDateString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  await dbConnect();
  const result = await alumniModel.findById(context.params.id);
  return {
    props: {
      alumni: {
        admin: result.admin,
        name: result.name,
        _id: result._id.toString(),
        phoneNo: result.phoneNo,
        passoutYear: result.passoutYear,
        email: result.email,
        gender: result.gender,
        dateOfRegister: result.dateOfRegister,
      },
    },
  };
}
