import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const CustomCard = ({ alumni }) => {
  return (
    <Grid item sm={5} xs={10} sx={{ marginTop: 2 }}>
      <Card sx={{ minWidth: 275, backgroundColor: "#C5FBFA" }} elevation={4}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" gutterBottom color="#61504a">
              {alumni.name}
              {alumni.admin ? <Typography>{"(admin)"}</Typography> : null}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Gender : {alumni.gender}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Passout Year : {alumni.passoutYear}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Email-Id : {alumni.email}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              Phone No : {alumni.phoneNo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
