import { Typography } from "@material-ui/core";
import Head from "next/head";

export default function ErrorPageNotFound() {
  return (
    <>
      <Head>
        <title>page not found</title>
      </Head>
      <div>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          404|Page not found
        </Typography>
      </div>
    </>
  );
}
