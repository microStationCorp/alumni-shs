import CustomHead from "components/headMeta";
import { Grid } from "@mui/material";
import dbConnect from "utils/dbConnect";
import alumniModel from "model/alumniModel";
import { CustomCard } from "components/list";
import { NoDataCard } from "components/list";

export default function Lists({ alumnis }) {
  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Grid container justifyContent="space-around">
        {alumnis.length === 0 ? (
          <NoDataCard />
        ) : (
          <>
            {alumnis.map((alumni) => (
              <CustomCard alumni={alumni} key={alumni._id} />
            ))}
          </>
        )}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const results = await alumniModel.find({}).select("-__v");
  const alumnis = results.map((doc) => {
    return {
      name: doc.name,
      _id: doc._id.toString(),
      phoneNo: doc.phoneNo,
      passoutYear: doc.passoutYear,
      email: doc.email,
      gender: doc.gender,
      dateOfRegister: doc.dateOfRegister,
    };
  });
  return {
    props: { alumnis },
    revalidate: 1,
  };
}
