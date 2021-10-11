import CustomHead from "components/headMeta";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import dbConnect from "utils/dbConnect";
import alumniModel from "model/alumniModel";
import { CustomCard } from "components/list";

export default function Lists({ alumnis }) {
  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Grid container justifyContent="space-around">
        {alumnis.map((alumni) => (
          <CustomCard alumni={alumni} key={alumni._id} />
        ))}
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const results = await alumniModel.find({}).select("-__v");
  const alumnis = results.map((doc) => {
    const alumni = doc.toObject();
    alumni._id = alumni._id.toString();
    return alumni;
  });
  return {
    props: { alumnis },
  };
}
