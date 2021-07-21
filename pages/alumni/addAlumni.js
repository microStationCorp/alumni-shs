import { Container, TextField } from "@material-ui/core";
import Head from "next/head";

export default function AddAlumni() {
  return (
    <>
      <Head>
        <title>Add Alumni</title>
      </Head>
      <Container>
        <TextField label="Name" variant="outlined" />
      </Container>
    </>
  );
}
