import CustomHead from "components/headMeta";
import { Grid, Paper } from "@material-ui/core";

export default function Lists() {
  return (
    <>
      <CustomHead
        title="List of Alumni"
        description="this page contains list of alumnis'"
      />
      <Grid container justifyContent="space-around">
        <Grid item sm={5} xs={10}>
          <Paper elevation={3}>
            <div>list of alumni page</div>
          </Paper>
        </Grid>
        <Grid item sm={5} xs={10}>
          <Paper elevation={3}>
            <div>list of alumni page</div>
          </Paper>
        </Grid>
        <Grid item sm={5} xs={10}>
          <Paper elevation={3}>
            <div>list of alumni page</div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
